
import { 
  Dialog, DialogContent, DialogTitle, DialogDescription 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Mail, Phone, MapPin, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { bestSellingPackages, adventurePackages, winterPackages } from '@/data/tourPackages';

interface InquiryFormProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const InquiryForm = ({ isOpen, onOpenChange }: InquiryFormProps) => {
  const allPackages = [...bestSellingPackages, ...adventurePackages, ...winterPackages];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="neo-blur backdrop-blur-xl bg-black/90 border-0 overflow-hidden rounded-2xl text-white max-w-md">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500"></div>
        <DialogTitle className="text-2xl font-bold text-center text-white">Get Free Tour Plan</DialogTitle>
        <DialogDescription className="text-white/80 text-center">
          Fill out this form and we'll get back to you with a customized tour plan.
        </DialogDescription>
        
        <form className="space-y-4 mt-2">
          <div className="space-y-2">
            <div className="relative">
              <Input 
                id="fullName" 
                placeholder="Your full name" 
                className="pl-10 neo-blur bg-transparent border-yellow-500/30 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all text-white placeholder:text-white/50" 
              />
              <div className="absolute left-3 top-2.5 text-yellow-400">
                <Users className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <Input 
                id="email" 
                type="email" 
                placeholder="Your email address" 
                className="pl-10 neo-blur bg-transparent border-yellow-500/30 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all text-white placeholder:text-white/50" 
              />
              <div className="absolute left-3 top-2.5 text-yellow-400">
                <Mail className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <Input 
                id="phone" 
                type="tel" 
                placeholder="Your phone number" 
                className="pl-10 neo-blur bg-transparent border-yellow-500/30 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all text-white placeholder:text-white/50" 
              />
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
              <Textarea 
                id="message" 
                placeholder="Tell us about your requirements" 
                className="min-h-[80px] pl-10 neo-blur bg-transparent border-yellow-500/30 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all text-white placeholder:text-white/50" 
              />
              <div className="absolute left-3 top-2.5 text-yellow-400">
                <MapPin className="h-5 w-5" />
              </div>
            </div>
          </div>

          <motion.div 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
          >
            <Button className="w-full neon-glow bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-600 hover:to-yellow-400 text-white border-0 shadow-lg shadow-yellow-700/30 transition-all duration-300 hover:shadow-yellow-700/50 py-5 text-lg relative overflow-hidden">
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0" 
                initial={{ x: '-100%' }} 
                animate={{ x: '100%' }} 
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              />
              <Heart className="h-5 w-5 mr-2" />
              <span className="relative z-10">Submit Request</span>
            </Button>
          </motion.div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InquiryForm;
