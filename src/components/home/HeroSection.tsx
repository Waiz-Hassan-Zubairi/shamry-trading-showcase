
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source src="https://player.vimeo.com/external/480942299.sd.mp4?s=16ea9e4b74bac08b0a4f8d93e8ba44ce267d8068&profile_id=164" type="video/mp4" />
        </video>
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-fuchsia-900/80" />
      </div>

      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content with Enhanced Glass Effect */}
      <div className="container-custom relative z-10 mt-10">
        <div className="max-w-3xl mx-auto backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl">
          <h1 
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-pink-200 mb-6 font-heading leading-tight opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]"
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
              className="relative group px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <span className="relative z-10 flex items-center font-medium">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
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
