
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  quote: string;
  rating: number;
  index?: number;
}

export const TestimonialCard = ({ 
  name, 
  location, 
  quote, 
  rating,
  index = 0 
}: TestimonialCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="relative z-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <div 
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Enhanced background pulse animation */}
        <div className={`absolute inset-0 bg-gradient-to-tr from-skyblue/30 via-skyblue/20 to-transparent rounded-2xl blur-xl transition-all duration-700 group-hover:scale-110 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        
        {/* Card content with intensified glass effect */}
        <div className="neo-blur backdrop-blur-2xl bg-black/20 rounded-2xl p-6 h-full transition-all duration-500 group-hover:translate-y-[-8px] border border-white/20 text-white">
          {/* Floating rating stars with improved animation */}
          <div className="flex items-center mb-4 relative">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div 
                key={i}
                animate={{ 
                  y: isHovered ? Math.random() * -8 : 0
                }}
                transition={{
                  duration: 1.5,
                  repeat: isHovered ? Infinity : 0,
                  repeatType: "reverse",
                  delay: i * 0.1
                }}
              >
                <Star 
                  className={`w-5 h-5 ${i < rating ? "text-terracotta fill-terracotta" : "text-gray-300"}`}
                />
              </motion.div>
            ))}
          </div>

          {/* Enhanced quote with animated background gradient */}
          <div className="relative">
            <div className={`absolute -inset-4 bg-gradient-to-r from-skyblue/10 via-terracotta/10 to-skyblue/10 rounded-xl blur-md transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
            <p className="text-white relative mb-6 italic backdrop-blur-sm rounded-lg p-2">"{quote}"</p>
          </div>

          {/* Profile section with enhanced hover card */}
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="flex items-center cursor-pointer">
                <motion.div 
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-skyblue to-skyblue-dark flex items-center justify-center text-white font-bold neon-glow"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {name.charAt(0)}
                </motion.div>
                <div className="ml-3">
                  <h4 className="font-semibold text-white">{name}</h4>
                  <p className="text-sm text-white/70">{location}</p>
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="neo-blur backdrop-blur-2xl bg-black/40 border-white/20 p-4 text-white">
              <div className="flex flex-col gap-2 text-left">
                <p className="text-sm text-white/80">Traveled to Spiti Valley</p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-terracotta text-terracotta" />
                  ))}
                </div>
                <p className="text-xs text-white/60">Verified review</p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
