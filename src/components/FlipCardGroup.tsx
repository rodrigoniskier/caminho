import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FlipCardData } from '../types';
import { cn } from '../utils';

interface FlipCardGroupProps {
  cards: FlipCardData[];
}

export function FlipCardGroup({ cards }: FlipCardGroupProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-8">
      {cards.map((card, idx) => (
        <FlipCardItem key={idx} card={card} />
      ))}
    </div>
  );
}

function FlipCardItem({ card }: { key?: React.Key, card: FlipCardData }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div 
      className={cn(
        "flex flex-col relative overflow-hidden rounded-[32px] border cursor-pointer transition-all duration-300",
        isOpen ? "bg-[#CCFF00] text-black border-transparent" : "bg-[#1A1A1A] border-[#333] text-white hover:border-[#666]"
      )}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-8 flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <h4 className="font-display font-black tracking-tighter uppercase text-[36px] leading-[0.9] text-inherit pr-4">{card.title}</h4>
          {isOpen ? <ChevronUp className="w-8 h-8 opacity-50 shrink-0 mt-1" /> : <ChevronDown className="w-8 h-8 opacity-50 shrink-0 mt-1" />}
        </div>
        
        <div className="flex flex-col gap-3">
          <span className={cn("text-[10px] font-black uppercase tracking-widest border px-2 py-1 rounded self-start", isOpen ? "border-black/20" : "border-[#333] text-[#999]")}>
            {card.frontLabel || "Desafio"}
          </span>
          <p className={cn("text-base font-medium leading-relaxed", isOpen ? "text-black/80" : "text-[#ccc]")}>
            {card.frontText}
          </p>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-6 mt-6 border-t border-black/10 flex flex-col gap-3">
                <span className="text-[10px] font-black uppercase tracking-widest border border-black/20 px-2 py-1 rounded self-start">
                  {card.backLabel || "Contribuição"}
                </span>
                <p className="text-base font-medium leading-relaxed text-black/80">
                  {card.backText}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
