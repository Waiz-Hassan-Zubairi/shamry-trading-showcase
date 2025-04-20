
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { ProductCategory } from './types';

interface MobileNavMenuProps {
  isOpen: boolean;
  productCategories: ProductCategory[];
  activeMobileCategories: Record<string, boolean>;
  toggleMobileCategory: (categoryName: string) => void;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNavMenu: React.FC<MobileNavMenuProps> = ({
  isOpen,
  productCategories,
  activeMobileCategories,
  toggleMobileCategory,
  setIsOpen,
}) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-40 animate-fade-in">
      <ScrollArea className="max-h-[80vh] overflow-y-auto">
        <div className="container-custom mx-auto py-4">
          <Link to="/" className="text-navy hover:text-gold transition-colors px-4 py-2 block" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="text-navy hover:text-gold transition-colors px-4 py-2 block" onClick={() => setIsOpen(false)}>About</Link>
          
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full text-navy hover:text-gold transition-colors px-4 py-2">
              <span>Products</span>
              <ChevronDown className="w-4 h-4" />
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
                        <ScrollArea className="max-h-[40vh]">
                          <div className="pl-4 py-2">
                            {category.subCategories.map((subCategory, subIndex) => (
                              <Link 
                                key={subIndex}
                                to={subCategory.path} 
                                className="text-navy text-sm hover:text-gold transition-colors px-4 py-2.5 block"
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
  );
};

export default MobileNavMenu;
