
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="neo-blur max-w-3xl mx-auto text-center p-10 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-pulse">Ready to Explore the Himalayan Wonder?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Book your Spiti Valley adventure today and create memories that will last a lifetime.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="neon-glow bg-terracotta text-white hover:bg-terracotta-dark border-0 shadow-lg shadow-terracotta-dark/20 transition-all duration-300 hover:shadow-terracotta-dark/30 px-8 py-6 text-lg hover:-translate-y-1">
              Book Now
            </Button>
            <Button
              variant="outline"
              className="neon-border border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg hover:-translate-y-1"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
