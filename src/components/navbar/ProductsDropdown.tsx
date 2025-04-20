
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { ProductCategory } from './types';

interface ProductsDropdownProps {
  productsOpen: boolean;
  setProductsOpen: (open: boolean) => void;
  productCategories: ProductCategory[];
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
}

const ProductsDropdown: React.FC<ProductsDropdownProps> = ({
  productsOpen,
  setProductsOpen,
  productCategories,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="relative group">
      <button 
        className="text-navy hover:text-gold transition-colors flex items-center"
        onClick={() => setProductsOpen(!productsOpen)}
        onMouseEnter={() => setProductsOpen(true)}
      >
        Products
        <ChevronDown className="w-4 h-4 ml-1" />
      </button>
      
      <div 
        className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-[60]"
        style={{ display: productsOpen ? 'block' : 'none' }}
        onMouseLeave={() => {
          if (activeCategory === null) {
            setProductsOpen(false);
          }
        }}
      >
        <ul>
          {productCategories.map((category, index) => (
            <li 
              key={index} 
              className="relative"
              onMouseEnter={() => setActiveCategory(category.name)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <Link 
                to={category.path}
                className="block px-4 py-2 text-navy hover:bg-light-grey hover:text-gold flex items-center justify-between"
                onClick={() => {
                  setProductsOpen(false);
                  setActiveCategory(null);
                }}
              >
                {category.name}
                <ChevronRight className="w-4 h-4" />
              </Link>
              
              <div 
                className="fixed left-auto ml-64 top-auto mt-[-2.5rem] w-64 bg-white shadow-lg rounded-md overflow-hidden z-[70]"
                style={{ display: activeCategory === category.name ? 'block' : 'none' }}
              >
                <ul>
                  {category.subCategories.map((subCategory, subIndex) => (
                    <li key={subIndex}>
                      <Link 
                        to={subCategory.path}
                        className="block px-4 py-2 text-navy hover:bg-light-grey hover:text-gold"
                        onClick={() => {
                          setProductsOpen(false);
                          setActiveCategory(null);
                        }}
                      >
                        {subCategory.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsDropdown;
