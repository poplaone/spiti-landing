
import { TestimonialCard } from '@/components/TestimonialCard';

const TestimonialsSection = () => {
  return (
    <section id="about-us" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white inline-block mb-4">What Our Travelers Say</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Read about the experiences of travelers who have explored Spiti Valley with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            name="Rahul Sharma"
            location="Delhi"
            quote="The Spiti Valley tour was beyond my expectations. The landscapes were breathtaking and our guide was extremely knowledgeable."
            rating={5}
            index={0}
          />
          <TestimonialCard
            name="Priya Patel"
            location="Mumbai"
            quote="A life-changing experience! The team took care of everything, allowing us to fully immerse in the beauty of Spiti Valley."
            rating={5}
            index={1}
          />
          <TestimonialCard
            name="Amit Singh"
            location="Bangalore"
            quote="The attention to detail in our itinerary was impressive. We got to experience both popular spots and hidden gems."
            rating={4}
            index={2}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
