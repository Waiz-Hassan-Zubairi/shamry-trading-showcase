
import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ 
  title, 
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
}) => {
  return (
    <div 
      className="relative h-64 md:h-96 flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-navy/80 to-indigo-900/80 mix-blend-multiply" />
      
      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <div className="glass-card px-8 py-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-pink-200 mb-4 font-heading opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto opacity-0 animate-[fade-in_0.8s_ease-out_0.4s_forwards]">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
