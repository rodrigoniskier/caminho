import React, { useState, useMemo } from 'react';
import { AnimatePresence } from 'motion/react';
import { bookData } from './data';
import { Home } from './components/Home';
import { ChapterReader } from './components/ChapterReader';

export default function App() {
  const [activeChapterId, setActiveChapterId] = useState<string | null>(null);

  const activeIndex = useMemo(() => {
    if (!activeChapterId) return -1;
    return bookData.chapters.findIndex((c) => c.id === activeChapterId);
  }, [activeChapterId]);

  const activeChapter = activeIndex >= 0 ? bookData.chapters[activeIndex] : null;

  const navigateTo = (direction: 'next' | 'prev') => {
    if (activeIndex === -1) return;
    const nextIndex = direction === 'next' ? activeIndex + 1 : activeIndex - 1;
    if (nextIndex >= 0 && nextIndex < bookData.chapters.length) {
      setActiveChapterId(bookData.chapters[nextIndex].id);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#CCFF00]/30 overflow-x-hidden relative">
      {/* Background ambient accents */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#CCFF00]/5 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {!activeChapter ? (
            <Home 
              key="home" 
              book={bookData} 
              onSelectChapter={setActiveChapterId} 
            />
          ) : (
            <ChapterReader 
              key={`chapter-${activeChapter.id}`} 
              chapter={activeChapter} 
              onBack={() => setActiveChapterId(null)}
              onNext={activeIndex < bookData.chapters.length - 1 ? () => navigateTo('next') : undefined}
              onPrev={activeIndex > 0 ? () => navigateTo('prev') : undefined}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
