
import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import PageBanner from '../components/ui/PageBanner';
import { CheckCircle, Award, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <PageLayout>
      <PageBanner 
        title="About Al Shamry Trading" 
        subtitle="Learn about our company, mission, and values"
        backgroundImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
      />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Company</h2>
              <p className="text-gray-700 mb-6">
                Al Shamry Trading is a leading provider of industrial products and solutions based in the UAE. Since our establishment, we have grown to become a trusted partner for businesses across the Middle East region, delivering high-quality products and exceptional service.
              </p>
              <p className="text-gray-700 mb-6">
                Our comprehensive range includes valves, fittings, pipes, and accessories from renowned global manufacturers, ensuring that our clients receive only the best products for their projects.
              </p>
              <p className="text-gray-700">
                With a team of experienced professionals and a commitment to excellence, we strive to exceed customer expectations in every interaction, providing solutions that drive success for our clients.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80" 
                alt="Al Shamry Trading Building" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 shadow-lg rounded-lg">
                <span className="block text-navy font-bold text-4xl">20+</span>
                <span className="text-gray-600">Years of Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-light-grey">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Mission & Vision</h2>
            <p className="section-subtitle mx-auto">
              Committed to excellence and customer satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide high-quality industrial products and solutions that meet the evolving needs of our clients, while maintaining the highest standards of quality, reliability, and customer service.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading provider of industrial products and solutions in the Middle East, recognized for our commitment to quality, innovation, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive solutions for your industrial needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-light-grey p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-navy mb-4">MEP Solutions</h3>
              <p className="text-gray-700 mb-6">
                Our Mechanical, Electrical, and Plumbing (MEP) solutions provide comprehensive support for construction and industrial projects. From design consultation to product supply, we ensure that your MEP systems are efficient, reliable, and compliant with industry standards.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Mechanical system components and supplies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Electrical fixtures and accessories</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Plumbing systems and components</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Technical support and consultation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-light-grey p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-navy mb-4">Gas Solutions</h3>
              <p className="text-gray-700 mb-6">
                Our gas solutions cover a wide range of applications, from industrial processes to building infrastructure. We provide high-quality components and expert advice to ensure safe and efficient gas systems.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Gas distribution systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Pressure regulation components</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Safety devices and monitoring systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Compliance with safety standards and regulations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-light-grey">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle mx-auto">
              The principles that guide our business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Quality</h3>
              <p className="text-gray-600">
                We are committed to providing products and services of the highest quality, meeting and exceeding industry standards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We strive to understand their needs and exceed their expectations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with honesty, transparency, and ethical principles, building trust with our clients and partners.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Excellence</h3>
              <p className="text-gray-600">
                We pursue excellence in all aspects of our business, continuously improving our products, services, and processes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
