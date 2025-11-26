import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Mail, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-brand-main text-white min-h-[70vh] flex items-center relative overflow-hidden">
      {/* Background abstract glow to enhance glass effect */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-copper/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <div className="text-center mb-16">
            <h2 className="font-serif text-5xl mb-6">Nous rencontrer</h2>
            <div className="w-16 h-px bg-brand-copper mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-[2rem] border border-white/10 shadow-lg transition-all hover:bg-white/10">
                <h3 className="font-serif text-2xl text-brand-copper mb-8">Valensy RH</h3>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <MapPin className="text-brand-copper mt-1" />
                        <div>
                            <p className="font-medium">Siège Social</p>
                            <p className="text-white/60 font-light">{CONTACT_INFO.address}</p>
                        </div>
                    </div>
                    {/* Phone removed */}
                    <div className="flex items-start gap-4">
                        <Mail className="text-brand-copper mt-1" />
                        <div>
                            <p className="font-medium">Email</p>
                            <p className="text-white/60 font-light">{CONTACT_INFO.email}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center md:text-left space-y-8">
                <p className="text-xl font-light leading-relaxed">
                    "Chaque rencontre est le début d'une nouvelle histoire. Contactez-nous pour nous parler de la vôtre et définir ensemble vos prochaines étapes."
                </p>
                <a 
                    href={CONTACT_INFO.linkedin} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-main rounded-full font-medium hover:bg-brand-copper hover:text-white transition-colors"
                >
                    <Linkedin size={20} />
                    <span>Suivre Noémie Juliard</span>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;