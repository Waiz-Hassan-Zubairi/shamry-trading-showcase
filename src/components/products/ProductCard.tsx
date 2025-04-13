
import React from 'react';
import { Product } from '../../types/product';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="aspect-video overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-navy">{product.name}</h3>
          <span className="bg-navy/10 text-navy text-xs px-2 py-1 rounded-full">
            {product.type}
          </span>
        </div>
        {product.brand && (
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-medium">Brand:</span> {product.brand}
          </p>
        )}
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{product.description}</p>
        <Link 
          to={`/products/${product.category}/${product.id}`}
          className="inline-flex items-center text-navy font-medium hover:text-gold transition-colors text-sm"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
