import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { ViewType } from '../types';

interface HeaderProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || currentView !== 'home' ? 'py-3 bg-white/95 backdrop-blur-md border-b border-brand-main/5 shadow-soft' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo - Style "Monolithe Satiné" Discret */}
          <button onClick={() => onNavigate('home')} className="flex items-center gap-3 group" aria-label="Retour à l'accueil">
            
            <div className="relative w-10 h-10 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300 hover:scale-105">
                {/* Fond Or Satiné */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F0D7A8] via-[#C6A87C] to-[#9C7E46]"></div>
                
                {/* Reflet Lumière Subtil */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50"></div>

                {/* Lettre V - Vert Profond */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-brand-main text-xl font-bold italic pt-0.5">V</span>
                </div>
            </div>

            <span 
              className={`text-2xl tracking-tight font-medium font-serif transition-colors duration-300 ${
                 isScrolled || currentView !== 'home' ? 'text-brand-main' : 'text-brand-main'
              }`}
            >
              Valensy RH
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button 
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-brand-copper after:transition-all hover:after:w-full ${
                  currentView === item.id ? 'text-brand-copper after:w-full' : 'text-brand-dark/80 hover:text-brand-copper after:w-0'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Calendly CTA */}
            <button 
              onClick={() => onNavigate('companies')}
              className="flex items-center gap-2 px-5 py-2.5 bg-brand-copper text-white rounded-full text-sm font-medium hover:bg-brand-main transition-colors shadow-soft hover:shadow-lg duration-300"
            >
              <Calendar size={14} />
              <span>Prendre RDV</span>
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-brand-main"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileMenuOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-paper flex flex-col justify-center px-8 animate-in fade-in duration-300">
          <nav className="flex flex-col gap-6 items-center">
            {NAV_ITEMS.map((item) => (
              <button 
                key={item.id}
                className={`text-2xl font-serif transition-colors italic ${currentView === item.id ? 'text-brand-copper' : 'text-brand-main'}`}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
            <button 
              className="mt-8 px-8 py-4 bg-brand-main text-white rounded-full text-lg font-medium"
              onClick={() => {
                onNavigate('companies');
                setIsMobileMenuOpen(false);
              }}
            >
              Réserver un créneau
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;