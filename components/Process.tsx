import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-brand-main text-white relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-copper/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
            {/* Sticky only on Large screens (lg:sticky) to prevent overlap on mobile */}
            <div className="relative lg:sticky lg:top-32 h-fit mb-12 lg:mb-0">
                <span className="text-brand-copper uppercase tracking-widest text-xs font-bold mb-6 block">Notre Méthode</span>
                <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
                    L'art de <br/> <span className="italic text-brand-copper">révéler.</span>
                </h2>
                <p className="text-white/70 leading-relaxed max-w-md font-light text-lg">
                    Bien plus qu'une simple sélection de CV, nous révélons l'alignement authentique entre la personnalité d'un talent et la culture unique de votre entreprise.
                </p>
            </div>

            <div className="relative border-l border-white/10 pl-12 py-4 space-y-20">
                {PROCESS_STEPS.map((step, index) => (
                    <div key={step.number} className="relative group">
                        {/* Copper Dot */}
                        <div className="absolute -left-[53px] top-0 w-3 h-3 rounded-full bg-brand-copper ring-4 ring-brand-main group-hover:scale-150 transition-transform duration-500"></div>
                        
                        <span className="text-6xl font-serif text-white/5 font-bold absolute -top-10 -left-6 select-none">
                            {step.number}
                        </span>
                        
                        <h3 className="text-2xl font-serif mb-4 relative z-10 group-hover:text-brand-copper transition-colors">
                            {step.title}
                        </h3>
                        <p className="text-white/60 font-light leading-relaxed">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;