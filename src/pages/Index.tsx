
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Users, Clock, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { FeaturedPhoto } from '@/components/FeaturedPhoto';
import { TourPackageCard } from '@/components/TourPackageCard';
import { TestimonialCard } from '@/components/TestimonialCard';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const featuredPhotosRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Initialize scroll buttons for Featured Photos
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
    
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (prevBtn) prevBtn.addEventListener('click', handlePrevClick);
    if (nextBtn) nextBtn.addEventListener('click', handleNextClick);
    
    return () => {
      if (prevBtn) prevBtn.removeEventListener('click', handlePrevClick);
      if (nextBtn) nextBtn.removeEventListener('click', handleNextClick);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-900/20 via-amber-800/10 to-amber-700/20">
      <Navbar />

      {/* Hero Section with Form on Right */}
      <section id="home" className="relative min-h-screen pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 via-amber-800/60 to-amber-700/70"></div>
          <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Spiti Valley"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-80px)]">
            {/* Left Side - Typography with animations */}
            <div className="text-center lg:text-left mt-16 lg:mt-0">
              <div className={`inline-block px-6 py-2 mb-6 rounded-full bg-amber-800/30 backdrop-blur-md border border-amber-700/30 text-amber-200 font-medium transform transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Discover the Himalayan Wonder
              </div>
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                SPITI VALLEY TOUR PACKAGES
              </h1>
              <p className={`text-lg md:text-xl text-blue-100 mb-8 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Customized Tours from Trusted Local Agents At Lowest Prices
              </p>
              <div className={`flex flex-wrap justify-center lg:justify-start gap-4 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <Button className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white border-0 shadow-lg shadow-amber-800/30 transition-all duration-300 hover:shadow-amber-800/50 px-8 py-6 text-lg">
                  Explore Packages
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-amber-500/30 text-amber-100 hover:bg-amber-800/20 px-8 py-6 text-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Side - Lead Form with glass effect and animations */}
            <div className={`lg:ml-auto lg:max-w-md transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Card className="border-0 shadow-2xl bg-amber-900/20 backdrop-blur-lg overflow-hidden rounded-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-400"></div>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-center mb-6 text-white">Get Free Tour Plan</h2>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-amber-100">
                        Full Name
                      </Label>
                      <div className="relative">
                        <Input
                          id="fullName"
                          placeholder="Your full name"
                          className="pl-10 bg-amber-900/20 backdrop-blur-sm border-amber-500/30 focus:border-amber-400 focus:ring-amber-400/20 transition-all text-white placeholder:text-amber-200/50"
                        />
                        <div className="absolute left-3 top-2.5 text-amber-400">
                          <Users className="h-5 w-5" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-amber-100">
                        Email Id.
                      </Label>
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email address"
                          className="pl-10 bg-amber-900/20 backdrop-blur-sm border-amber-500/30 focus:border-amber-400 focus:ring-amber-400/20 transition-all text-white placeholder:text-amber-200/50"
                        />
                        <div className="absolute left-3 top-2.5 text-amber-400">
                          <Mail className="h-5 w-5" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-amber-100">
                        Contact No.
                      </Label>
                      <div className="relative">
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Your phone number"
                          className="pl-10 bg-amber-900/20 backdrop-blur-sm border-amber-500/30 focus:border-amber-400 focus:ring-amber-400/20 transition-all text-white placeholder:text-amber-200/50"
                        />
                        <div className="absolute left-3 top-2.5 text-amber-400">
                          <Phone className="h-5 w-5" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="duration" className="text-amber-100">
                          Duration
                        </Label>
                        <div className="relative">
                          <Input
                            id="duration"
                            placeholder="Days"
                            className="pl-10 bg-amber-900/20 backdrop-blur-sm border-amber-500/30 focus:border-amber-400 focus:ring-amber-400/20 transition-all text-white placeholder:text-amber-200/50"
                          />
                          <div className="absolute left-3 top-2.5 text-amber-400">
                            <Clock className="h-5 w-5" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="adults" className="text-amber-100">
                          Adults
                        </Label>
                        <div className="relative">
                          <Input
                            id="adults"
                            type="number"
                            min="1"
                            defaultValue="2"
                            className="pl-10 bg-amber-900/20 backdrop-blur-sm border-amber-500/30 focus:border-amber-400 focus:ring-amber-400/20 transition-all text-white placeholder:text-amber-200/50"
                          />
                          <div className="absolute left-3 top-2.5 text-amber-400">
                            <Users className="h-5 w-5" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="travelDate" className="text-amber-100">
                        Travel Date
                      </Label>
                      <div className="relative">
                        <Input
                          id="travelDate"
                          type="date"
                          className="pl-10 bg-amber-900/20 backdrop-blur-sm border-amber-500/30 focus:border-amber-400 focus:ring-amber-400/20 transition-all text-white placeholder:text-amber-200/50"
                        />
                        <div className="absolute left-3 top-2.5 text-amber-400">
                          <Calendar className="h-5 w-5" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-amber-100">
                        Your Message
                      </Label>
                      <div className="relative">
                        <Textarea
                          id="message"
                          placeholder="Tell us about your requirements"
                          className="min-h-[80px] pl-10 bg-amber-900/20 backdrop-blur-sm border-amber-500/30 focus:border-amber-400 focus:ring-amber-400/20 transition-all text-white placeholder:text-amber-200/50"
                        />
                        <div className="absolute left-3 top-2.5 text-amber-400">
                          <MapPin className="h-5 w-5" />
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white border-0 shadow-lg shadow-amber-800/30 transition-all duration-300 hover:shadow-amber-800/50 py-5 text-lg">
                      Submit Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram-style Featured Photos with Glass Effect */}
      <section id="gallery" className="py-16 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-900/20 to-amber-800/20"></div>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-amber-100">Featured Photos</h2>
            <div className="flex gap-3">
              <Button
                id="prev-btn"
                variant="outline"
                size="icon"
                className="rounded-full border-2 border-amber-500/30 text-amber-100 hover:bg-amber-800/20 transition-all"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button
                id="next-btn"
                variant="outline"
                size="icon"
                className="rounded-full border-2 border-amber-500/30 text-amber-100 hover:bg-amber-800/20 transition-all"
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
                <FeaturedPhoto image="/placeholder.svg?height=500&width=500" caption="Key Monastery, Spiti Valley" index={0} />
                <FeaturedPhoto image="/placeholder.svg?height=500&width=500" caption="Chandratal Lake" index={1} />
                <FeaturedPhoto image="/placeholder.svg?height=500&width=500" caption="Dhankar Monastery" index={2} />
                <FeaturedPhoto image="/placeholder.svg?height=500&width=500" caption="Pin Valley" index={3} />
                <FeaturedPhoto image="/placeholder.svg?height=500&width=500" caption="Kunzum Pass" index={4} />
                <FeaturedPhoto image="/placeholder.svg?height=500&width=500" caption="Tabo Monastery" index={5} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tour Packages with Glass Cards */}
      <section id="tour-packages" className="py-16 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-900/20 to-amber-800/20"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-100 inline-block mb-4">Popular Spiti Valley Tour Packages</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Discover our handcrafted itineraries designed to showcase the best of Spiti Valley's breathtaking
              landscapes and rich cultural heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TourPackageCard
              image="/placeholder.svg?height=400&width=600"
              title="5 Days Spiti Valley Explorer"
              price="₹24,999"
              duration="5 Days / 4 Nights"
              highlights={["Key Monastery", "Chandratal Lake", "Kaza", "Kibber Village"]}
              index={0}
            />
            <TourPackageCard
              image="/placeholder.svg?height=400&width=600"
              title="7 Days Complete Spiti Circuit"
              price="₹34,999"
              duration="7 Days / 6 Nights"
              highlights={["Kalpa", "Tabo Monastery", "Dhankar", "Pin Valley", "Kaza"]}
              index={1}
            />
            <TourPackageCard
              image="/placeholder.svg?height=400&width=600"
              title="10 Days Spiti & Kinnaur Valley"
              price="₹49,999"
              duration="10 Days / 9 Nights"
              highlights={["Shimla", "Sangla", "Chitkul", "Kalpa", "Kaza", "Chandratal"]}
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="about-us" className="py-16 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-900/20 to-amber-800/20"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-100 inline-block mb-4">What Our Travelers Say</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
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

      {/* Call to Action */}
      <section className="py-16 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 via-amber-800/80 to-amber-700/80"></div>
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Spiti Valley"
            fill
            className="object-cover mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-pulse">Ready to Explore the Himalayan Wonder?</h2>
            <p className="text-white/90 mb-8 text-lg">
              Book your Spiti Valley adventure today and create memories that will last a lifetime.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-amber-800 hover:bg-amber-50 border-0 shadow-lg shadow-black/20 transition-all duration-300 hover:shadow-black/30 px-8 py-6 text-lg hover:-translate-y-1">
                Book Now
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg hover:-translate-y-1"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Glass Effect */}
      <footer id="contact" className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">SpitiBeyond</h3>
              <p className="text-amber-100 mb-4">
                Your trusted partner for exploring the magical landscapes of Spiti Valley with authentic experiences and
                personalized service.
              </p>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-amber-800/40 flex items-center justify-center hover:bg-amber-800/60 transition-colors hover:scale-110"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-amber-800/40 flex items-center justify-center hover:bg-amber-800/60 transition-colors hover:scale-110"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-amber-800/40 flex items-center justify-center hover:bg-amber-800/60 transition-colors hover:scale-110"
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-amber-100 hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#tour-packages" className="text-amber-100 hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Tour Packages
                  </a>
                </li>
                <li>
                  <a href="#destinations" className="text-amber-100 hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-amber-100 hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#about-us" className="text-amber-100 hover:text-white transition-colors hover:translate-x-1 inline-block">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-amber-100 hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Popular Destinations</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-amber-100 hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Key Monastery
                  </a>
                </li>
                <li>
                  <a href="#" className="text-amber-100 hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Chandratal Lake
                  </a>
                </li>
                <li>
                  <a href="#" className="text-amber-100 hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Dhankar Monastery
                  </a>
                </li>
                <li>
                  <a href="#" className="text-amber-100 hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Pin Valley
                  </a>
                </li>
                <li>
                  <a href="#" className="text-amber-100 hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Kibber Village
                  </a>
                </li>
                <li>
                  <a href="#" className="text-amber-100 hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Tabo Monastery
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start group hover:translate-x-1 transition-transform">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 text-yellow-400 group-hover:scale-110 transition-transform" />
                  <span className="text-amber-100">123 Tourism Street, Shimla, Himachal Pradesh, India</span>
                </li>
                <li className="flex items-center group hover:translate-x-1 transition-transform">
                  <Phone className="h-5 w-5 mr-2 text-yellow-400 group-hover:scale-110 transition-transform" />
                  <span className="text-amber-100">+91 98765 43210</span>
                </li>
                <li className="flex items-center group hover:translate-x-1 transition-transform">
                  <Mail className="h-5 w-5 mr-2 text-yellow-400 group-hover:scale-110 transition-transform" />
                  <span className="text-amber-100">info@spitibeyond.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-amber-700/30 mt-10 pt-6 text-center text-amber-100/60">
            <p>© {new Date().getFullYear()} SpitiBeyond. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
