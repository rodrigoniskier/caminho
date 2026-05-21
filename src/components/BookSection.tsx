import React, { useState, useRef } from 'react';
import { SectionData } from '../types';
import { FlipCardGroup } from './FlipCardGroup';
import { QuizGame } from './QuizGame';
import { BookOpen, PlayCircle, StopCircle, Loader2 } from 'lucide-react';

interface BookSectionProps {
  key?: React.Key;
  section: SectionData;
}

export function BookSection({ section }: BookSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = async () => {
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      return;
    }

    if (!section.audioText) return;

    setIsLoadingAudio(true);
    try {
      const response = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: section.audioText }),
      });
      
      if (!response.ok) throw new Error("Failed to fetch audio");
      
      const data = await response.json();
      if (data.audio) {
        const audioSrc = `data:audio/mp3;base64,${data.audio}`;
        if (!audioRef.current) {
          audioRef.current = new Audio(audioSrc);
          audioRef.current.addEventListener('ended', () => setIsPlaying(false));
        } else {
          audioRef.current.src = audioSrc;
        }
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error("Audio playback error:", err);
    } finally {
      setIsLoadingAudio(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both">
      {section.title && section.type !== 'quiz' && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4 mb-4">
          <h3 className="font-display text-[40px] font-black tracking-tighter leading-[0.9] text-white uppercase">
            {section.title}
          </h3>
          {section.audioText && (
            <button
              onClick={toggleAudio}
              disabled={isLoadingAudio}
              className="flex items-center gap-2 px-4 py-2 bg-[#CCFF00] text-black font-black uppercase text-xs tracking-widest rounded-full hover:bg-white transition-colors self-start sm:self-auto shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoadingAudio ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : isPlaying ? (
                <StopCircle className="w-4 h-4" />
              ) : (
                <PlayCircle className="w-4 h-4" />
              )}
              {isLoadingAudio ? "Carregando..." : isPlaying ? "Parar Narração" : "Ouvir Narração"}
            </button>
          )}
        </div>
      )}

      {section.type === 'text' && section.content && (
        <div className="flex flex-col gap-6">
          {Array.isArray(section.content) ? (
            section.content.map((p, i) => (
              <p key={i} className="text-[#ccc] leading-relaxed font-sans text-lg font-medium">
                {p}
              </p>
            ))
          ) : (
            <p className="text-[#ccc] leading-relaxed font-sans text-lg font-medium">{section.content}</p>
          )}
        </div>
      )}

      {section.type === 'flip-cards' && section.flipCards && (
        <FlipCardGroup cards={section.flipCards} />
      )}

      {section.type === 'quiz' && section.quizItems && section.quizItems.length > 0 && (
        <>
          {section.title && (
            <h3 className="font-display text-[40px] font-black tracking-tighter leading-[0.9] text-white uppercase mt-4">
              {section.title}
            </h3>
          )}
          <QuizGame questions={section.quizItems} />
        </>
      )}

      {section.type === 'grid' && section.gridItems && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
          {section.gridItems.map((item, idx) => (
            <div key={idx} className="bg-[#1A1A1A] p-8 rounded-[32px] border border-[#333] flex flex-col gap-4">
              {item.subtitle && <span className="text-[10px] uppercase font-black tracking-widest text-[#999] border border-[#333] px-2 py-1 rounded self-start">{item.subtitle}</span>}
              <h4 className="font-display font-black tracking-tighter text-[32px] uppercase leading-none text-[#CCFF00]">{item.title}</h4>
              <p className="text-[#999] text-base font-medium leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      )}

      {section.type === 'list' && section.gridItems && (
        <div className="flex flex-col gap-4 pb-4">
          {section.gridItems.map((item, idx) => (
            <div key={idx} className="bg-[#1A1A1A] border border-[#333] p-8 rounded-[32px] flex flex-col md:flex-row gap-4 md:items-start">
              <span className="font-display font-black tracking-tighter text-4xl text-[#FF3366] shrink-0 min-w-16">
                {item.title.split(' ')[0]}
              </span>
              <div className="flex flex-col gap-2">
                <span className="font-display font-black tracking-tighter uppercase text-[28px] text-white leading-none">
                  {item.title.substring(item.title.indexOf(' ') + 1)}
                </span>
                <p className="text-[#ccc] text-base font-medium">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {section.verses && section.verses.length > 0 && (
        <div className="flex flex-col gap-6 mt-8">
          {section.verses.map((v, i) => (
            <div key={i} className="flex flex-col gap-6 items-start p-10 rounded-[40px] relative overflow-hidden group bg-[#CCFF00] text-black">
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
              <span className="bg-black text-[#CCFF00] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest z-10">
                Referência Bíblica
              </span>
              <div className="flex flex-col gap-8 w-full z-10 mt-2">
                <p className="text-[32px] sm:text-[40px] font-black tracking-tighter leading-[1.1] uppercase">"{v.text}"</p>
                <div className="flex items-center gap-3 w-full justify-between pb-2">
                  <span className="text-xl font-bold font-serif italic">{v.reference}</span>
                  <span className="text-[10px] font-black px-3 py-1.5 rounded border border-black/20 text-black/60 uppercase">NVI</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
