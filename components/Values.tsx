import React from 'react';
import { VALUES } from '../constants';

const Values: React.FC = () => {
  return (
    <section id="values" className="py-24 bg-brand-paper relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
             <span className="text-brand-copper uppercase tracking-widest text-xs font-bold mb-4 block">Notre ADN</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-main mb-6">
                Valeurs fondatrices
            </h2>
            <div className="w-16 h-px bg-brand-copper mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, index) => (
                <div 
                    key={index} 
                    className="group p-8 rounded-2xl bg-white shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-1 border border-transparent hover:border-brand-copper/20"
                >
                    <div className="mb-6 text-brand-copper group-hover:scale-110 transition-transform duration-500 origin-left">
                        {React.cloneElement(value.icon as React.ReactElement<any>, { size: 32, strokeWidth: 1 })}
                    </div>
                    <h3 className="font-serif text-xl text-brand-main mb-3">
                        {value.title}
                    </h3>
                    <p className="text-sm text-brand-dark/60 leading-relaxed font-light">
                        {value.description}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Values;