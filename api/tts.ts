import { GoogleGenAI } from "@google/genai";

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is not configured");
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-tts-preview",
      contents: [{ parts: [{ text: `Say enthusiastically and dynamically: ${text}` }] }],
      config: {
        responseModalities: ["AUDIO"],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: "Zephyr" },
          },
        },
      },
    });

    const inlineData = response.candidates?.[0]?.content?.parts?.[0]?.inlineData;
    
    if (!inlineData?.data) {
      throw new Error("No audio data returned from Gemini API");
    }

    // Convert raw PCM to WAV
    const rawPcmBuffer = Buffer.from(inlineData.data, "base64");
    
    const sampleRate = 24000;
    const channels = 1;
    const bitDepth = 16;
    
    const wavHeader = Buffer.alloc(44);
    wavHeader.write("RIFF", 0);
    wavHeader.writeUInt32LE(36 + rawPcmBuffer.length, 4);
    wavHeader.write("WAVE", 8);
    wavHeader.write("fmt ", 12);
    wavHeader.writeUInt32LE(16, 16); // chunk size
    wavHeader.writeUInt16LE(1, 20); // PCM format
    wavHeader.writeUInt16LE(channels, 22);
    wavHeader.writeUInt32LE(sampleRate, 24);
    wavHeader.writeUInt32LE(sampleRate * channels * (bitDepth / 8), 28); // byte rate
    wavHeader.writeUInt16LE(channels * (bitDepth / 8), 32); // block align
    wavHeader.writeUInt16LE(bitDepth, 34); // bits per sample
    wavHeader.write("data", 36);
    wavHeader.writeUInt32LE(rawPcmBuffer.length, 40);
    
    const wavBuffer = Buffer.concat([wavHeader, rawPcmBuffer]);

    res.status(200).json({ audio: wavBuffer.toString("base64"), mimeType: "audio/wav" });
  } catch (error) {
    console.error("TTS Error:", error);
    res.status(500).json({ error: "Failed to generate audio" });
  }
}
