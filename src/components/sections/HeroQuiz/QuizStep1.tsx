
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2, Compass } from "lucide-react";
import { motion } from "framer-motion";

interface QuizStep1Props {
  visitedBefore: string | null;
  setVisitedBefore: (value: string) => void;
}

const QuizStep1 = ({ visitedBefore, setVisitedBefore }: QuizStep1Props) => {
  return (
    <motion.div 
      className="space-y-4" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-semibold text-white flex items-center gap-2">
        <Compass className="h-5 w-5 text-skyblue-light animate-pulse" />
        <span>1. Have you ever been to Spiti before?</span>
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <Button 
          variant={visitedBefore === 'yes' ? 'default' : 'outline'} 
          className={`py-6 relative overflow-hidden transition-all duration-300 ${
            visitedBefore === 'yes' 
              ? 'bg-gradient-to-r from-skyblue-dark to-skyblue-light hover:from-skyblue hover:to-skyblue-light text-white' 
              : 'bg-white/10 hover:bg-white/20 text-white hover:scale-105'
          }`} 
          onClick={() => setVisitedBefore('yes')}
        >
          <div className="flex items-center justify-center gap-2 w-full">
            <span className="whitespace-nowrap">Yes, I've been!</span>
            {visitedBefore === 'yes' && <CheckCircle2 className="h-5 w-5 ml-1 text-white flex-shrink-0" />}
          </div>
        </Button>
        <Button 
          variant={visitedBefore === 'no' ? 'default' : 'outline'} 
          className={`py-6 relative overflow-hidden transition-all duration-300 ${
            visitedBefore === 'no' 
              ? 'bg-gradient-to-r from-skyblue-dark to-skyblue-light hover:from-skyblue hover:to-skyblue-light text-white' 
              : 'bg-white/10 hover:bg-white/20 text-white hover:scale-105'
          }`} 
          onClick={() => setVisitedBefore('no')}
        >
          <div className="flex items-center justify-center gap-2 w-full">
            <span className="whitespace-nowrap">No, first time.</span>
            {visitedBefore === 'no' && <CheckCircle2 className="h-5 w-5 ml-1 text-white flex-shrink-0" />}
          </div>
        </Button>
      </div>
    </motion.div>
  );
};

export default QuizStep1;
