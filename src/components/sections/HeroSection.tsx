
import { useState, useEffect } from 'react';
import { Calendar, Users, Clock, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-80px)]">
          <div className="text-center lg:text-left mt-16 lg:mt-0">
            <div className={`inline-block px-6 py-2 mb-6 rounded-full neo-blur border border-skyblue-light/30 text-white font-medium transform transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Discover the Himalayan Wonder
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              SPITI VALLEY TOUR PACKAGES
            </h1>
            <p className={`text-lg md:text-xl text-offwhite mb-8 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Customized Tours from Trusted Local Agents At Lowest Prices
            </p>
            <div className={`flex flex-wrap justify-center lg:justify-start gap-4 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Button className="neon-glow bg-gradient-to-r from-terracotta to-terracotta-light hover:from-terracotta-dark hover:to-terracotta text-white border-0 shadow-lg shadow-terracotta-dark/30 transition-all duration-300 hover:shadow-terracotta-dark/50 px-8 py-6 text-lg">
                Explore Packages
              </Button>
              <Button
                variant="outline"
                className="neon-border border-2 border-white/30 text-white hover:bg-skyblue/20 px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className={`lg:ml-auto lg:max-w-md transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Card className="neo-blur border-0 overflow-hidden rounded-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-skyblue via-skyblue-light to-skyblue"></div>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-center mb-6 text-white">Get Free Tour Plan</h2>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-white">
                      Full Name
                    </Label>
                    <div className="relative">
                      <Input
                        id="fullName"
                        placeholder="Your full name"
                        className="pl-10 neo-blur bg-transparent border-white/30 focus:border-skyblue focus:ring-skyblue/20 transition-all text-white placeholder:text-white/50"
                      />
                      <div className="absolute left-3 top-2.5 text-skyblue">
                        <Users className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email Id.
                    </Label>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email address"
                        className="pl-10 neo-blur bg-transparent border-white/30 focus:border-skyblue focus:ring-skyblue/20 transition-all text-white placeholder:text-white/50"
                      />
                      <div className="absolute left-3 top-2.5 text-skyblue">
                        <Mail className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Contact No.
                    </Label>
                    <div className="relative">
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Your phone number"
                        className="pl-10 neo-blur bg-transparent border-white/30 focus:border-skyblue focus:ring-skyblue/20 transition-all text-white placeholder:text-white/50"
                      />
                      <div className="absolute left-3 top-2.5 text-skyblue">
                        <Phone className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="duration" className="text-white">
                        Duration
                      </Label>
                      <div className="relative">
                        <Input
                          id="duration"
                          placeholder="Days"
                          className="pl-10 neo-blur bg-transparent border-white/30 focus:border-skyblue focus:ring-skyblue/20 transition-all text-white placeholder:text-white/50"
                        />
                        <div className="absolute left-3 top-2.5 text-skyblue">
                          <Clock className="h-5 w-5" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="adults" className="text-white">
                        Adults
                      </Label>
                      <div className="relative">
                        <Input
                          id="adults"
                          type="number"
                          min="1"
                          defaultValue="2"
                          className="pl-10 neo-blur bg-transparent border-white/30 focus:border-skyblue focus:ring-skyblue/20 transition-all text-white placeholder:text-white/50"
                        />
                        <div className="absolute left-3 top-2.5 text-skyblue">
                          <Users className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="travelDate" className="text-white">
                      Travel Date
                    </Label>
                    <div className="relative">
                      <Input
                        id="travelDate"
                        type="date"
                        className="pl-10 neo-blur bg-transparent border-white/30 focus:border-skyblue focus:ring-skyblue/20 transition-all text-white placeholder:text-white/50"
                      />
                      <div className="absolute left-3 top-2.5 text-skyblue">
                        <Calendar className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Your Message
                    </Label>
                    <div className="relative">
                      <Textarea
                        id="message"
                        placeholder="Tell us about your requirements"
                        className="min-h-[80px] pl-10 neo-blur bg-transparent border-white/30 focus:border-skyblue focus:ring-skyblue/20 transition-all text-white placeholder:text-white/50"
                      />
                      <div className="absolute left-3 top-2.5 text-skyblue">
                        <MapPin className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  <Button className="w-full neon-glow bg-gradient-to-r from-terracotta to-terracotta-light hover:from-terracotta-dark hover:to-terracotta text-white border-0 shadow-lg shadow-terracotta-dark/30 transition-all duration-300 hover:shadow-terracotta-dark/50 py-5 text-lg">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
