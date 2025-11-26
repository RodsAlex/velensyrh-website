
import React, { useState } from 'react';
import { Calendar, Check, Loader2, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { SERVICES } from '../constants';
import { ENDPOINTS } from '../config';

const ClientForm: React.FC = () => {
  const [isRapid, setIsRapid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAgendaClick = () => {
    window.open('https://calendly.com/noemiejuliard-valensyrh/30min', '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Conversion FormData vers JSON
    const data = Object.fromEntries(formData.entries());
    const payload = {
        ...data,
        is_rapid: isRapid,
        // On ajoute le volume et delai uniquement si rapide, sinon valeurs par défaut
        volume: isRapid ? data.volume : null,
        delai: isRapid ? data.delai : null
    };

    // Simulation si l'URL n'est pas encore configurée
    if (ENDPOINTS.CONTACT.includes("votre-backend")) {
        console.warn("Backend URL non configurée. Simulation succès.");
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
        return;
    }

    try {
        const response = await fetch(ENDPOINTS.CONTACT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            setIsSuccess(true);
        } else {
            throw new Error("Erreur serveur");
        }
    } catch (err) {
        setError("Une erreur est survenue lors de l'envoi. Veuillez nous contacter directement par téléphone ou email.");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-32 pb-24 min-h-screen bg-brand-paper">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        
        {/* Column 1: Info & Calendly */}
        <div className="flex flex-col justify-center">
          <span className="text-brand-copper uppercase tracking-widest text-xs font-bold mb-4 block">Espace Entreprise</span>
          <h1 className="font-serif text-4xl md:text-5xl text-brand-main mb-6 leading-tight">
            Recrutez vos <br/> futurs talents.
          </h1>
          <p className="text-brand-dark/60 mb-12 text-lg leading-relaxed">
            Une approche conseil sur-mesure pour vos besoins stratégiques. Décrivez votre besoin ou réservez directement un créneau.
          </p>

          {/* Agenda Card */}
          <div className="bg-white p-8 rounded-2xl shadow-soft border border-brand-main/5 mb-8 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-brand-copper/10 text-brand-copper rounded-full flex items-center justify-center shrink-0">
                <Calendar size={24} />
              </div>
              <div>
                <h3 className="font-serif text-xl text-brand-main">Agenda en ligne</h3>
                <p className="text-sm text-brand-dark/60">Réservez un échange de 30 min avec un consultant.</p>
              </div>
            </div>
            <button 
              onClick={handleAgendaClick}
              className="w-full py-3 bg-brand-copper text-white rounded-full hover:bg-brand-main transition-colors font-medium flex items-center justify-center gap-2 group"
            >
              <span>Accéder au calendrier</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="space-y-4 pl-2 border-l-2 border-brand-main/5">
            <div className="flex items-center gap-3 text-brand-dark/70">
              <Check size={18} className="text-brand-copper" />
              <span>Devis personnalisé sous 24h</span>
            </div>
            <div className="flex items-center gap-3 text-brand-dark/70">
              <Check size={18} className="text-brand-copper" />
              <span>Sourcing confidentiel et approche directe</span>
            </div>
            <div className="flex items-center gap-3 text-brand-dark/70">
              <Check size={18} className="text-brand-copper" />
              <span>Garantie de remplacement incluse</span>
            </div>
          </div>
        </div>

        {/* Column 2: Form */}
        <div className="relative">
            {isSuccess ? (
                <div className="bg-white rounded-[2rem] p-12 shadow-soft-lg text-center h-full flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500 border border-brand-main/5">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle size={40} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-2xl text-brand-main mb-4">Demande transmise !</h3>
                    <p className="text-brand-dark/60 mb-8">
                        Nous avons bien reçu votre demande de devis. Un consultant expert de votre secteur vous recontactera dans la journée.
                    </p>
                    <button 
                        onClick={() => setIsSuccess(false)}
                        className="text-sm text-brand-copper hover:text-brand-main underline underline-offset-4 font-medium"
                    >
                        Envoyer une nouvelle demande
                    </button>
                </div>
            ) : (
                <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-soft-lg h-fit border border-brand-main/5 relative overflow-hidden">
                    {/* Form Header Decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-copper/5 rounded-bl-[100px] -z-0 pointer-events-none"></div>

                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <h3 className="font-serif text-2xl text-brand-main mb-6">Demander un devis</h3>
                        
                        <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-brand-main">Entreprise</label>
                        <input required name="company" id="company" type="text" className="w-full px-4 py-3 bg-brand-paper border border-brand-main/10 rounded-xl focus:outline-none focus:border-brand-copper focus:ring-1 focus:ring-brand-copper transition-all" placeholder="Nom de votre société" />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="contactName" className="text-sm font-medium text-brand-main">Contact</label>
                            <input required name="contactName" id="contactName" type="text" className="w-full px-4 py-3 bg-brand-paper border border-brand-main/10 rounded-xl focus:outline-none focus:border-brand-copper focus:ring-1 focus:ring-brand-copper transition-all" placeholder="Nom complet" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="contactPhone" className="text-sm font-medium text-brand-main">Téléphone</label>
                            <input required name="contactPhone" id="contactPhone" type="tel" className="w-full px-4 py-3 bg-brand-paper border border-brand-main/10 rounded-xl focus:outline-none focus:border-brand-copper focus:ring-1 focus:ring-brand-copper transition-all" placeholder="Direct" />
                        </div>
                        </div>

                        <div className="space-y-2">
                        <label htmlFor="contactEmail" className="text-sm font-medium text-brand-main">Email</label>
                        <input required name="contactEmail" id="contactEmail" type="email" className="w-full px-4 py-3 bg-brand-paper border border-brand-main/10 rounded-xl focus:outline-none focus:border-brand-copper focus:ring-1 focus:ring-brand-copper transition-all" placeholder="pro@entreprise.com" />
                        </div>

                        <div className="space-y-2">
                        <label htmlFor="pole" className="text-sm font-medium text-brand-main">Pôle concerné</label>
                        <select name="pole" id="pole" className="w-full px-4 py-3 bg-brand-paper border border-brand-main/10 rounded-xl focus:outline-none focus:border-brand-copper focus:ring-1 focus:ring-brand-copper transition-all text-brand-dark/70">
                            <option value="">Sélectionner un pôle...</option>
                            {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                        </select>
                        </div>

                        <div className="flex items-center justify-between py-2 bg-brand-paper/50 px-4 rounded-xl border border-brand-main/5">
                        <label className="text-sm font-medium text-brand-main cursor-pointer" onClick={() => setIsRapid(!isRapid)}>Option Devis Rapide</label>
                        <button 
                            type="button"
                            onClick={() => setIsRapid(!isRapid)}
                            className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${isRapid ? 'bg-brand-copper' : 'bg-brand-dark/20'}`}
                            aria-label="Activer le devis rapide"
                        >
                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 shadow-sm ${isRapid ? 'left-7' : 'left-1'}`}></div>
                        </button>
                        </div>

                        {isRapid && (
                        <div className="p-4 bg-brand-paper rounded-xl text-sm text-brand-dark/70 animate-in fade-in slide-in-from-top-2 border border-brand-main/5">
                            <p className="mb-3 font-medium text-brand-main">Détails du volume :</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs uppercase tracking-wide text-brand-dark/50">Postes</label>
                                    <input name="volume" type="number" min="1" className="w-full px-3 py-2 bg-white border border-brand-main/10 rounded-lg focus:outline-none focus:border-brand-copper" placeholder="1" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs uppercase tracking-wide text-brand-dark/50">Délai</label>
                                    <select name="delai" className="w-full px-3 py-2 bg-white border border-brand-main/10 rounded-lg focus:outline-none focus:border-brand-copper text-xs">
                                        <option>Urgent</option>
                                        <option>1 mois</option>
                                        <option>3 mois+</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        )}

                        {error && (
                            <div className="p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-2 text-sm">
                                <AlertCircle size={18} />
                                {error}
                            </div>
                        )}

                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-brand-main text-white rounded-full hover:bg-brand-copper transition-colors shadow-lg font-medium mt-4 flex items-center justify-center gap-2 disabled:opacity-70"
                        >
                         {isSubmitting ? (
                            <>
                                <Loader2 className="animate-spin" /> Traitement sécurisé...
                            </>
                        ) : (
                            "Envoyer ma demande"
                        )}
                        </button>
                    </form>
                </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default ClientForm;
