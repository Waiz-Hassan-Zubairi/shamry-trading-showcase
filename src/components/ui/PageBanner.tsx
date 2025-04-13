
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
      className="relative h-64 md:h-80 bg-navy flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 43, 91, 0.8), rgba(15, 43, 91, 0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-custom relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 font-heading">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageBanner;
