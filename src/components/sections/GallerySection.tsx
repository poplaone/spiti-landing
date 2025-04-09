
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeaturedPhoto } from '@/components/FeaturedPhoto';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

const GallerySection = () => {
  return (
    <section id="gallery" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-yellow-500">Featured Photos</h2>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <FeaturedPhoto 
                image="https://images.unsplash.com/photo-1586099079581-453560467971?q=80&w=500&auto=format&fit=crop" 
                caption="Key Monastery, Spiti Valley" 
                index={0} 
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <FeaturedPhoto 
                image="https://images.unsplash.com/photo-1575553941284-31971401870d?q=80&w=500&auto=format&fit=crop" 
                caption="Chandratal Lake" 
                index={1} 
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <FeaturedPhoto 
                image="https://images.unsplash.com/photo-1575553970165-232eb4d263cf?q=80&w=500&auto=format&fit=crop" 
                caption="Dhankar Monastery" 
                index={2} 
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <FeaturedPhoto 
                image="https://images.unsplash.com/photo-1553465528-5a213ccc0c7b?q=80&w=500&auto=format&fit=crop" 
                caption="Pin Valley" 
                index={3} 
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <FeaturedPhoto 
                image="https://images.unsplash.com/photo-1611641777052-ab12be36f39a?q=80&w=500&auto=format&fit=crop" 
                caption="Kunzum Pass" 
                index={4} 
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
        
        {/* Trust cards section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-yellow-500 text-center mb-10">Why Book With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Customized Options Card */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center text-center transition-all hover:transform hover:-translate-y-2 hover:shadow-lg">
              <div className="mb-4 text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16 v-4 M12 8 h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Customised Options</h3>
              <p className="text-white/80">Get multiple Itineraries and Personalised Suggestions from our Travel experts</p>
            </div>
            
            {/* Time Saving Card */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center text-center transition-all hover:transform hover:-translate-y-2 hover:shadow-lg">
              <div className="mb-4 text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Time Saving</h3>
              <p className="text-white/80">No need to search on multiple sites for Himachal Tour Package, Quotes and Travel Plans</p>
            </div>
            
            {/* Save Money Card */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center text-center transition-all hover:transform hover:-translate-y-2 hover:shadow-lg">
              <div className="mb-4 text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Save Money</h3>
              <p className="text-white/80">Compare, Negotiate and Book the best Himachal Tour Packages from Multiple customised tour options</p>
            </div>
            
            {/* Trusted Service Card */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center text-center transition-all hover:transform hover:-translate-y-2 hover:shadow-lg">
              <div className="mb-4 text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Trusted Service</h3>
              <p className="text-white/80">Reliable Hotels, Authentic Tour guidance, Expert Cab Drivers and Personal Tour Coordinator</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
