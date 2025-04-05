
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeaturedPhoto } from '@/components/FeaturedPhoto';

const GallerySection = () => {
  const featuredPhotosRef = useRef<HTMLDivElement>(null);
  
  const handlePrevClick = () => {
    if (featuredPhotosRef.current) {
      featuredPhotosRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };
  
  const handleNextClick = () => {
    if (featuredPhotosRef.current) {
      featuredPhotosRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-white">Featured Photos</h2>
          <div className="flex gap-3">
            <Button
              onClick={handlePrevClick}
              variant="outline"
              size="icon"
              className="neon-border rounded-full border-2 border-skyblue/30 text-skyblue hover:bg-skyblue/10 transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              onClick={handleNextClick}
              variant="outline"
              size="icon"
              className="neon-border rounded-full border-2 border-skyblue/30 text-skyblue hover:bg-skyblue/10 transition-all"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div 
            ref={featuredPhotosRef}
            className="overflow-x-auto pb-6 hide-scrollbar"
          >
            <div className="flex gap-6 w-max">
              <FeaturedPhoto image="https://images.unsplash.com/photo-1586099079581-453560467971?q=80&w=500&auto=format&fit=crop" caption="Key Monastery, Spiti Valley" index={0} />
              <FeaturedPhoto image="https://images.unsplash.com/photo-1575553941284-31971401870d?q=80&w=500&auto=format&fit=crop" caption="Chandratal Lake" index={1} />
              <FeaturedPhoto image="https://images.unsplash.com/photo-1575553970165-232eb4d263cf?q=80&w=500&auto=format&fit=crop" caption="Dhankar Monastery" index={2} />
              <FeaturedPhoto image="https://images.unsplash.com/photo-1553465528-5a213ccc0c7b?q=80&w=500&auto=format&fit=crop" caption="Pin Valley" index={3} />
              <FeaturedPhoto image="https://images.unsplash.com/photo-1611641777052-ab12be36f39a?q=80&w=500&auto=format&fit=crop" caption="Kunzum Pass" index={4} />
              <FeaturedPhoto image="https://images.unsplash.com/photo-1628087236657-baebefd6c58f?q=80&w=500&auto=format&fit=crop" caption="Tabo Monastery" index={5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
