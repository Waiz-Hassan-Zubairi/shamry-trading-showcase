
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center bg-navy overflow-hidden">
      {/* Background Image with Overlay and Animation */}
      <div 
        className="absolute inset-0 z-0 animate-fade-in"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 43, 91, 0.8), rgba(15, 43, 91, 0.9)), url(https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content with Staggered Animation */}
      <div className="container-custom relative z-10 mt-10">
        <div className="max-w-3xl space-y-6">
          <h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4 font-heading leading-tight opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]"
          >
            Premium Industrial Solutions for Your Business
          </h1>
          <p 
            className="text-xl text-gray-200 mb-8 opacity-0 animate-[fade-in_0.8s_ease-out_0.4s_forwards]"
          >
            Al Shamry Trading provides high-quality industrial products and MEP solutions with a commitment to excellence and customer satisfaction.
          </p>
          <div className="flex flex-wrap gap-4 opacity-0 animate-[fade-in_0.8s_ease-out_0.6s_forwards]">
            <Link 
              to="/products/valves" 
              className="btn-primary bg-gold text-navy hover:bg-gold/90 hover:scale-105 transform transition-all duration-300 flex items-center"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/contact" 
              className="btn-outline border-white text-white hover:bg-white hover:text-navy hover:scale-105 transform transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
