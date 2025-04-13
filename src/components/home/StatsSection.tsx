
import React from 'react';
import { Users, Building, CheckCircle, Star } from 'lucide-react';

const stats = [
  {
    icon: Building,
    value: '500+',
    label: 'Projects Completed',
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: Users,
    value: '200+',
    label: 'Satisfied Clients',
    color: 'bg-green-50',
    iconColor: 'text-green-500',
  },
  {
    icon: CheckCircle,
    value: '98%',
    label: 'Client Satisfaction',
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
  {
    icon: Star,
    value: '50+',
    label: 'Global Brands',
    color: 'bg-amber-50',
    iconColor: 'text-amber-500',
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className={`w-14 h-14 rounded-full ${stat.color} flex items-center justify-center mb-4`}>
                <stat.icon className={`w-7 h-7 ${stat.iconColor}`} />
              </div>
              <h3 className="text-3xl font-bold text-navy mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
