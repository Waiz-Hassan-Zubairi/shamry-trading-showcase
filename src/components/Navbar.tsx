
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

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
              className="flex items-center text-navy hover:text-gold transition-colors"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              <span>Products</span>
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden hidden group-hover:block transition-all z-50">
              <Link to="/products/valves" className="block px-4 py-2 text-navy hover:bg-light-grey">Valves</Link>
              <Link to="/products/fittings" className="block px-4 py-2 text-navy hover:bg-light-grey">Fittings</Link>
              <Link to="/products/pipes" className="block px-4 py-2 text-navy hover:bg-light-grey">Pipes</Link>
              <Link to="/products/accessories" className="block px-4 py-2 text-navy hover:bg-light-grey">Accessories</Link>
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-40 animate-fade-in">
          <div className="container-custom mx-auto py-4 flex flex-col space-y-4">
            <Link to="/" className="text-navy hover:text-gold transition-colors px-4 py-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="text-navy hover:text-gold transition-colors px-4 py-2" onClick={() => setIsOpen(false)}>About</Link>
            
            {/* Mobile Products Dropdown */}
            <div>
              <button 
                className="flex items-center justify-between w-full text-navy hover:text-gold transition-colors px-4 py-2"
                onClick={() => setProductsOpen(!productsOpen)}
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {productsOpen && (
                <div className="pl-6 flex flex-col space-y-2 mt-2">
                  <Link to="/products/valves" className="text-navy hover:text-gold transition-colors px-4 py-1" onClick={() => setIsOpen(false)}>Valves</Link>
                  <Link to="/products/fittings" className="text-navy hover:text-gold transition-colors px-4 py-1" onClick={() => setIsOpen(false)}>Fittings</Link>
                  <Link to="/products/pipes" className="text-navy hover:text-gold transition-colors px-4 py-1" onClick={() => setIsOpen(false)}>Pipes</Link>
                  <Link to="/products/accessories" className="text-navy hover:text-gold transition-colors px-4 py-1" onClick={() => setIsOpen(false)}>Accessories</Link>
                </div>
              )}
            </div>
            
            <Link to="/projects" className="text-navy hover:text-gold transition-colors px-4 py-2" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/clients" className="text-navy hover:text-gold transition-colors px-4 py-2" onClick={() => setIsOpen(false)}>Clients</Link>
            <Link to="/gallery" className="text-navy hover:text-gold transition-colors px-4 py-2" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link to="/contact" className="text-navy hover:text-gold transition-colors px-4 py-2" onClick={() => setIsOpen(false)}>Contact</Link>
            
            <Link to="/contact" className="btn-primary mx-4" onClick={() => setIsOpen(false)}>Get a Quote</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
