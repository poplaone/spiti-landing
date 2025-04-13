
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
  return (
    <div 
      className="group opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
    >
      <div className="bg-black/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 border border-skyblue/20">
        <div className="relative h-56">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-20 pointer-events-none"></div>
          <div className="absolute bottom-4 right-4 flex justify-end">
            <p className="font-bold text-white bg-skyblue-dark/80 backdrop-blur-sm px-3 py-1 rounded-full">{price}</p>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="font-bold text-lg text-skyblue-light mb-2">{title}</h3>
          
          <div className="flex items-center mb-4">
            <Clock className="h-5 w-5 text-skyblue mr-2" />
            <p className="text-sm text-white">{duration}</p>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-skyblue-light mb-2">Highlights:</h4>
            <ul className="space-y-1">
              {highlights.map((highlight, index) => (
                <li key={index} className="text-sm text-white/90 flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-skyblue mr-2"></div>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <Button className="w-full bg-gradient-to-r from-forest-dark to-forest-light hover:from-forest hover:to-forest text-white shadow-none hover:shadow-none">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TourPackageCard;
