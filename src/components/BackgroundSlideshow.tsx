
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BackgroundSlideshowProps {
  images: string[];
  interval?: number;
}

const BackgroundSlideshow = ({ 
  images, 
  interval = 5000 
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

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? '100%' : '-100%',
        opacity: 1
      };
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? '100%' : '-100%',
        opacity: 1
      };
    }
  };

  const direction = 1; // Controls the slide direction (1 for right, -1 for left)

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div 
          key={currentBgIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ 
            x: { type: "tween", duration: 0.8, ease: "easeInOut" },
            opacity: { duration: 0.5 }
          }}
          className="absolute inset-0"
        >
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
