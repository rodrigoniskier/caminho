import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Text-to-Speech
  app.post("/api/tts", async (req, res) => {
    try {
      const { text } = req.body;
      if (!text) {
        return res.status(400).json({ error: "Text is required" });
      }

      if (!process.env.GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY is not configured");
      }

      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      // Using an excited/vibrant tone instruction. Puck and Zephyr are good alternatives, we'll use Zephyr.
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

      // The Gemini TTS returns raw PCM (audio/l16; rate=24000; channels=1)
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

      res.json({ audio: wavBuffer.toString("base64"), mimeType: "audio/wav" });
    } catch (error) {
      console.error("TTS Error:", error);
      res.status(500).json({ error: "Failed to generate audio" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
