
import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import PageBanner from '../components/ui/PageBanner';
import { galleryImages } from '../data/galleryData';
import GalleryLightbox from '../components/gallery/GalleryLightbox';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', label: 'All Images' },
    { id: 'products', label: 'Products' },
    { id: 'projects', label: 'Projects' },
    { id: 'operations', label: 'Operations' },
    { id: 'team', label: 'Team' },
  ];

  const filteredImages = galleryImages.filter(
    image => activeCategory === 'all' || image.category === activeCategory
  );

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <PageLayout>
      <PageBanner 
        title="Gallery" 
        subtitle="Visual showcase of our products, projects, operations, and team"
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
      />
      
      <section className="py-16 bg-light-grey">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="section-title text-center">Our Gallery</h2>
            <p className="section-subtitle mx-auto">
              Explore our comprehensive visual showcase
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-navy text-white'
                      : 'bg-white text-navy hover:bg-navy/10'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id}
                className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-square relative">
                  <img 
                    src={image.image} 
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-xl">{image.title}</h3>
                    <p className="text-gray-200 text-sm line-clamp-2">
                      {image.description || `${image.category} image`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Lightbox */}
      <GalleryLightbox
        images={filteredImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </PageLayout>
  );
};

export default Gallery;
