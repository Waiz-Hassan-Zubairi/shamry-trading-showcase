
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-light-grey">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="section-title">About Al Shamry Trading</h2>
            <p className="text-gray-700 mb-6">
              For over two decades, Al Shamry Trading has been a trusted supplier of industrial products and solutions across the UAE and Middle East region. Our reputation is built on quality, reliability, and exceptional customer service.
            </p>
            <p className="text-gray-700 mb-8">
              We specialize in providing comprehensive MEP (Mechanical, Electrical, Plumbing) and gas solutions, offering a wide range of high-quality valves, fittings, pipes, and accessories from renowned global manufacturers.
            </p>
            <Link to="/about" className="inline-flex items-center text-navy font-medium hover:text-gold transition-colors">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1487058449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
                alt="Al Shamry Trading Office Building"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 w-40 h-40 flex flex-col items-center justify-center text-center">
              <span className="text-navy text-4xl font-bold">20+</span>
              <span className="text-gray-600 text-sm">Years of Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
