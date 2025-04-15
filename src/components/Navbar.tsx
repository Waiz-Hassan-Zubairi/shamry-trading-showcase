import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productCategories = [
    {
      name: 'Valves',
      path: '/products/valves',
      subCategories: [
        { name: 'Brass Valves', path: '/products/valves?material=brass' },
        { name: 'Bronze Valves', path: '/products/valves?material=bronze' },
        { name: 'Carbon Steel Valves', path: '/products/valves?material=carbon-steel' },
        { name: 'Cast Iron Valves', path: '/products/valves?material=cast-iron' },
        { name: 'Stainless Steel Valves', path: '/products/valves?material=stainless-steel' },
        { name: 'Forged Steel Valves', path: '/products/valves?material=forged-steel' },
      ]
    },
    {
      name: 'Fittings',
      path: '/products/fittings',
      subCategories: [
        { name: 'Black Steel Welded Fittings', path: '/products/fittings?material=black-steel' },
        { name: 'BMI Fittings', path: '/products/fittings?material=bmi' },
        { name: 'Forged Steel Thread Fittings', path: '/products/fittings?material=forged-steel' },
        { name: 'Stainless Steel 316 Thread Fitting', path: '/products/fittings?material=stainless-steel' },
        { name: 'Cast Iron Fittings', path: '/products/fittings?material=cast-iron' },
        { name: 'Grooved Fittings', path: '/products/fittings?material=grooved' },
      ]
    },
    {
      name: 'Pipes',
      path: '/products/pipes',
      subCategories: [
        { name: 'Black Steel Pipes ERW', path: '/products/pipes?material=black-steel-erw' },
        { name: 'Black Steel Pipes SMLS', path: '/products/pipes?material=black-steel-smls' },
        { name: 'G.I Pipes', path: '/products/pipes?material=gi-pipes' },
        { name: 'Stainless Steel Pipes ERW', path: '/products/pipes?material=ss-erw' },
        { name: 'Stainless Steel Pipes SMLS', path: '/products/pipes?material=ss-smls' },
        { name: 'Cast Iron Pipe', path: '/products/pipes?material=cast-iron' },
      ]
    },
    {
      name: 'Accessories',
      path: '/products/accessories',
      subCategories: [
        { name: 'Test Plugs', path: '/products/accessories?type=Test Plug' },
        { name: 'No Hub Coupling', path: '/products/accessories?type=No Hub Coupling' },
        { name: 'Clamps', path: '/products/accessories?type=Clamp' },
        { name: 'Threaded Rod', path: '/products/accessories?type=Threaded Rod' },
        { name: 'Bolts and Washers', path: '/products/accessories?type=Bolts and Washers' },
      ]
    }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-navy font-heading font-bold text-2xl">Al Shamry Trading</span>
            </Link>
          </div>

          <div className="mt-4 lg:mt-0 overflow-x-auto">
            <div className="flex flex-wrap lg:flex-nowrap gap-4 items-center min-w-max px-2">
              <Link to="/" className="text-navy hover:text-gold transition-colors whitespace-nowrap">Home</Link>
              <Link to="/about" className="text-navy hover:text-gold transition-colors whitespace-nowrap">About</Link>
              
              <div className="relative">
                <button 
                  className="text-navy hover:text-gold transition-colors whitespace-nowrap flex items-center"
                  onClick={() => setProductsOpen(!productsOpen)}
                >
                  Products
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {productsOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-[60]">
                    <ScrollArea className="max-h-[70vh]">
                      {productCategories.map((category, index) => (
                        <div key={index} className="relative"
                             onMouseEnter={() => setActiveCategory(category.name)}
                             onMouseLeave={() => setActiveCategory(null)}>
                          <Link 
                            to={category.path}
                            className="block px-4 py-2 text-navy hover:bg-light-grey hover:text-gold flex items-center justify-between"
                            onClick={() => {
                              setProductsOpen(false);
                              setActiveCategory(null);
                            }}
                          >
                            {category.name}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                          </Link>
                          
                          <div 
                            className="absolute left-full top-0 w-64 bg-white shadow-lg rounded-md overflow-hidden"
                            style={{ display: activeCategory === category.name ? 'block' : 'none' }}
                          >
                            {category.subCategories.map((subCategory, subIndex) => (
                              <Link 
                                key={subIndex}
                                to={subCategory.path}
                                className="block px-4 py-2 text-navy hover:bg-light-grey hover:text-gold"
                                onClick={() => {
                                  setProductsOpen(false);
                                  setActiveCategory(null);
                                }}
                              >
                                {subCategory.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </ScrollArea>
                  </div>
                )}
              </div>
              
              <Link to="/projects" className="text-navy hover:text-gold transition-colors whitespace-nowrap">Projects</Link>
              <Link to="/clients" className="text-navy hover:text-gold transition-colors whitespace-nowrap">Clients</Link>
              <Link to="/gallery" className="text-navy hover:text-gold transition-colors whitespace-nowrap">Gallery</Link>
              <Link to="/contact" className="text-navy hover:text-gold transition-colors whitespace-nowrap">Contact</Link>
              
              <Link to="/contact" className="btn-primary whitespace-nowrap">Get a Quote</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
