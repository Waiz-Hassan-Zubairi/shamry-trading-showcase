
import React from 'react';
import { Wrench, ShieldCheck, Truck, Clock, Users, LineChart } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'MEP Solutions',
    description: 'Comprehensive Mechanical, Electrical, and Plumbing solutions for construction and industrial projects.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description: 'All products undergo strict quality control to meet international standards and specifications.',
  },
  {
    icon: Truck,
    title: 'Timely Delivery',
    description: 'Efficient logistics and delivery systems to ensure products reach you when needed.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and assistance for all your requirements.',
  },
  {
    icon: Users,
    title: 'Expert Consultation',
    description: 'Professional advice from our team of experts to help you find the right solutions.',
  },
  {
    icon: LineChart,
    title: 'Custom Solutions',
    description: 'Tailored solutions designed specifically to meet your unique project requirements.',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-light-grey">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services & Core Values</h2>
          <p className="section-subtitle mx-auto">
            We are committed to providing exceptional service and value to all our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
