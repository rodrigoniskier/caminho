import React from 'react';
import { motion, PanInfo } from 'motion/react';
import { Chapter } from '../types';
import { BookSection } from './BookSection';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ChapterReaderProps {
  key?: React.Key;
  chapter: Chapter;
  onBack: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export function ChapterReader({ chapter, onBack, onNext, onPrev }: ChapterReaderProps) {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [chapter]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold && onNext) {
      onNext();
    } else if (info.offset.x > threshold && onPrev) {
      onPrev();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pb-32 pt-6 w-full max-w-3xl mx-auto px-4 sm:px-6"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
    >
      <div className="flex items-center justify-between mb-12 cursor-pointer relative z-20">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-[#999] hover:text-white transition-colors group"
        >
          <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#333] flex items-center justify-center group-hover:border-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </div>
          <span className="font-sans text-[10px] tracking-widest font-black uppercase">Menu Principal</span>
        </button>
      </div>

      <header className="mb-16 flex flex-col gap-4 pointer-events-none">
        {chapter.number && (
          <span className="text-[10px] font-black text-[#CCFF00] tracking-widest uppercase self-start border border-[#CCFF00]/20 bg-[#CCFF00]/10 px-3 py-1 rounded">
            Capítulo {chapter.number}
          </span>
        )}
        <h1 className="font-display text-[56px] sm:text-[80px] font-black text-white tracking-tighter leading-[0.9] uppercase">
          {chapter.title}
        </h1>
        {chapter.subtitle && (
          <h2 className="text-2xl text-[#999] font-medium font-sans mt-2">
            {chapter.subtitle}
          </h2>
        )}
      </header>

      <div className="flex flex-col gap-12 sm:gap-16 cursor-text relative z-10" onPointerDownCapture={(e) => e.stopPropagation()}>
        {chapter.sections.map((section) => (
          <BookSection key={section.id} section={section} />
        ))}
      </div>

      <div className="mt-24 pt-8 border-t border-[#333] flex justify-between items-center relative z-20">
        {onPrev ? (
          <button onClick={onPrev} className="flex flex-col items-start gap-1 group text-[#999] hover:text-white transition-colors">
            <span className="text-[10px] tracking-widest uppercase font-black">Anterior</span>
            <div className="flex items-center gap-2">
              <ChevronLeft className="w-5 h-5 group-hover:text-[#CCFF00]" />
              <span className="font-display font-black tracking-tighter uppercase text-lg">Deslizar / Voltar</span>
            </div>
          </button>
        ) : <div />}

        {onNext ? (
          <button onClick={onNext} className="flex flex-col items-end gap-1 group text-[#999] hover:text-white transition-colors">
            <span className="text-[10px] tracking-widest uppercase font-black">Próximo</span>
            <div className="flex items-center gap-2">
              <span className="font-display font-black tracking-tighter uppercase text-lg">Deslizar / Avançar</span>
              <ChevronRight className="w-5 h-5 group-hover:text-[#CCFF00]" />
            </div>
          </button>
        ) : <div />}
      </div>
    </motion.div>
  );
}
