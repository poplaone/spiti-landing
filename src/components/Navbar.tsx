
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-skyblue/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="font-bold text-2xl bg-gradient-to-r from-skyblue to-skyblue-dark bg-clip-text text-transparent animate-fade-in">
            SpitiBeyond
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "Tour Packages", "Destinations", "Gallery", "About Us", "Contact"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`text-sm font-medium text-offwhite hover:text-white transition-colors relative group animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-terracotta to-terracotta-light transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Button className="bg-gradient-to-r from-terracotta to-terracotta-light hover:from-terracotta-dark hover:to-terracotta text-white border-0 shadow-lg shadow-terracotta-dark/30 transition-all duration-300 hover:shadow-terracotta-dark/50 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Book Now
            </Button>
            <Button
              variant="outline"
              className="md:hidden border border-skyblue/30 text-offwhite hover:bg-skyblue/20 animate-fade-in"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ animationDelay: '0.7s' }}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown with animation */}
      <div 
        className={`md:hidden bg-gradient-to-b from-skyblue/95 to-skyblue-dark/95 backdrop-blur-lg border-b border-skyblue-light/30 absolute w-full transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {["Home", "Tour Packages", "Destinations", "Gallery", "About Us", "Contact"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`text-sm font-medium text-offwhite hover:text-white transition-colors py-2 border-b border-skyblue-light/50 transform translate-y-4 opacity-0 ${mobileMenuOpen ? 'animate-slide-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
