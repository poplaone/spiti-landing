
import { useState, useEffect } from 'react';

interface FeaturedPhotoProps {
  image: string;
  caption: string;
  index?: number;
}

export const FeaturedPhoto = ({
  image,
  caption,
  index = 0
}: FeaturedPhotoProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full px-4">
      <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg bg-sand/60 backdrop-blur-sm p-2 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-yellow-300/10 rounded-2xl z-0"></div>
        <div className="relative h-full w-full overflow-hidden rounded-xl z-10">
          <div className={`absolute inset-0 bg-gray-200 animate-pulse ${isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}></div>
          <img 
            src={image} 
            alt={caption} 
            className={`object-cover w-full h-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
            onLoad={() => setIsLoaded(true)} 
          />
        </div>
      </div>
      <p className="mt-3 text-sm text-center font-medium text-yellow-500">{caption}</p>
    </div>
  );
};

export default FeaturedPhoto;
