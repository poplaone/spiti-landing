
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2, Compass, Footprints, PlaneTakeoff } from "lucide-react";
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
        <Compass className="h-5 w-5 text-yellow-400 animate-pulse" />
        <span>1. Have you ever been to Spiti before?</span>
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <Button 
          variant={visitedBefore === 'yes' ? 'default' : 'outline'} 
          className={`py-6 relative overflow-hidden transition-all duration-300 ${
            visitedBefore === 'yes' 
              ? 'bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-600 hover:to-yellow-400 neon-glow' 
              : 'bg-white/10 hover:bg-white/20 text-white hover:scale-105'
          }`} 
          onClick={() => setVisitedBefore('yes')}
        >
          {visitedBefore === 'yes' && (
            <motion.div 
              className="absolute inset-0 bg-white/20" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: [0, 0.5, 0] }} 
              transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
            />
          )}
          <div className="flex items-center justify-center gap-2 w-full">
            <Footprints className="h-5 w-5 flex-shrink-0" />
            <span className="whitespace-nowrap">Yes, I've been!</span>
            {visitedBefore === 'yes' && <CheckCircle2 className="h-5 w-5 ml-1 text-white flex-shrink-0" />}
          </div>
        </Button>
        <Button 
          variant={visitedBefore === 'no' ? 'default' : 'outline'} 
          className={`py-6 relative overflow-hidden transition-all duration-300 ${
            visitedBefore === 'no' 
              ? 'bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-600 hover:to-yellow-400 neon-glow' 
              : 'bg-white/10 hover:bg-white/20 text-white hover:scale-105'
          }`} 
          onClick={() => setVisitedBefore('no')}
        >
          {visitedBefore === 'no' && (
            <motion.div 
              className="absolute inset-0 bg-white/20" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: [0, 0.5, 0] }} 
              transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
            />
          )}
          <div className="flex items-center justify-center gap-2 w-full">
            <PlaneTakeoff className="h-5 w-5 flex-shrink-0" />
            <span className="whitespace-nowrap">No, first time.</span>
            {visitedBefore === 'no' && <CheckCircle2 className="h-5 w-5 ml-1 text-white flex-shrink-0" />}
          </div>
        </Button>
      </div>
    </motion.div>
  );
};

export default QuizStep1;
