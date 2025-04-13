
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage } from '../../data/galleryData';

interface GalleryLightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
}) => {
  const [index, setIndex] = useState(currentIndex);

  if (!isOpen) return null;

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const currentImage = images[index];

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>

      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={48} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Next image"
      >
        <ChevronRight size={48} />
      </button>

      {/* Image container */}
      <div className="w-full max-w-6xl p-4 relative">
        <div className="w-full h-full flex flex-col items-center">
          <div className="relative w-full" style={{ maxHeight: 'calc(100vh - 200px)' }}>
            <img
              src={currentImage.image}
              alt={currentImage.title}
              className="mx-auto max-h-full max-w-full object-contain"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-xl text-white font-bold">{currentImage.title}</h3>
            {currentImage.description && (
              <p className="text-gray-300 mt-2">{currentImage.description}</p>
            )}
            <p className="text-gray-400 mt-1 text-sm">
              {index + 1} / {images.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryLightbox;
