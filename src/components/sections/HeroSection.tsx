
import { useState, useEffect } from 'react';
import { MountainSnow, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import HeroQuiz from './HeroQuiz/HeroQuiz';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToTourPackages = () => {
    const tourPackagesSection = document.getElementById('best-selling-spiti-tour-packages');
    if (tourPackagesSection) {
      tourPackagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] pt-16">
      <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="flex flex-col items-center lg:items-start min-h-[calc(90vh-80px)] justify-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`inline-block px-6 py-2 mb-4 rounded-full neo-blur border border-yellow-500/30 text-white font-medium transform transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <motion.div 
              className="flex items-center gap-2" 
              animate={{ scale: [1, 1.03, 1] }} 
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
            >
              <MountainSnow className="h-4 w-4 text-yellow-400" />
              Discover the Himalayan Wonder
            </motion.div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white text-center lg:text-left transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            SPITI VALLEY TOUR PACKAGES
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={scrollToTourPackages}
            className={`flex items-center gap-2 text-white/90 hover:text-white text-lg mb-6 cursor-pointer group transition-all duration-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span>Explore our amazing tour packages</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform text-yellow-400" />
          </motion.div>
          
          <div className={`transition-all duration-700 delay-300 w-full ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <HeroQuiz />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
