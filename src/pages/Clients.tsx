
import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import PageBanner from '../components/ui/PageBanner';
import { clients, ClientIndustry } from '../data/clientsData';

const Clients = () => {
  const [activeIndustry, setActiveIndustry] = useState<string>('all');

  // Get unique industries
  const industries = ['all', ...new Set(clients.map(client => client.industry))];

  // Filter clients based on active industry
  const filteredClients = clients.filter(client => 
    activeIndustry === 'all' || client.industry === activeIndustry
  );

  return (
    <PageLayout>
      <PageBanner 
        title="Our Clients" 
        subtitle="Trusted by leading organizations across industries"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
      />
      
      <section className="py-16 bg-light-grey">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="section-title text-center">Our Valued Clients</h2>
            <p className="section-subtitle mx-auto">
              We're proud to partner with organizations that trust us for their critical industrial needs
            </p>
          </div>
          
          {/* Industry Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setActiveIndustry(industry)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeIndustry === industry
                      ? 'bg-navy text-white'
                      : 'bg-white text-navy hover:bg-navy/10'
                  }`}
                >
                  {industry === 'all' ? 'All Industries' : industry}
                </button>
              ))}
            </div>
          </div>
          
          {/* Clients Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClients.map((client) => (
              <div 
                key={client.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[2/1] bg-gray-50 flex items-center justify-center p-6">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-navy">{client.name}</h3>
                    <span className="bg-navy/10 text-navy text-xs px-2 py-1 rounded-full">
                      {client.industry}
                    </span>
                  </div>
                  {client.description && (
                    <p className="text-gray-600">{client.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Testimonials */}
          <div className="mt-16">
            <h2 className="section-title text-center mb-12">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-navy flex items-center justify-center">
                  <span className="text-2xl text-white">"</span>
                </div>
                <p className="text-gray-700 mb-6 pt-6">
                  Al Shamry Trading has been our trusted supplier for MEP components for over 5 years. Their quality products and exceptional service have significantly contributed to the success of our projects.
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold text-navy">Mohammed Al Farsi</p>
                    <p className="text-sm text-gray-600">Project Director, Al Futtaim Group</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-navy flex items-center justify-center">
                  <span className="text-2xl text-white">"</span>
                </div>
                <p className="text-gray-700 mb-6 pt-6">
                  The team at Al Shamry Trading provided excellent support for our hospital expansion project. Their understanding of medical gas systems and ability to deliver high-quality components on time made them an invaluable partner.
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold text-navy">Dr. Sarah Khan</p>
                    <p className="text-sm text-gray-600">Facilities Manager, SEHA Health</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Clients;
