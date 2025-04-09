
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import QuizStep1 from './QuizStep1';
import QuizStep2 from './QuizStep2';
import InquiryForm from './InquiryForm';
import { Mountain } from "lucide-react";

const HeroQuiz = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [visitedBefore, setVisitedBefore] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleNextStep = () => {
    if (currentStep === 2 && budget) {
      setIsFormOpen(true);
      setCurrentStep(1);
      setVisitedBefore(null);
      setBudget(null);
    } else if (currentStep === 1 && visitedBefore) {
      setCurrentStep(2);
    }
  };

  const renderQuizContent = () => {
    switch (currentStep) {
      case 1:
        return <QuizStep1 visitedBefore={visitedBefore} setVisitedBefore={setVisitedBefore} />;
      case 2:
        return <QuizStep2 budget={budget} setBudget={setBudget} />;
      default:
        return null;
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-2xl mx-auto lg:mx-0"
      >
        <Card className="neo-blur backdrop-blur-xl bg-gradient-to-br from-black/80 via-black/75 to-black/80 border border-yellow-500/20 overflow-hidden rounded-xl text-white shadow-[0_10px_40px_-15px_rgba(250,204,21,0.3)] hover:shadow-[0_20px_60px_-15px_rgba(250,204,21,0.4)] transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 via-transparent to-yellow-300/5 opacity-40"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500/50 via-yellow-300/70 to-yellow-500/50"></div>
          
          <CardContent className="p-6 relative z-10">
            <motion.div 
              className="absolute top-2 right-3 w-24 h-24 opacity-20 pointer-events-none" 
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }} 
              animate={{ opacity: 0.2, scale: 1, rotate: 0 }} 
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            >
              <Mountain className="w-full h-full text-yellow-400" />
            </motion.div>
            
            {renderQuizContent()}
            
            <motion.div 
              className="mt-6 flex justify-center" 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.97 }}
            >
              <Button 
                onClick={handleNextStep} 
                disabled={currentStep === 1 && !visitedBefore || currentStep === 2 && !budget} 
                className="text-white py-2 px-8 rounded-full flex items-center group relative overflow-hidden transition-all duration-300 bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-600 hover:to-yellow-400 disabled:opacity-50 disabled:pointer-events-none shadow-[0_4px_12px_rgba(250,204,21,0.3)]"
              >
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" 
                  initial={{ x: '-100%' }} 
                  animate={{ x: '100%' }} 
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                />
                <span className="relative z-10 font-medium">Next Step</span>
                <ChevronRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      <InquiryForm isOpen={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default HeroQuiz;
