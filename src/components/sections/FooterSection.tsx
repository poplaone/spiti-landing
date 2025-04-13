
import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bestSellingPackages, adventurePackages, winterPackages } from '@/data/tourPackages';

const FooterSection = () => {
  const handlePackageClick = (packageName: string) => {
    // Find the package section and scroll to it
    const element = document.getElementById('best-selling-spiti-tour-packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Get unique package titles for the footer links
  const allPackages = [...bestSellingPackages, ...adventurePackages, ...winterPackages];
  // Take first 9 packages to show in footer
  const footerPackages = allPackages.slice(0, 9);

  return (
    <footer id="contact" className="neo-blur py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img src="/lovable-uploads/b9da6f75-6fe0-4f04-93e2-967354f3c6f4.png" alt="SpitiBeyond Logo" className="h-14" />
            </div>
            <p className="text-white/80 mb-4">
              Your trusted partner for exploring the magical landscapes of Spiti Valley with authentic experiences and
              personalized service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full neo-blur flex items-center justify-center hover:bg-skyblue-dark/60 transition-colors hover:scale-110">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full neo-blur flex items-center justify-center hover:bg-skyblue-dark/60 transition-colors hover:scale-110">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.08c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick links section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-skyblue-light">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-offwhite hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="#tour-packages" className="text-offwhite hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Tour Packages
                </a>
              </li>
              <li>
                <a href="#destinations" className="text-offwhite hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-offwhite hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#about-us" className="text-offwhite hover:text-white transition-colors hover:translate-x-1 inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-offwhite hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Popular destinations section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-skyblue-light">Popular Packages</h3>
            <ul className="space-y-2">
              {footerPackages.map((pkg, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handlePackageClick(pkg.title)}
                    className="text-offwhite hover:text-white transition-colors hover:translate-x-1 inline-block text-left"
                  >
                    {pkg.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-skyblue-light">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start group hover:translate-x-1 transition-transform">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-skyblue-light group-hover:scale-110 transition-transform" />
                <span className="text-offwhite">123 Tourism Street, Shimla, Himachal Pradesh, India</span>
              </li>
              <li className="flex items-center group hover:translate-x-1 transition-transform">
                <Phone className="h-5 w-5 mr-2 text-skyblue-light group-hover:scale-110 transition-transform" />
                <span className="text-offwhite">+91 98765 43210</span>
              </li>
              <li className="flex items-center group hover:translate-x-1 transition-transform">
                <Mail className="h-5 w-5 mr-2 text-skyblue-light group-hover:scale-110 transition-transform" />
                <span className="text-offwhite">info@spitibeyond.com</span>
              </li>
            </ul>
            <Button 
              className="mt-6 w-full bg-gradient-to-r from-forest-dark to-forest-light hover:from-forest hover:to-forest text-white shadow-none hover:shadow-none"
            >
              Send Inquiry
            </Button>
          </div>
        </div>
        <div className="border-t border-white/30 mt-10 pt-6 text-center text-white/60">
          <p className="text-skyblue-light mt-4">© {new Date().getFullYear()} SpitiBeyond. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
