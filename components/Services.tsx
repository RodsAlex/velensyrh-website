import React from 'react';
import { SERVICES } from '../constants';

interface ServicesProps {
  onViewMore: () => void;
}

const Services: React.FC<ServicesProps> = ({ onViewMore }) => {
  return (
    <section id="services" className="py-24 bg-brand-paper relative overflow-hidden">
      {/* Décoration d'arrière-plan subtile */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-copper/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-main/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                <h2 className="font-serif text-4xl md:text-5xl text-brand-main mb-4">Pôles d'Expertise</h2>
                <p className="text-brand-dark/60 italic max-w-xl font-light">
                    Une approche sectorielle pointue pour dénicher les talents qui feront la différence.
                </p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative p-8 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer hover:-translate-y-2 bg-brand-main shadow-md hover:shadow-xl border border-white/10"
            >
              {/* Background hover effect */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500"></div>

              <div className="relative z-10">
                <div className="mb-6 text-brand-copper group-hover:scale-110 transition-transform duration-500 origin-left bg-white/5 w-fit p-3 rounded-xl border border-white/10">
                    {React.cloneElement(service.icon as React.ReactElement<any>, { size: 32, strokeWidth: 1 })}
                </div>
                
                <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-brand-copper transition-colors font-medium">
                    {service.title}
                </h3>

                <p className="text-white/70 font-light leading-relaxed text-sm group-hover:text-white transition-colors">
                    {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;