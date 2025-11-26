import React, { useState } from 'react';
import { ViewType } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Values from './components/Values';
import Services from './components/Services';
import Process from './components/Process';
import CandidateForm from './components/CandidateForm';
import ClientForm from './components/ClientForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  // Fonction de navigation fluide (Smooth Scroll)
  const handleNavigate = (view: ViewType) => {
    setCurrentView(view);
    const element = document.getElementById(view);
    if (element) {
      // On compense la hauteur du header fixe (environ 80-100px)
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen font-sans text-brand-dark bg-brand-paper relative selection:bg-brand-copper/20 selection:text-brand-main flex flex-col">
      
      <Header currentView={currentView} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {/* Section Accueil */}
        <div id="home">
          <Hero onNavigate={handleNavigate} />
        </div>

        {/* Valeurs (Partie de l'accueil visuellement) */}
        <Values />

        {/* Section Expertise */}
        <div id="expertise">
          <Services onViewMore={() => handleNavigate('companies')} />
        </div>

        {/* Processus (Transition visuelle) */}
        <Process />

        {/* Section Candidats */}
        <div id="candidates">
          <CandidateForm />
        </div>

        {/* Section Entreprises */}
        <div id="companies">
          <ClientForm />
        </div>

        {/* Contact */}
        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;