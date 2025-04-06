
import { Navbar } from '@/components/Navbar';
import BackgroundSlideshow from '@/components/BackgroundSlideshow';
import HeroSection from '@/components/sections/HeroSection';
import GallerySection from '@/components/sections/GallerySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import FooterSection from '@/components/sections/FooterSection';
import TourPackagesCarousel from '@/components/TourPackagesCarousel';
import { bestSellingPackages, adventurePackages, winterPackages } from '@/data/tourPackages';

const Index = () => {
  const bgImages = [
    "/lovable-uploads/5aa2c141-1112-46da-8ccc-a8c4b7abfe68.png",
    "/lovable-uploads/a9f730a8-3110-462d-a8a2-5c278debb69e.png",
    "/lovable-uploads/1d1ec547-6051-4c4c-b9c0-5499b1de6eac.png"
  ];
  
  return (
    <main className="min-h-screen">
      <BackgroundSlideshow images={bgImages} />
      <Navbar />
      <HeroSection />
      
      {/* Tour Package Sections */}
      <TourPackagesCarousel title="Best Selling Spiti Tour Packages" packages={bestSellingPackages} />
      <TourPackagesCarousel title="Spiti Adventure Tour Packages" packages={adventurePackages} />
      <TourPackagesCarousel title="Spiti Winter Wonderland" packages={winterPackages} />
      
      <GallerySection />
      <TestimonialsSection />
      <CallToActionSection />
      <FooterSection />
    </main>
  );
};

export default Index;
