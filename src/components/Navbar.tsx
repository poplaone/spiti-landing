import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Mail, Phone, MapPin } from "lucide-react";
import { bestSellingPackages, adventurePackages, winterPackages } from '@/data/tourPackages';
export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Combine all packages for the dropdown
  const allPackages = [...bestSellingPackages, ...adventurePackages, ...winterPackages];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 bg-transparent">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/lovable-uploads/b9da6f75-6fe0-4f04-93e2-967354f3c6f4.png" alt="SpitiBeyond Logo" className="h-12 mr-2" />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {["Home", "Tour Packages", "Destinations", "Gallery", "About Us", "Contact"].map((item, index) => <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className={`text-sm font-medium text-offwhite hover:text-white transition-colors relative group animate-fade-in`} style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </a>)}
          </nav>
          <div className="flex items-center space-x-4">
            <Button className="bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-600 hover:to-yellow-400 text-white border-0 shadow-lg shadow-yellow-600/30 transition-all duration-300 hover:shadow-yellow-600/50 animate-fade-in" style={{
            animationDelay: '0.6s'
          }} onClick={() => setIsFormOpen(true)}>
              Book Now
            </Button>
            <Button variant="outline" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{
            animationDelay: '0.7s'
          }} className="md:hidden border border-yellow-500/30 text-offwhite animate-fade-in bg-transparent">
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown with animation */}
      <div className={`md:hidden bg-gradient-to-b from-black/95 to-black/95 backdrop-blur-lg border-b border-yellow-500/30 absolute w-full transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {["Home", "Tour Packages", "Destinations", "Gallery", "About Us", "Contact"].map((item, index) => <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className={`text-sm font-medium text-offwhite hover:text-white transition-colors py-2 border-b border-yellow-500/20 transform translate-y-4 opacity-0 ${mobileMenuOpen ? 'animate-slide-up' : ''}`} style={{
            animationDelay: `${index * 0.1}s`
          }} onClick={() => setMobileMenuOpen(false)}>
                {item}
              </a>)}
          </nav>
        </div>
      </div>
      
      {/* Tour Request Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="neo-blur backdrop-blur-xl bg-black/60 border-0 overflow-hidden rounded-2xl text-white max-w-md">
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

            <Button className="w-full neon-glow bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-600 hover:to-yellow-400 text-white border-0 shadow-lg shadow-yellow-600/30 transition-all duration-300 hover:shadow-yellow-600/50 py-5 text-lg">
              Submit Request
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </header>;
};
export default Navbar;