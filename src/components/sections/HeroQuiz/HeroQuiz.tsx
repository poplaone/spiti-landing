
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
      <Card className="w-full max-w-2xl mx-auto lg:mx-0 neo-blur backdrop-blur-xl bg-black/80 border border-yellow-500/10 overflow-hidden rounded-xl text-white shadow-xl hover:shadow-yellow-700/20">
        <CardContent className="p-6 relative">
          <motion.div 
            className="absolute top-0 right-0 w-20 h-20 opacity-30 pointer-events-none" 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 0.3, scale: 1 }} 
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
          >
            <Mountain className="w-full h-full text-yellow-500" />
          </motion.div>
          
          {renderQuizContent()}
          
          <motion.div 
            className="mt-6 flex justify-center" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={handleNextStep} 
              disabled={currentStep === 1 && !visitedBefore || currentStep === 2 && !budget} 
              className="text-white py-2 px-8 rounded-full flex items-center group relative overflow-hidden transition-all duration-300 bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-600 hover:to-yellow-400"
            >
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" 
                initial={{ x: '-100%' }} 
                animate={{ x: '100%' }} 
                transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
              />
              <span className="relative z-10">Next Step</span>
              <ChevronRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </CardContent>
      </Card>

      <InquiryForm isOpen={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default HeroQuiz;
