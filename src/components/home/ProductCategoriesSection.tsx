
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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16 opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-heading">Our Product Categories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of high-quality industrial products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-navy/80 to-navy rounded-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-300 opacity-0 animate-[fade-in_0.8s_ease-out_forwards]"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              />
              <div 
                className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 opacity-0 animate-[fade-in_0.8s_ease-out_forwards]"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-xl font-bold text-navy mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{category.description}</p>
                  <Link 
                    to={category.link}
                    className="inline-flex items-center text-navy font-medium group/link"
                  >
                    <span className="relative">
                      View Products
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 transition-transform duration-300 group-hover/link:scale-x-100" />
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategoriesSection;
