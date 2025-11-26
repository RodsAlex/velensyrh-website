import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { ViewType } from '../types';

interface HeroProps {
  onNavigate: (view: ViewType) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-40 lg:pt-20 overflow-hidden bg-brand-paper">
      
      {/* Ambient Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-brand-copper/5 to-transparent blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-brand-main/5 to-transparent blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Text Content - Order 1 on mobile */}
        <div className="order-1 animate-in slide-in-from-left-10 duration-700 fade-in">
          <div className="inline-flex items-center gap-2 text-brand-copper font-medium text-sm tracking-widest uppercase mb-8">
            <span className="w-8 h-px bg-brand-copper"></span>
            Valensy RH
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl text-brand-main leading-[1.1] mb-8">
            L'Humain <br/>
            au cœur du <br/>
            <span className="italic text-brand-copper">recrutement.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-dark/70 leading-relaxed mb-12 max-w-lg font-light">
            Nous connectons les entreprises visionnaires avec les talents précieux qui partagent leur ADN. Expertise, proximité et transparence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <button 
              onClick={() => onNavigate('candidates')}
              className="group flex items-center gap-4 px-8 py-4 bg-brand-main text-white rounded-full hover:bg-brand-copper transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300"
            >
              <span className="font-medium text-lg">Découvrir nos offres</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button 
              onClick={() => onNavigate('companies')}
              className="group flex items-center gap-4 px-8 py-4 bg-white text-brand-main border border-brand-main/10 rounded-full hover:border-brand-copper hover:text-brand-copper transition-all shadow-soft hover:shadow-lg duration-300"
            >
              <Calendar className="w-5 h-5" />
              <span className="font-medium text-lg">Réserver un RDV</span>
            </button>
          </div>
        </div>

        {/* Visual - Abstract Value Prism - Order 2 on mobile */}
        <div className="order-2 relative h-[600px] flex items-center justify-center perspective-1000 animate-in slide-in-from-right-10 duration-1000 fade-in">
            
            {/* Central Visual */}
            <div className="relative w-96 h-96 group">
                {/* Main Image shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-main to-[#0f2629] rounded-[3rem] rotate-3 shadow-2xl shadow-brand-main/20 overflow-hidden transition-transform duration-700 group-hover:rotate-0">
                    <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center mix-blend-overlay transition-transform duration-700 group-hover:scale-110"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-main via-transparent to-transparent"></div>
                    
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                         <div className="text-brand-copper text-xs uppercase tracking-widest mb-2 font-bold">Valensy RH</div>
                         <div className="font-serif text-3xl leading-tight">Expertise <br/><span className="italic text-brand-copper">Recrutement sur mesure & conseils RH</span></div>
                    </div>
                </div>

                {/* Floating Card 1 */}
                <div className="absolute -top-8 -right-4 bg-white p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] animate-float-slow z-20 max-w-[220px] border border-brand-main/5">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-2 h-2 rounded-full bg-brand-copper animate-pulse"></div>
                        <span className="text-xs font-bold text-brand-main uppercase tracking-wider">Témoignage</span>
                    </div>
                    <p className="text-sm text-brand-dark/80 font-serif italic leading-snug">"Une compréhension parfaite de nos enjeux stratégiques."</p>
                </div>

                 {/* Floating Card 2 */}
                <div className="absolute -bottom-4 -left-8 bg-brand-copper text-white p-6 rounded-2xl shadow-xl shadow-brand-copper/30 animate-pulse-slow z-20 border-t border-white/20">
                    <div className="text-4xl font-serif font-bold mb-1">5</div>
                    <div className="text-xs uppercase tracking-widest font-medium">Pôles d'Expertise</div>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-copper/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;