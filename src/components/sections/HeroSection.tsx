import { useState, useEffect } from 'react';
import { Calendar, Users, Clock, MapPin, Mail, Phone, ChevronRight, CheckCircle2, Compass, MountainSnow, Plane, Sparkles, Heart, PlaneTakeoff, Mountain, Footprints, Palmtree, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { bestSellingPackages, adventurePackages, winterPackages } from '@/data/tourPackages';
import { motion } from "framer-motion";
const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [visitedBefore, setVisitedBefore] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);

  // Combine all packages for the dropdown
  const allPackages = [...bestSellingPackages, ...adventurePackages, ...winterPackages];
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const handleNextStep = () => {
    if (currentStep === 2 && budget) {
      // When all questions are answered, open the form
      setIsFormOpen(true);
      // Reset quiz for next time
      setCurrentStep(1);
      setVisitedBefore(null);
      setBudget(null);
    } else if (currentStep === 1 && visitedBefore) {
      setCurrentStep(2);
    }
  };
  const renderQuizContent = () => {
    switch (currentStep) {
      case 1:
        return <motion.div className="space-y-4" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }}>
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Compass className="h-5 w-5 text-yellow-400 animate-pulse" />
              <span>1. Have you ever been to Spiti before?</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <Button variant={visitedBefore === 'yes' ? 'default' : 'outline'} className={`py-6 relative overflow-hidden transition-all duration-300 ${visitedBefore === 'yes' ? 'bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-600 hover:to-yellow-400 neon-glow' : 'bg-white/10 hover:bg-white/20 text-white hover:scale-105'}`} onClick={() => setVisitedBefore('yes')}>
                {visitedBefore === 'yes' && <motion.div className="absolute inset-0 bg-white/20" initial={{
                opacity: 0
              }} animate={{
                opacity: [0, 0.5, 0]
              }} transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop"
              }} />}
                <div className="flex items-center justify-center gap-2 w-full">
                  <Footprints className="h-5 w-5 flex-shrink-0" />
                  <span className="whitespace-nowrap">Yes, I've been!</span>
                  {visitedBefore === 'yes' && <CheckCircle2 className="h-5 w-5 ml-1 text-white flex-shrink-0" />}
                </div>
              </Button>
              <Button variant={visitedBefore === 'no' ? 'default' : 'outline'} className={`py-6 relative overflow-hidden transition-all duration-300 ${visitedBefore === 'no' ? 'bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-600 hover:to-yellow-400 neon-glow' : 'bg-white/10 hover:bg-white/20 text-white hover:scale-105'}`} onClick={() => setVisitedBefore('no')}>
                {visitedBefore === 'no' && <motion.div className="absolute inset-0 bg-white/20" initial={{
                opacity: 0
              }} animate={{
                opacity: [0, 0.5, 0]
              }} transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop"
              }} />}
                <div className="flex items-center justify-center gap-2 w-full">
                  <PlaneTakeoff className="h-5 w-5 flex-shrink-0" />
                  <span className="whitespace-nowrap">No, first time.</span>
                  {visitedBefore === 'no' && <CheckCircle2 className="h-5 w-5 ml-1 text-white flex-shrink-0" />}
                </div>
              </Button>
            </div>
          </motion.div>;
      case 2:
        return <motion.div className="space-y-4" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }}>
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-400 animate-pulse" />
              <span>2. What's your budget?</span>
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <Button variant={budget === 'budget' ? 'default' : 'outline'} className={`py-6 relative overflow-hidden transition-all duration-300 ${budget === 'budget' ? 'bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-600 hover:to-yellow-400 neon-glow' : 'bg-white/10 hover:bg-white/20 text-white hover:scale-105'}`} onClick={() => setBudget('budget')}>
                {budget === 'budget' && <motion.div className="absolute inset-0 bg-white/20" initial={{
                opacity: 0
              }} animate={{
                opacity: [0, 0.5, 0]
              }} transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop"
              }} />}
                <div className="flex flex-col items-center justify-center gap-1">
                  <Palmtree className="h-5 w-5 mb-1 flex-shrink-0" />
                  <span>Budget</span>
                  {budget === 'budget' && <CheckCircle2 className="h-5 w-5 text-white mt-1 flex-shrink-0" />}
                </div>
              </Button>
              <Button variant={budget === 'economic' ? 'default' : 'outline'} className={`py-6 relative overflow-hidden transition-all duration-300 ${budget === 'economic' ? 'bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-600 hover:to-yellow-400 neon-glow' : 'bg-white/10 hover:bg-white/20 text-white hover:scale-105'}`} onClick={() => setBudget('economic')}>
                {budget === 'economic' && <motion.div className="absolute inset-0 bg-white/20" initial={{
                opacity: 0
              }} animate={{
                opacity: [0, 0.5, 0]
              }} transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop"
              }} />}
                <div className="flex flex-col items-center justify-center gap-1">
                  <Mountain className="h-5 w-5 mb-1 flex-shrink-0" />
                  <span>Economic</span>
                  {budget === 'economic' && <CheckCircle2 className="h-5 w-5 text-white mt-1 flex-shrink-0" />}
                </div>
              </Button>
              <Button variant={budget === 'luxury' ? 'default' : 'outline'} className={`py-6 relative overflow-hidden transition-all duration-300 ${budget === 'luxury' ? 'bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-600 hover:to-yellow-400 neon-glow' : 'bg-white/10 hover:bg-white/20 text-white hover:scale-105'}`} onClick={() => setBudget('luxury')}>
                {budget === 'luxury' && <motion.div className="absolute inset-0 bg-white/20" initial={{
                opacity: 0
              }} animate={{
                opacity: [0, 0.5, 0]
              }} transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop"
              }} />}
                <div className="flex flex-col items-center justify-center gap-1">
                  <Sparkles className="h-5 w-5 mb-1 flex-shrink-0" />
                  <span>Luxury</span>
                  {budget === 'luxury' && <CheckCircle2 className="h-5 w-5 text-white mt-1 flex-shrink-0" />}
                </div>
              </Button>
            </div>
          </motion.div>;
      default:
        return null;
    }
  };
  return <section id="home" className="relative min-h-[90vh] pt-16">
      <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="flex flex-col items-center lg:items-start min-h-[calc(90vh-80px)] justify-center">
          <div className={`inline-block px-6 py-2 mb-4 rounded-full neo-blur border border-yellow-500/30 text-white font-medium transform transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <motion.div className="flex items-center gap-2" animate={{
            scale: [1, 1.03, 1]
          }} transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}>
              <MountainSnow className="h-4 w-4 text-yellow-400" />
              Discover the Himalayan Wonder
            </motion.div>
          </div>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white text-center lg:text-left transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            SPITI VALLEY TOUR PACKAGES
          </h1>
          
          
          {/* Travel Quiz Card */}
          <Card className={`w-full max-w-2xl mx-auto lg:mx-0 neo-blur backdrop-blur-xl bg-black/80 border border-yellow-500/10 overflow-hidden rounded-xl text-white transition-all duration-700 delay-300 shadow-xl hover:shadow-yellow-700/20 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <CardContent className="p-6 relative">
              {/* Decorative elements */}
              <motion.div className="absolute top-0 right-0 w-20 h-20 opacity-30 pointer-events-none" initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 0.3,
              scale: 1
            }} transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}>
                <Mountain className="w-full h-full text-yellow-500" />
              </motion.div>
              
              {renderQuizContent()}
              
              <motion.div className="mt-6 flex justify-center" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button onClick={handleNextStep} disabled={currentStep === 1 && !visitedBefore || currentStep === 2 && !budget} className="text-white py-2 px-8 rounded-full flex items-center group relative overflow-hidden transition-all duration-300 bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-600 hover:to-yellow-400">
                  <motion.span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" initial={{
                  x: '-100%'
                }} animate={{
                  x: '100%'
                }} transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }} />
                  <span className="relative z-10">Next Step</span>
                  <ChevronRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Tour Request Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="neo-blur backdrop-blur-xl bg-black/90 border-0 overflow-hidden rounded-2xl text-white max-w-md">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500"></div>
          <DialogTitle className="text-2xl font-bold text-center text-white">Get Free Tour Plan</DialogTitle>
          <DialogDescription className="text-white/80 text-center">
            Fill out this form and we'll get back to you with a customized tour plan.
          </DialogDescription>
          
          <form className="space-y-4 mt-2">
            <div className="space-y-2">
              <div className="relative">
                <Input id="fullName" placeholder="Your full name" className="pl-10 neo-blur bg-transparent border-yellow-500/30 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all text-white placeholder:text-white/50" />
                <div className="absolute left-3 top-2.5 text-yellow-400">
                  <Users className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative">
                <Input id="email" type="email" placeholder="Your email address" className="pl-10 neo-blur bg-transparent border-yellow-500/30 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all text-white placeholder:text-white/50" />
                <div className="absolute left-3 top-2.5 text-yellow-400">
                  <Mail className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative">
                <Input id="phone" type="tel" placeholder="Your phone number" className="pl-10 neo-blur bg-transparent border-yellow-500/30 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all text-white placeholder:text-white/50" />
                <div className="absolute left-3 top-2.5 text-yellow-400">
                  <Phone className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="package" className="text-white">
                Choose a Package
              </Label>
              <Select>
                <SelectTrigger className="neo-blur bg-transparent border-yellow-500/30 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all text-white">
                  <SelectValue placeholder="Select a tour package" />
                </SelectTrigger>
                <SelectContent className="neo-blur bg-black/80 backdrop-blur-xl border-white/20 text-white">
                  <SelectItem value="none">I'm not sure yet</SelectItem>
                  {allPackages.map((pkg, index) => <SelectItem key={index} value={pkg.title}>{pkg.title}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-white">
                Your Message
              </Label>
              <div className="relative">
                <Textarea id="message" placeholder="Tell us about your requirements" className="min-h-[80px] pl-10 neo-blur bg-transparent border-yellow-500/30 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all text-white placeholder:text-white/50" />
                <div className="absolute left-3 top-2.5 text-yellow-400">
                  <MapPin className="h-5 w-5" />
                </div>
              </div>
            </div>

            <motion.div whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }}>
              <Button className="w-full neon-glow bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-600 hover:to-yellow-400 text-white border-0 shadow-lg shadow-yellow-700/30 transition-all duration-300 hover:shadow-yellow-700/50 py-5 text-lg relative overflow-hidden">
                <motion.span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0" initial={{
                x: '-100%'
              }} animate={{
                x: '100%'
              }} transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }} />
                <Heart className="h-5 w-5 mr-2" />
                <span className="relative z-10">Submit Request</span>
              </Button>
            </motion.div>
          </form>
        </DialogContent>
      </Dialog>
    </section>;
};
export default HeroSection;