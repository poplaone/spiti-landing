
import { useState } from 'react';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface TourPackageCardProps {
  image: string;
  title: string;
  price: string;
  duration: string;
  highlights: string[];
  index?: number;
}

export const TourPackageCard = ({ 
  image, 
  title, 
  price, 
  duration, 
  highlights,
  index = 0 
}: TourPackageCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`group opacity-0 animate-fade-in`} style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}>
      <div className="bg-amber-900/20 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2 border border-amber-700/30 h-full flex flex-col">
        <div className="relative h-56">
          <div className={`absolute inset-0 bg-gray-200 animate-pulse ${isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 z-10`}></div>
          <Image
            src={image}
            alt={title}
            fill
            className={`object-cover transition-all duration-700 group-hover:scale-110 ${
              isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
            }`}
            onLoadingComplete={() => setIsLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-20"></div>
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-30">
            <h3 className="font-bold text-lg text-white transition-all duration-300 group-hover:translate-y-[-4px]">{title}</h3>
            <p className="font-bold text-yellow-400 transition-all duration-300 group-hover:scale-110 group-hover:text-yellow-300">{price}</p>
          </div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center mb-4">
            <Clock className="h-5 w-5 text-amber-400 mr-2" />
            <p className="text-sm text-blue-100">{duration}</p>
          </div>

          <div className="mb-6 flex-grow">
            <h4 className="text-sm font-semibold text-amber-100 mb-2">Highlights:</h4>
            <ul className="space-y-1">
              {highlights.map((highlight, i) => (
                <li key={i} className="text-sm text-amber-200 flex items-center opacity-0 animate-fade-in" style={{ animationDelay: `${0.4 + (i * 0.1)}s` }}>
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2 flex-shrink-0"></div>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white border-0 shadow-md shadow-amber-800/20 transition-all duration-300 hover:shadow-amber-800/30 group-hover:translate-y-[-2px] mt-auto">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TourPackageCard;
