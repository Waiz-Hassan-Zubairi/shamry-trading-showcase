
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-[10%] w-[40rem] h-[40rem] bg-purple-600/20 rounded-full blur-[8rem]" />
          <div className="absolute bottom-20 right-[10%] w-[35rem] h-[35rem] bg-blue-600/20 rounded-full blur-[8rem]" />
        </div>
        
        {/* Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto glass-card py-12 px-8 md:px-12 rounded-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading text-center">Ready to Elevate Your Industrial Projects?</h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 text-center">
            Contact us today to discuss your requirements and discover how Al Shamry Trading can provide the high-quality products and solutions you need.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="relative group px-10 py-4 bg-gradient-to-r from-gold to-amber-500 text-navy hover:shadow-xl hover:shadow-gold/20 flex items-center rounded-full transition-all duration-300 font-medium">
              Contact Us Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/products/valves" className="px-10 py-4 border-2 border-white/30 text-white hover:bg-white/10 rounded-full transition-all duration-300 font-medium backdrop-blur-sm">
              Browse Our Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
