
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
      className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden"
    >
      {/* Video or Image Background */}
      <div className="absolute inset-0 w-full h-full">
        {backgroundImage.endsWith('.mp4') ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
          >
            <source src={backgroundImage} type="video/mp4" />
          </video>
        ) : (
          <img
            src={backgroundImage}
            alt="Background"
            className="object-cover w-full h-full"
          />
        )}
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-heading animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            {subtitle}
          </p>
        )}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default PageBanner;
