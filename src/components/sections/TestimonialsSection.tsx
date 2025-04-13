import { TestimonialCard } from '@/components/TestimonialCard';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
const TestimonialsSection = () => {
  return <section id="about-us" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white inline-block mb-4">What Our Travelers Say</h2>
          
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard name="Rahul Sharma" location="Delhi" quote="The Spiti Valley tour was beyond my expectations. The landscapes were breathtaking and our guide was extremely knowledgeable." rating={5} index={0} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard name="Priya Patel" location="Mumbai" quote="A life-changing experience! The team took care of everything, allowing us to fully immerse in the beauty of Spiti Valley." rating={5} index={1} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard name="Amit Singh" location="Bangalore" quote="The attention to detail in our itinerary was impressive. We got to experience both popular spots and hidden gems." rating={4} index={2} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard name="Sneha Gupta" location="Kolkata" quote="Excellent service from start to finish! The views were incredible and the accommodations were perfect for the location." rating={5} index={3} />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>;
};
export default TestimonialsSection;