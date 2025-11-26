import React from 'react';
import { ViewType } from '../types';
import { CONTACT_INFO } from '../constants';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative bg-brand-main/90 backdrop-blur-xl border-t border-white/10 text-white overflow-hidden">
      {/* Decorative top glow for glass separation */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-2/3 h-[1px] bg-gradient-to-r from-transparent via-brand-copper/50 to-transparent"></div>
      
      {/* Ambient subtle glow inside the footer */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-copper/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8 relative z-10">
        
        <div className="mb-8 md:mb-0">
             <button 
                onClick={() => onNavigate('home')}
                className="text-4xl text-white font-medium hover:text-brand-copper transition-colors font-serif"
            >
                Valensy RH
            </button>
            <p className="text-white/40 text-sm mt-2 max-w-xs">
                110 Rue de Fontenay<br/>94300 Vincennes
            </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-white/60">
            <button onClick={() => onNavigate('home')} className="hover:text-brand-copper transition-colors">Accueil</button>
            <button onClick={() => onNavigate('expertise')} className="hover:text-brand-copper transition-colors">Expertise</button>
            <button onClick={() => onNavigate('candidates')} className="hover:text-brand-copper transition-colors">Candidats</button>
            <button onClick={() => onNavigate('companies')} className="hover:text-brand-copper transition-colors">Entreprises</button>
        </div>

        <div className="flex gap-6">
            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="text-white/40 hover:text-brand-copper transition-colors">LinkedIn</a>
        </div>
      </div>
      <div className="mt-0 text-center text-xs text-white/20 font-light border-t border-white/5 pt-8 pb-8 mx-6">
            © 2025 Valensy RH. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;