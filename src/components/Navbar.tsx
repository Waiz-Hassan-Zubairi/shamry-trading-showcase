
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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

  // Common styling for NavigationMenuLink
  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  });
  ListItem.displayName = "ListItem";

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

        {/* Desktop Menu with Navigation Menu Component */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="text-navy hover:text-gold transition-colors">Home</Link>
          <Link to="/about" className="text-navy hover:text-gold transition-colors">About</Link>
          
          {/* Products Dropdown using Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-navy hover:text-gold transition-colors">Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[700px]">
                    {productCategories.map((category, index) => (
                      <li key={index} className="relative group">
                        <NavigationMenuLink asChild>
                          <Link
                            to={category.path}
                            className="block select-none rounded-md p-3 text-navy leading-none no-underline outline-none transition-colors hover:bg-light-grey"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">{category.name}</span>
                              <ChevronDown className="ml-1 h-4 w-4" />
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        
                        {/* Sub-category dropdown */}
                        <div className="absolute left-full top-0 hidden group-hover:block min-w-[200px] bg-white shadow-lg rounded-md z-50">
                          <ul className="py-1">
                            {category.subCategories.map((subCategory, subIndex) => (
                              <li key={subIndex}>
                                <Link 
                                  to={subCategory.path}
                                  className="block px-4 py-2 text-sm text-navy hover:bg-light-grey"
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
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
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
                  {productCategories.map((category, index) => (
                    <div key={index}>
                      <Link 
                        to={category.path} 
                        className="text-navy hover:text-gold transition-colors px-4 py-1 block"
                        onClick={() => setIsOpen(false)}
                      >
                        {category.name}
                      </Link>
                      <div className="pl-4 space-y-1 mt-1">
                        {category.subCategories.map((subCategory, subIndex) => (
                          <Link 
                            key={subIndex}
                            to={subCategory.path} 
                            className="text-navy text-sm hover:text-gold transition-colors px-4 py-1 block"
                            onClick={() => setIsOpen(false)}
                          >
                            {subCategory.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
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
