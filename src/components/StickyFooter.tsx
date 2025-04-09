
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
      
      {/* Fixed Footer - Only visible on mobile and tablet */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 py-3 px-4 bg-black/80 backdrop-blur-md border-t border-white/10">
        <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
          <Button 
            className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-600 hover:to-yellow-400 text-white gap-2 px-2"
          >
            <Send className="h-4 w-4 shrink-0" />
            <span className="whitespace-nowrap">Send Enquiry</span>
          </Button>
          
          <Button 
            className="flex-1 bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white gap-2 px-2"
          >
            <Phone className="h-4 w-4 shrink-0" />
            <span className="whitespace-nowrap">Call Now</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default StickyFooter;
