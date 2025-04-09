
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2, Zap, Palmtree, Mountain, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface QuizStep2Props {
  budget: string | null;
  setBudget: (value: string) => void;
}

const QuizStep2 = ({ budget, setBudget }: QuizStep2Props) => {
  return (
    <motion.div 
      className="space-y-4" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-semibold text-white flex items-center gap-2">
        <Zap className="h-5 w-5 text-yellow-400 animate-pulse" />
        <span>2. What's your budget?</span>
      </h3>
      <div className="grid grid-cols-3 gap-4">
        <Button 
          variant={budget === 'budget' ? 'default' : 'outline'} 
          className={`py-6 relative overflow-hidden transition-all duration-300 ${
            budget === 'budget' 
              ? 'bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-600 hover:to-yellow-400 neon-glow' 
              : 'bg-white/10 hover:bg-white/20 text-white hover:scale-105'
          }`} 
          onClick={() => setBudget('budget')}
        >
          {budget === 'budget' && (
            <motion.div 
              className="absolute inset-0 bg-white/20" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: [0, 0.5, 0] }} 
              transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
            />
          )}
          <div className="flex flex-col items-center justify-center gap-1">
            <Palmtree className="h-5 w-5 mb-1 flex-shrink-0" />
            <span>Budget</span>
            {budget === 'budget' && <CheckCircle2 className="h-5 w-5 text-white mt-1 flex-shrink-0" />}
          </div>
        </Button>
        <Button 
          variant={budget === 'economic' ? 'default' : 'outline'} 
          className={`py-6 relative overflow-hidden transition-all duration-300 ${
            budget === 'economic' 
              ? 'bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-600 hover:to-yellow-400 neon-glow' 
              : 'bg-white/10 hover:bg-white/20 text-white hover:scale-105'
          }`} 
          onClick={() => setBudget('economic')}
        >
          {budget === 'economic' && (
            <motion.div 
              className="absolute inset-0 bg-white/20" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: [0, 0.5, 0] }} 
              transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
            />
          )}
          <div className="flex flex-col items-center justify-center gap-1">
            <Mountain className="h-5 w-5 mb-1 flex-shrink-0" />
            <span>Economic</span>
            {budget === 'economic' && <CheckCircle2 className="h-5 w-5 text-white mt-1 flex-shrink-0" />}
          </div>
        </Button>
        <Button 
          variant={budget === 'luxury' ? 'default' : 'outline'} 
          className={`py-6 relative overflow-hidden transition-all duration-300 ${
            budget === 'luxury' 
              ? 'bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-600 hover:to-yellow-400 neon-glow' 
              : 'bg-white/10 hover:bg-white/20 text-white hover:scale-105'
          }`} 
          onClick={() => setBudget('luxury')}
        >
          {budget === 'luxury' && (
            <motion.div 
              className="absolute inset-0 bg-white/20" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: [0, 0.5, 0] }} 
              transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
            />
          )}
          <div className="flex flex-col items-center justify-center gap-1">
            <Sparkles className="h-5 w-5 mb-1 flex-shrink-0" />
            <span>Luxury</span>
            {budget === 'luxury' && <CheckCircle2 className="h-5 w-5 text-white mt-1 flex-shrink-0" />}
          </div>
        </Button>
      </div>
    </motion.div>
  );
};

export default QuizStep2;
