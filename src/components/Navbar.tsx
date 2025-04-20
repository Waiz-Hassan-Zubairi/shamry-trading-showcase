
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeMobileCategories, setActiveMobileCategories] = useState<Record<string, boolean>>({});

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

  // Product categories for dropdown
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

  const toggleMobileCategory = (categoryName: string) => {
    setActiveMobileCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-navy font-heading font-bold text-2xl">Al Shamry Trading</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="text-navy hover:text-gold transition-colors">Home</Link>
          <Link to="/about" className="text-navy hover:text-gold transition-colors">About</Link>
          
          {/* Products Dropdown */}
          <div className="relative group">
            <button 
              className="text-navy hover:text-gold transition-colors flex items-center"
              onClick={() => setProductsOpen(!productsOpen)}
              onMouseEnter={() => setProductsOpen(true)}
            >
              Products
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            
            {/* Main Products Dropdown */}
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
                    
                    {/* Sub-category dropdown - improved positioning and z-index */}
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
          
          <Link to="/projects" className="text-navy hover:text-gold transition-colors">Projects</Link>
          <Link to="/clients" className="text-navy hover:text-gold transition-colors">Clients</Link>
          <Link to="/gallery" className="text-navy hover:text-gold transition-colors">Gallery</Link>
          <Link to="/contact" className="text-navy hover:text-gold transition-colors">Contact</Link>
        </div>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary">Get a Quote</Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-navy"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu with improved scrolling for product categories */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-40 animate-fade-in">
          <ScrollArea className="max-h-[75vh] overflow-y-auto">
            <div className="container-custom mx-auto py-4">
              <Link to="/" className="text-navy hover:text-gold transition-colors px-4 py-2 block" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" className="text-navy hover:text-gold transition-colors px-4 py-2 block" onClick={() => setIsOpen(false)}>About</Link>
              
              {/* Mobile Products with Collapsible sections */}
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full text-navy hover:text-gold transition-colors px-4 py-2">
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="pl-4">
                    {productCategories.map((category, index) => (
                      <div key={index} className="mb-2">
                        <Collapsible>
                          <CollapsibleTrigger 
                            className="flex items-center justify-between w-full text-navy hover:text-gold transition-colors px-4 py-2"
                            onClick={() => toggleMobileCategory(category.name)}
                          >
                            <span>{category.name}</span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileCategories[category.name] ? 'rotate-180' : ''}`} />
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <ScrollArea className="max-h-[30vh]">
                              <div className="pl-4">
                                {category.subCategories.map((subCategory, subIndex) => (
                                  <Link 
                                    key={subIndex}
                                    to={subCategory.path} 
                                    className="text-navy text-sm hover:text-gold transition-colors px-4 py-2 block"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {subCategory.name}
                                  </Link>
                                ))}
                              </div>
                            </ScrollArea>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
              
              <Link to="/projects" className="text-navy hover:text-gold transition-colors px-4 py-2 block" onClick={() => setIsOpen(false)}>Projects</Link>
              <Link to="/clients" className="text-navy hover:text-gold transition-colors px-4 py-2 block" onClick={() => setIsOpen(false)}>Clients</Link>
              <Link to="/gallery" className="text-navy hover:text-gold transition-colors px-4 py-2 block" onClick={() => setIsOpen(false)}>Gallery</Link>
              <Link to="/contact" className="text-navy hover:text-gold transition-colors px-4 py-2 block" onClick={() => setIsOpen(false)}>Contact</Link>
              
              <Link to="/contact" className="btn-primary mx-4 mt-4 block text-center" onClick={() => setIsOpen(false)}>Get a Quote</Link>
            </div>
          </ScrollArea>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
