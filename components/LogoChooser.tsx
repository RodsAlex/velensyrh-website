import React, { useState } from 'react';
import { Type, X } from 'lucide-react';

const FONTS = [
  'Playfair Display', 'Cormorant Garamond', 'DM Serif Display', 'Cinzel', 
  'Libre Baskerville', 'Lora', 'Merriweather', 'Montserrat', 'Old Standard TT',
  'Oswald', 'Prata', 'Raleway', 'Roboto Slab', 'Spectral', 'Syne', 'Tenor Sans', 
  'Yeseva One', 'Abril Fatface'
];

interface LogoChooserProps {
  currentFont: string;
  onFontChange: (font: string) => void;
}

const LogoChooser: React.FC<LogoChooserProps> = ({ currentFont, onFontChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-[100] bg-brand-main text-white p-4 rounded-full shadow-soft hover:scale-105 transition-transform"
        title="Studio Typographie"
      >
        <Type size={20} strokeWidth={1.5} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-8 left-8 z-[100] w-80 bg-white/90 backdrop-blur-xl rounded-3xl shadow-soft-lg border border-white/50 flex flex-col max-h-[60vh] animate-in slide-in-from-bottom-10 fade-in duration-500">
      <div className="p-6 border-b border-brand-main/5 flex justify-between items-center">
        <h3 className="font-serif text-brand-main italic text-lg">
         Typographie
        </h3>
        <button onClick={() => setIsOpen(false)} className="text-brand-main/50 hover:text-brand-copper transition-colors">
          <X size={20} />
        </button>
      </div>
      
      <div className="overflow-y-auto p-4 space-y-2">
        {FONTS.map(font => (
          <button
            key={font}
            onClick={() => onFontChange(font)}
            className={`w-full text-left p-4 rounded-xl transition-all flex items-center justify-between group ${
              currentFont === font 
                ? 'bg-brand-paper text-brand-main shadow-sm' 
                : 'hover:bg-brand-paper/50 text-brand-dark/60'
            }`}
          >
            <span style={{ fontFamily: font }} className="text-xl">Valensy RH</span>
            <span className="text-[10px] uppercase tracking-widest opacity-40">
              Aa
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LogoChooser;