import React from 'react';
import { motion } from 'motion/react';
import { Book } from '../types';
import { BookOpen, Sparkles } from 'lucide-react';
import { cn } from '../utils';

interface HomeProps {
  key?: React.Key;
  book: Book;
  onSelectChapter: (id: string) => void;
}

export function Home({ book, onSelectChapter }: HomeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 pb-24"
    >
      <header className="flex flex-col items-center text-center gap-6 mb-24 mt-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#CCFF00]/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#333] bg-[#1A1A1A] z-10">
          <Sparkles className="w-4 h-4 text-[#CCFF00]" />
          <span className="text-[10px] font-black tracking-widest text-[#CCFF00] uppercase">Fé Reformada</span>
        </div>
        <h1 className="font-display text-[64px] sm:text-[96px] font-black tracking-tighter leading-[0.9] text-white z-10 uppercase">
          {book.title}
        </h1>
        <p className="text-[#999] font-sans text-xl sm:text-2xl font-medium max-w-2xl px-4 z-10">
          {book.subtitle}
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {book.chapters.map((chapter, idx) => (
          <ChapterCard 
            key={chapter.id} 
            chapter={chapter} 
            idx={idx} 
            onClick={() => onSelectChapter(chapter.id)} 
          />
        ))}
      </div>
    </motion.div>
  );
}

function ChapterCard({ chapter, idx, onClick }: { key?: React.Key, chapter: any, idx: number, onClick: () => void }) {
  const colors = [
    "bg-[#CCFF00] text-black border-transparent",
    "bg-[#FF3366] text-black border-transparent",
    "bg-[#1A1A1A] text-white border-[#333] hover:border-[#666]",
    "bg-[#1A1A1A] text-white border-[#333] hover:border-[#666]",
    "bg-[#1A1A1A] text-white border-[#333] hover:border-[#666]",
    "bg-[#1A1A1A] text-white border-[#333] hover:border-[#666]",
  ];
  
  const colorClass = colors[idx % colors.length];
  const isDark = colorClass.includes("text-black");
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "text-left group relative outline-none flex flex-col justify-between p-8 rounded-[40px] border transition-all duration-300 min-h-[320px]",
        colorClass
      )}
    >
      <div className="mb-8 flex justify-between items-start">
        {chapter.number ? (
          <span className={cn("text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded border", isDark ? "border-black/20" : "border-[#333]")}>
            Capítulo {chapter.number}
          </span>
        ) : (
          <div className={cn("w-12 h-12 rounded-full border flex items-center justify-center", isDark ? "border-black/20" : "border-[#333]")}>
            <BookOpen className="w-5 h-5 text-current" />
          </div>
        )}
      </div>
      
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-[40px] font-black uppercase tracking-tighter leading-[0.9]">
          {chapter.title}
        </h3>
        {chapter.subtitle && (
          <p className={cn("text-sm font-bold opacity-80 font-sans mt-2")}>
            {chapter.subtitle}
          </p>
        )}
      </div>
    </motion.button>
  );
}
