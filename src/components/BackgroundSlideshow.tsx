
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BackgroundSlideshowProps {
  images: string[];
  interval?: number;
}

const BackgroundSlideshow = ({ 
  images, 
  interval = 2000 
}: BackgroundSlideshowProps) => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBgIndex(prev => (prev + 1) % images.length);
    }, interval);
    
    return () => {
      clearInterval(bgInterval);
    };
  }, [images.length, interval]);

  return (
    <div className="fixed inset-0 -z-10">
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentBgIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-skyblue-dark/70 via-skyblue/60 to-skyblue-light/70 z-10"></div>
          <img
            src={images[currentBgIndex]}
            alt={`Spiti Valley ${currentBgIndex + 1}`}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BackgroundSlideshow;
