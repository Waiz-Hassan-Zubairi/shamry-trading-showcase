
import React from 'react';
import { Product } from '../../types/product';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      <div className="aspect-video overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-navy">{product.name}</h3>
          <span className="bg-navy/10 text-navy text-xs px-2.5 py-1 rounded-full font-medium">
            {product.type}
          </span>
        </div>
        {product.brand && (
          <p className="text-sm text-gray-600 mb-3">
            <span className="font-medium">Brand:</span> {product.brand}
          </p>
        )}
        <p className="text-gray-700 mb-4 line-clamp-3">{product.description}</p>
        <Link 
          to={`/products/${product.category}/${product.id}`}
          className="inline-flex items-center text-navy font-medium hover:text-gold transition-colors"
        >
          View Details
          <svg className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
