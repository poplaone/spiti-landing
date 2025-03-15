
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface FeaturedPhotoProps {
  image: string;
  caption: string;
  index?: number;
}

export const FeaturedPhoto = ({ image, caption, index = 0 }: FeaturedPhotoProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const timeout = setTimeout(() => {
      const element = document.getElementById(`featured-photo-${index}`);
      if (element) observer.observe(element);
    }, 100);
    
    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [index]);

  return (
    <div 
      id={`featured-photo-${index}`}
      className={`shrink-0 w-[280px] md:w-[320px] group transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg bg-amber-900/20 backdrop-blur-sm p-2 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-2xl z-0"></div>
        <div className="relative h-full w-full overflow-hidden rounded-xl z-10">
          <div className={`absolute inset-0 bg-gray-200 animate-pulse ${isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}></div>
          <Image
            src={image}
            alt={caption}
            fill
            className={`object-cover transition-all duration-700 group-hover:scale-110 ${
              isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
            }`}
            onLoadingComplete={() => setIsLoaded(true)}
          />
        </div>
      </div>
      <p className="mt-3 text-sm text-center font-medium text-amber-100 transition-all duration-500 group-hover:text-white">{caption}</p>
    </div>
  );
};

export default FeaturedPhoto;
