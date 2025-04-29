
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">Ready to Elevate Your Industrial Projects?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Contact us today to discuss your requirements and discover how Al Shamry Trading can provide the high-quality products and solutions you need.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary bg-gold text-navy hover:bg-gold/90 flex items-center">
              Contact Us Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/products/valves" className="btn-outline border-white text-white hover:bg-white hover:text-navy">
              Browse Our Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
