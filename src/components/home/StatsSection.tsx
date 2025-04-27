
import React from 'react';
import { Users, Building, CheckCircle, Star } from 'lucide-react';

const stats = [
  {
    icon: Building,
    value: '500+',
    label: 'Projects Completed',
    color: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-500',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Users,
    value: '200+',
    label: 'Satisfied Clients',
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-500',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: CheckCircle,
    value: '98%',
    label: 'Client Satisfaction',
    color: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-500',
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    icon: Star,
    value: '50+',
    label: 'Global Brands',
    color: 'from-amber-500/20 to-orange-500/20',
    iconColor: 'text-amber-500',
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl transform rotate-6 group-hover:rotate-4 transition-transform duration-300 opacity-20`} />
              <div 
                className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 opacity-0 animate-[fade-in_0.8s_ease-out_forwards] hover:-translate-y-1 border border-white/10"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]`}>
                  <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />
                </div>
                <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-300 text-lg">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
