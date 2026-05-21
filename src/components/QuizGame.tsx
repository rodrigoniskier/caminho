import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils';
import { QuizQuestion } from '../types';

interface QuizGameProps {
  questions: QuizQuestion[];
}

export function QuizGame({ questions }: QuizGameProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (!questions || questions.length === 0) return null;

  const currentQ = questions[currentIndex];

  const handleSelect = (idx: number) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);
    if (idx === currentQ.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setIsFinished(true);
    }
  };

  const reset = () => {
    setCurrentIndex(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setIsFinished(false);
    
    setTimeout(() => {
      window.scrollBy({ top: -300, behavior: 'smooth' });
    }, 100);
  };

  if (isFinished) {
    return (
      <div className="bg-[#1A1A1A] p-8 rounded-[40px] border border-[#333] flex flex-col items-center justify-center text-center gap-6 min-h-[400px]">
        <h3 className="font-display text-[48px] font-black uppercase text-[#CCFF00] leading-none">Resultado</h3>
        <p className="text-2xl text-white font-bold">Você acertou {score} de {questions.length}!</p>
        <div className="w-full h-4 bg-[#333] rounded-full overflow-hidden mt-4">
          <div 
            className={cn("h-full rounded-full", score / questions.length > 0.6 ? "bg-[#CCFF00]" : "bg-[#FF3366]")} 
            style={{ width: `${(score / questions.length) * 100}%` }} 
          />
        </div>
        <button onClick={reset} className="bg-[#FF3366] text-black px-8 py-4 mt-8 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform">
          Tentar Novamente
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#1A1A1A] p-6 sm:p-10 rounded-[40px] border border-[#333] flex flex-col gap-8 min-h-[400px] relative overflow-hidden my-8">
      <div className="flex justify-between items-center z-10 w-full">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#CCFF00] border border-[#CCFF00]/30 bg-[#CCFF00]/10 px-3 py-1 rounded">Questão {currentIndex + 1} de {questions.length}</span>
        <span className="text-[10px] font-black uppercase tracking-widest text-[#999] px-3 py-1 bg-[#222] rounded">Acertos: {score}</span>
      </div>

      <h4 className="font-display text-[28px] sm:text-[36px] font-black text-white leading-[1.1] uppercase z-10 min-h-[100px]">
        {currentQ.question}
      </h4>

      <div className="flex flex-col gap-3 z-10">
        {currentQ.options.map((opt, idx) => {
          let btnClass = "bg-[#222] border-[#444] text-white hover:border-[#666]";
          if (showResult) {
            if (idx === currentQ.correctAnswer) {
              btnClass = "bg-[#CCFF00] border-[#CCFF00] text-black font-bold scale-[1.02]";
            } else if (idx === selected) {
              btnClass = "bg-[#FF3366] border-[#FF3366] text-black font-bold";
            } else {
              btnClass = "bg-[#222] border-[#444] text-white/40 opacity-50";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={showResult}
              className={cn("p-4 rounded-2xl border text-left text-base sm:text-lg font-medium transition-all duration-300", btnClass)}
            >
              {opt}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            className="flex flex-col gap-4 mt-2 z-10 pt-6 border-t border-[#333]"
          >
            <p className={cn("font-black tracking-widest uppercase text-xs flex items-center gap-2", selected === currentQ.correctAnswer ? "text-[#CCFF00]" : "text-[#FF3366]")}>
              <span className="w-2 h-2 rounded-full bg-current" />
              {selected === currentQ.correctAnswer ? "Acertou!" : "Errou"}
            </p>
            <p className="text-[#ccc] text-base font-medium leading-relaxed bg-[#222]/50 p-4 rounded-2xl border border-[#333]">{currentQ.explanation}</p>
            <button onClick={handleNext} className="bg-white text-black self-start px-6 py-3 mt-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform">
              {currentIndex < questions.length - 1 ? "Próxima Questão" : "Ver Resultado Final"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
