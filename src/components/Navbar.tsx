import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import MobileNavMenu from './navbar/MobileNavMenu';
import ProductsDropdown from './navbar/ProductsDropdown';
import { ProductCategory } from './navbar/types';

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

  // Product categories data
  const productCategories: ProductCategory[] = [
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
          
          <ProductsDropdown 
            productsOpen={productsOpen}
            setProductsOpen={setProductsOpen}
            productCategories={productCategories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          
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

      <MobileNavMenu 
        isOpen={isOpen}
        productCategories={productCategories}
        activeMobileCategories={activeMobileCategories}
        toggleMobileCategory={toggleMobileCategory}
        setIsOpen={setIsOpen}
      />
    </nav>
  );
};

export default Navbar;
