
import { Check, X, Calendar, Bed, Binoculars, Utensils, Car } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface InclusionExclusion {
  inclusions: string[];
  exclusions: string[];
}

interface PriceOption {
  label: string;
  price: string;
}

interface TourPackageCardProps {
  image: string;
  title: string;
  duration: {
    nights: number;
    days: number;
  };
  priceOptions: PriceOption[];
  privateOptions?: {
    passengerOptions: string[];
    prices?: string[];
    onDemand?: boolean;
  };
  inclusions: string[];
  exclusions: string[];
  index?: number;
}

export const EnhancedTourCard = ({
  image,
  title,
  duration,
  priceOptions,
  privateOptions,
  inclusions,
  exclusions,
  index = 0
}: TourPackageCardProps) => {
  const durationLabel = `${duration.nights} Nights ${duration.days} Days`;
  
  return (
    <div 
      className={cn(
        "group opacity-0 animate-fade-in w-full max-w-md mx-auto", 
        "transition-all duration-500 hover:transform hover:scale-[1.01]"
      )} 
      style={{
        animationDelay: `${index * 0.15}s`,
        animationFillMode: 'forwards'
      }}
    >
      <div className="relative bg-black/70 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl border border-white/10">
        {/* Image without title overlay */}
        <div className="relative h-60 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          
          {/* Only show duration on image */}
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <div className="flex items-center mt-2">
              <Calendar className="h-4 w-4 text-yellow-400 mr-2" />
              <span className="text-white/90 text-sm font-medium">
                <span className="text-yellow-400">{duration.nights} Nights</span> {duration.days} Days
              </span>
            </div>
          </div>
        </div>

        {/* Title moved outside image */}
        <div className="p-3 border-b border-white/10">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>

        {/* Main content - now wider */}
        <div className="p-4">
          {/* Amenities Icons */}
          <div className="flex justify-between mb-4 px-2">
            <div className="flex flex-col items-center">
              <Bed className="h-5 w-5 text-yellow-400 mb-1" />
              <span className="text-xs text-white/80">Hotels</span>
            </div>
            <div className="flex flex-col items-center">
              <Binoculars className="h-5 w-5 text-yellow-400 mb-1" />
              <span className="text-xs text-white/80">Sightseeing</span>
            </div>
            <div className="flex flex-col items-center">
              <Utensils className="h-5 w-5 text-yellow-400 mb-1" />
              <span className="text-xs text-white/80">Meals</span>
            </div>
            <div className="flex flex-col items-center">
              <Car className="h-5 w-5 text-yellow-400 mb-1" />
              <span className="text-xs text-white/80">Transfers</span>
            </div>
          </div>

          {/* Fixed Departure Section */}
          <div className="mt-4">
            <div className="text-white text-center py-2 font-semibold rounded-t-lg bg-gradient-to-r from-yellow-500 to-yellow-300">
              Fix Departure Batches
            </div>
            
            <div className="grid grid-cols-2 gap-px bg-white/20">
              {priceOptions.map((option, idx) => (
                <div key={idx} className="bg-black/90 p-3 text-center">
                  <div className="text-white font-bold">{option.price}</div>
                  <div className="text-xs text-yellow-400">{option.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Private Tour Options */}
          {privateOptions && (
            <div className="mt-px">
              <div className="text-white text-center py-2 font-semibold bg-gradient-to-r from-yellow-500 to-yellow-300">
                For Private Tour
              </div>
              
              {privateOptions.onDemand ? (
                <div className="bg-black/90 p-3 text-center">
                  <div className="text-white font-medium">On Demand Only</div>
                </div>
              ) : (
                <div className="grid grid-cols-5 gap-px bg-white/20">
                  {privateOptions.passengerOptions.map((option, idx) => (
                    <div key={idx} className="bg-black/90 p-2 text-center">
                      <div className="text-xs text-yellow-400">{option}</div>
                      {privateOptions.prices && (
                        <div className="text-xs text-white font-bold mt-1 bg-transparent">
                          {privateOptions.prices[idx]}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-2 gap-px mt-px bg-white/20">
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-2 text-center">
              <div className="text-white font-semibold">Inclusion</div>
            </div>
            <div className="bg-red-800/90 p-2 text-center">
              <div className="text-white font-semibold">Exclusion</div>
            </div>
            
            <div className="bg-black/90 p-2 space-y-1.5">
              {inclusions.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <Check className="h-4 w-4 text-yellow-400 mr-1.5 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-white/90">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-black/90 p-2 space-y-1.5">
              {exclusions.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <X className="h-4 w-4 text-red-500 mr-1.5 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Button className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-600 hover:to-yellow-400 text-white border-0 shadow-md shadow-yellow-600/20 transition-all duration-300 hover:shadow-yellow-600/30">
            SEND ENQUIRY
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedTourCard;
