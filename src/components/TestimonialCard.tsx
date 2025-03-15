
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
  return (
    <div 
      className="bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-sand-dark/20 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
    >
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-terracotta" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-foreground mb-6 italic">"{quote}"</p>

      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-skyblue to-skyblue-dark flex items-center justify-center text-white font-bold">
          {name.charAt(0)}
        </div>
        <div className="ml-3">
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-foreground/70">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
