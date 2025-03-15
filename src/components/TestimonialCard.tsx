
import { useState, useEffect } from 'react';

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
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const timeout = setTimeout(() => {
      const element = document.getElementById(`testimonial-${index}`);
      if (element) observer.observe(element);
    }, 100);
    
    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [index]);

  return (
    <div
      id={`testimonial-${index}`}
      className={`bg-amber-900/20 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-amber-700/30 p-6 transition-all duration-700 hover:shadow-xl hover:-translate-y-2 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-amber-400" : "text-gray-600"} ${
              isInView ? 'animate-zoom-in' : ''
            }`}
            style={{ animationDelay: `${0.3 + (i * 0.1)}s` }}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className={`text-amber-100 mb-6 italic ${isInView ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.6s' }}>"{quote}"</p>

      <div className={`flex items-center ${isInView ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.7s' }}>
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-600 to-yellow-600 flex items-center justify-center text-white font-bold">
          {name.charAt(0)}
        </div>
        <div className="ml-3">
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-sm text-amber-200">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
