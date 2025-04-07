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
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(Array(images.length).fill(false));
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  
  // Preload all images
  useEffect(() => {
    const imageObjects = images.map((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImagesLoaded(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
      return img;
    });
    
    return () => {
      // Clean up image objects
      imageObjects.forEach(img => {
        img.onload = null;
      });
    };
  }, [images]);
  
  // Check if all images are loaded
  useEffect(() => {
    if (imagesLoaded.every(loaded => loaded)) {
      setAllImagesLoaded(true);
    }
  }, [imagesLoaded]);

  // Start slideshow only after images are loaded
  useEffect(() => {
    if (!allImagesLoaded) return;
    
    const bgInterval = setInterval(() => {
      setCurrentBgIndex(prev => (prev + 1) % images.length);
    }, interval);
    
    return () => {
      clearInterval(bgInterval);
    };
  }, [images.length, interval, allImagesLoaded]);

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
    <div className="fixed inset-0 -z-10 overflow-hidden bg-primary/20">
      {/* Hidden preload container */}
      <div className="hidden">
        {images.map((src, index) => (
          <img key={`preload-${index}`} src={src} alt="Preload" />
        ))}
      </div>
      
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
            loading="eager"
            style={{ 
              willChange: "transform"
            }}
          />
          
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        </motion.div>
      </AnimatePresence>
      
      {/* Loading indicator (only shown before all images load) */}
      {!allImagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-background">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      )}
    </div>
  );
};

export default BackgroundSlideshow;
