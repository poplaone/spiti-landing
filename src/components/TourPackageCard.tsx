
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
      <div className="bg-sand/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 border border-sand-dark/30">
        <div className="relative h-56">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <h3 className="font-bold text-lg text-white">{title}</h3>
            <p className="font-bold text-white">{price}</p>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-4">
            <Clock className="h-5 w-5 text-yellow-400 mr-2" />
            <p className="text-sm text-foreground">{duration}</p>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-yellow-500 mb-2">Highlights:</h4>
            <ul className="space-y-1">
              {highlights.map((highlight, index) => (
                <li key={index} className="text-sm text-foreground/80 flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2"></div>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-600 hover:to-yellow-400 text-white border-0 shadow-md shadow-yellow-600/20 transition-all duration-300 hover:shadow-yellow-600/30">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TourPackageCard;
