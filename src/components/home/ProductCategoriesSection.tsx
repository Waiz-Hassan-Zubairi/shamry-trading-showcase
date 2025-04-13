
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'Valves',
    description: 'High-quality brass, bronze, cast iron, and steel valves from renowned manufacturers.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    link: '/products/valves',
  },
  {
    title: 'Fittings',
    description: 'Comprehensive range of steel, forged, cast iron, and stainless steel fittings.',
    image: 'https://images.unsplash.com/photo-1487058449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    link: '/products/fittings',
  },
  {
    title: 'Pipes',
    description: 'Premium quality steel, GI, stainless steel, and cast iron pipes for all applications.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    link: '/products/pipes',
  },
  {
    title: 'Accessories',
    description: 'Essential accessories including test plugs, couplings, clamps, and threaded components.',
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    link: '/products/accessories',
  },
];

const ProductCategoriesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Product Categories</h2>
          <p className="section-subtitle mx-auto">
            Explore our comprehensive range of high-quality industrial products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link 
                  to={category.link}
                  className="inline-flex items-center text-navy font-medium hover:text-gold transition-colors"
                >
                  View Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategoriesSection;
