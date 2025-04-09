
import { Phone, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StickyFooter = () => {
  return (
    <>
      {/* Floating WhatsApp Button */}
      <a 
        href="#" 
        className="fixed z-50 bottom-20 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-pulse hover:animate-none hover:bg-green-600 transition-all"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      
      {/* Fixed Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-40 py-3 px-4 bg-black/80 backdrop-blur-md border-t border-white/10">
        <div className="container mx-auto flex items-center justify-between gap-3 max-w-lg">
          <img 
            src="/lovable-uploads/b9da6f75-6fe0-4f04-93e2-967354f3c6f4.png" 
            alt="Spiti Valley Travels" 
            className="h-10 absolute left-2 bottom-full mb-1"
          />
          
          <Button 
            className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-600 hover:to-yellow-400 text-white gap-2"
          >
            <Send className="h-4 w-4" />
            Send Enquiry
          </Button>
          
          <Button 
            className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-600 hover:to-yellow-400 text-white gap-2"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default StickyFooter;
