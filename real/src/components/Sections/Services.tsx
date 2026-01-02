import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-sapphire-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-neon-cyan font-mono text-sm tracking-wider uppercase mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white">
            Digital Solutions for <br /><span className="text-gray-400">Every Stage of Growth</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group relative p-8 bg-sapphire-800 rounded-2xl border border-sapphire-700 hover:border-neon-cyan/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,242,255,0.1)]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sapphire-900/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-sapphire-900 inline-block rounded-xl border border-sapphire-700 group-hover:border-neon-cyan/30 transition-colors">
                  {service.icon}
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-neon-green mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center text-white font-medium group-hover:text-neon-cyan transition-colors">
                  {service.ctaText} <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;