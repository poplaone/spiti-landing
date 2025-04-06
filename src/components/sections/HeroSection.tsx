
import { useState, useEffect } from 'react';
import { Calendar, Users, Clock, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { bestSellingPackages, adventurePackages, winterPackages } from '@/data/tourPackages';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // Combine all packages for the dropdown
  const allPackages = [
    ...bestSellingPackages,
    ...adventurePackages,
    ...winterPackages
  ];
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <section id="home" className="relative min-h-[90vh] pt-16">
      <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="flex flex-col items-center lg:items-start min-h-[calc(90vh-80px)] justify-center">
          <div className={`inline-block px-6 py-2 mb-4 rounded-full neo-blur border border-mountain/30 text-white font-medium transform transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Discover the Himalayan Wonder
          </div>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white text-center lg:text-left transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            SPITI VALLEY TOUR PACKAGES
          </h1>
          <p className={`text-lg md:text-xl text-offwhite mb-6 max-w-3xl text-center lg:text-left transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Customized Tours from Trusted Local Agents At Lowest Prices
          </p>
          <div className={`flex flex-wrap justify-center lg:justify-start gap-4 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button 
              className="neon-glow bg-gradient-to-r from-forest to-forest-light hover:from-forest-dark hover:to-forest text-white border-0 shadow-lg shadow-forest-dark/30 transition-all duration-300 hover:shadow-forest-dark/50 px-8 py-6 text-lg"
              onClick={() => setIsFormOpen(true)}
            >
              Book Now
            </Button>
            <Button 
              variant="outline" 
              className="neon-border border-2 border-white/30 text-white hover:bg-mountain/20 px-8 py-6 text-lg"
              onClick={() => setIsFormOpen(true)}
            >
              Inquire Now
            </Button>
          </div>
        </div>
      </div>
      
      {/* Tour Request Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="neo-blur backdrop-blur-xl bg-black/60 border-0 overflow-hidden rounded-2xl text-white max-w-md">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mountain via-mountain-light to-mountain"></div>
          <DialogTitle className="text-2xl font-bold text-center text-white">Get Free Tour Plan</DialogTitle>
          <DialogDescription className="text-white/80 text-center">
            Fill out this form and we'll get back to you with a customized tour plan.
          </DialogDescription>
          
          <form className="space-y-4 mt-2">
            <div className="space-y-2">
              <div className="relative">
                <Input id="fullName" placeholder="Your full name" className="pl-10 neo-blur bg-transparent border-white/30 focus:border-mountain focus:ring-mountain/20 transition-all text-white placeholder:text-white/50" />
                <div className="absolute left-3 top-2.5 text-mountain">
                  <Users className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative">
                <Input id="email" type="email" placeholder="Your email address" className="pl-10 neo-blur bg-transparent border-white/30 focus:border-mountain focus:ring-mountain/20 transition-all text-white placeholder:text-white/50" />
                <div className="absolute left-3 top-2.5 text-mountain">
                  <Mail className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative">
                <Input id="phone" type="tel" placeholder="Your phone number" className="pl-10 neo-blur bg-transparent border-white/30 focus:border-mountain focus:ring-mountain/20 transition-all text-white placeholder:text-white/50" />
                <div className="absolute left-3 top-2.5 text-mountain">
                  <Phone className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="package" className="text-white">
                Choose a Package
              </Label>
              <Select>
                <SelectTrigger className="neo-blur bg-transparent border-white/30 focus:border-mountain focus:ring-mountain/20 transition-all text-white">
                  <SelectValue placeholder="Select a tour package" />
                </SelectTrigger>
                <SelectContent className="neo-blur bg-black/80 backdrop-blur-xl border-white/20 text-white">
                  <SelectItem value="none">I'm not sure yet</SelectItem>
                  {allPackages.map((pkg, index) => (
                    <SelectItem key={index} value={pkg.title}>{pkg.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-white">
                Your Message
              </Label>
              <div className="relative">
                <Textarea id="message" placeholder="Tell us about your requirements" className="min-h-[80px] pl-10 neo-blur bg-transparent border-white/30 focus:border-mountain focus:ring-mountain/20 transition-all text-white placeholder:text-white/50" />
                <div className="absolute left-3 top-2.5 text-mountain">
                  <MapPin className="h-5 w-5" />
                </div>
              </div>
            </div>

            <Button className="w-full neon-glow bg-gradient-to-r from-forest to-forest-light hover:from-forest-dark hover:to-forest text-white border-0 shadow-lg shadow-forest-dark/30 transition-all duration-300 hover:shadow-forest-dark/50 py-5 text-lg">
              Submit Request
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
