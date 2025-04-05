
import { TourPackageCard } from '@/components/TourPackageCard';

const TourPackagesSection = () => {
  return (
    <section id="tour-packages" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white inline-block mb-4">Popular Spiti Valley Tour Packages</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Discover our handcrafted itineraries designed to showcase the best of Spiti Valley's breathtaking
            landscapes and rich cultural heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TourPackageCard
            image="https://images.unsplash.com/photo-1468476396571-4d6f2a427ee7?q=80&w=600&auto=format&fit=crop"
            title="5 Days Spiti Valley Explorer"
            price="₹24,999"
            duration="5 Days / 4 Nights"
            highlights={["Key Monastery", "Chandratal Lake", "Kaza", "Kibber Village"]}
            index={0}
          />
          <TourPackageCard
            image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop"
            title="7 Days Complete Spiti Circuit"
            price="₹34,999"
            duration="7 Days / 6 Nights"
            highlights={["Kalpa", "Tabo Monastery", "Dhankar", "Pin Valley", "Kaza"]}
            index={1}
          />
          <TourPackageCard
            image="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=600&auto=format&fit=crop"
            title="10 Days Spiti & Kinnaur Valley"
            price="₹49,999"
            duration="10 Days / 9 Nights"
            highlights={["Shimla", "Sangla", "Chitkul", "Kalpa", "Kaza", "Chandratal"]}
            index={2}
          />
        </div>
      </div>
    </section>
  );
};

export default TourPackagesSection;
