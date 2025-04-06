
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { EnhancedTourCard } from "@/components/EnhancedTourCard";
import { useMediaQuery } from "@/hooks/use-mobile";

interface TourPackage {
  image: string;
  title: string;
  duration: {
    nights: number;
    days: number;
  };
  priceOptions: Array<{
    label: string;
    price: string;
  }>;
  privateOptions?: {
    passengerOptions: string[];
    prices?: string[];
    onDemand?: boolean;
  };
  inclusions: string[];
  exclusions: string[];
}

interface TourPackagesCarouselProps {
  title: string;
  packages: TourPackage[];
}

const TourPackagesCarousel = ({ title, packages }: TourPackagesCarouselProps) => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [api, setApi] = useState<{ scrollNext: () => void } | null>(null);
  
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1279px)");
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  
  const getItemsPerView = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    if (isDesktop) return 3;
    return 1; // Default fallback
  };

  // Auto-play functionality
  useEffect(() => {
    if (!api || !autoPlay) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [api, autoPlay]);

  return (
    <section className="py-8 relative" id={title.toLowerCase().replace(/\s+/g, '-')}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white inline-block mb-3 relative">
            {title}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-forest to-forest-light"></div>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base">
            Discover our handcrafted itineraries designed for unforgettable Himalayan adventures.
          </p>
        </div>

        <Carousel 
          setApi={setApi}
          className="mx-auto max-w-7xl"
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: getItemsPerView()
          }}
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <CarouselContent>
            {packages.map((pkg, index) => (
              <CarouselItem 
                key={index} 
                className={`pl-4 ${
                  isMobile ? 'basis-full' : 
                  isTablet ? 'basis-1/2' : 
                  'basis-1/3'
                }`}
              >
                <EnhancedTourCard
                  image={pkg.image}
                  title={pkg.title}
                  duration={pkg.duration}
                  priceOptions={pkg.priceOptions}
                  privateOptions={pkg.privateOptions}
                  inclusions={pkg.inclusions}
                  exclusions={pkg.exclusions}
                  index={index}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="left-0 lg:-left-12 bg-black/50 hover:bg-black/70 border-white/20 text-white" />
          <CarouselNext className="right-0 lg:-right-12 bg-black/50 hover:bg-black/70 border-white/20 text-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default TourPackagesCarousel;
