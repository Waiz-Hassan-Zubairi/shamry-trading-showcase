
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      {/* Animated Background with Modern Gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to right, rgba(15, 43, 91, 0.95), rgba(15, 43, 91, 0.8)), url(https://images.unsplash.com/photo-1487058449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 animate-gradient" />
      </div>

      {/* Geometric Shapes for Modern Look */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content with Glass Effect */}
      <div className="container-custom relative z-10 mt-10">
        <div className="max-w-3xl backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl">
          <h1 
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-6 font-heading leading-tight opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]"
          >
            Premium Industrial Solutions for Your Business
          </h1>
          <p 
            className="text-xl text-gray-300 mb-8 opacity-0 animate-[fade-in_0.8s_ease-out_0.4s_forwards]"
          >
            Al Shamry Trading provides high-quality industrial products and MEP solutions with a commitment to excellence and customer satisfaction.
          </p>
          <div className="flex flex-wrap gap-4 opacity-0 animate-[fade-in_0.8s_ease-out_0.6s_forwards]">
            <Link 
              to="/products/valves" 
              className="relative group px-8 py-3 bg-gold text-navy rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-gold/50"
            >
              <span className="relative z-10 flex items-center font-medium">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 border-2 border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300 font-medium backdrop-blur-sm"
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
