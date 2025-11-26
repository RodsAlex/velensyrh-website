
import React, { useState, useRef } from 'react';
import { Upload, CheckCircle, Loader2, FileText, X, AlertCircle } from 'lucide-react';
import { ENDPOINTS } from '../config';

const CandidateForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Simulation si l'URL n'est pas encore configurée (contient "votre-backend")
    if (ENDPOINTS.APPLY.includes("votre-backend")) {
        console.warn("Backend URL non configurée. Simulation succès.");
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setSelectedFile(null);
            form.reset();
        }, 1500);
        return;
    }

    try {
      const response = await fetch(ENDPOINTS.APPLY, {
        method: 'POST',
        body: formData, // Le navigateur gère automatiquement le Content-Type multipart/form-data
      });

      if (response.ok) {
        setIsSuccess(true);
        setSelectedFile(null);
        form.reset();
      } else {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Erreur lors de l'envoi au serveur.");
      }
    } catch (err) {
      setError("Une erreur est survenue. Le serveur est peut-être inaccessible momentanément.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Votre backend Go pourra gérer de gros fichiers, mais on garde une limite UI pour l'UX
      if (file.size > 10 * 1024 * 1024) {
        alert("Le fichier est trop volumineux (Max 10Mo).");
        return;
      }
      setSelectedFile(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  if (isSuccess) {
    return (
      <section className="pt-32 pb-24 min-h-screen bg-brand-paper flex items-center justify-center">
        <div className="max-w-3xl w-full mx-auto px-6">
          <div className="bg-white rounded-[2rem] p-12 shadow-soft-lg text-center animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-3xl text-brand-main mb-4">Candidature envoyée !</h2>
            <p className="text-brand-dark/60 mb-8 text-lg">
              Merci de l'intérêt que vous portez à Valensy RH. Votre CV a été transmis à notre équipe de consultants.
            </p>
            <button 
              onClick={() => { setIsSuccess(false); }}
              className="px-8 py-3 bg-brand-paper text-brand-main rounded-full hover:bg-brand-copper hover:text-white transition-colors font-medium border border-brand-main/10"
            >
              Envoyer une autre candidature
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-24 min-h-screen bg-brand-paper">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-brand-copper uppercase tracking-widest text-xs font-bold mb-4 block">Espace Candidat</span>
          <h1 className="font-serif text-4xl md:text-5xl text-brand-main mb-6">Postuler</h1>
          <p className="text-brand-dark/60">Rejoignez notre vivier de talents ou répondez à une offre spécifique.</p>
        </div>

        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-soft-lg relative overflow-hidden">
            {/* Barre de progression décorative en haut */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-main via-brand-copper to-brand-main opacity-20"></div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="nom" className="text-sm font-medium text-brand-main">Nom</label>
                <input required name="nom" id="nom" type="text" className="w-full px-4 py-3 bg-brand-paper border border-brand-main/10 rounded-xl focus:outline-none focus:border-brand-copper focus:ring-1 focus:ring-brand-copper transition-all" placeholder="Votre nom" />
              </div>
              <div className="space-y-2">
                <label htmlFor="prenom" className="text-sm font-medium text-brand-main">Prénom</label>
                <input required name="prenom" id="prenom" type="text" className="w-full px-4 py-3 bg-brand-paper border border-brand-main/10 rounded-xl focus:outline-none focus:border-brand-copper focus:ring-1 focus:ring-brand-copper transition-all" placeholder="Votre prénom" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-brand-main">Email</label>
                <input required name="email" id="email" type="email" className="w-full px-4 py-3 bg-brand-paper border border-brand-main/10 rounded-xl focus:outline-none focus:border-brand-copper focus:ring-1 focus:ring-brand-copper transition-all" placeholder="exemple@email.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-brand-main">Téléphone</label>
                <input required name="phone" id="phone" type="tel" className="w-full px-4 py-3 bg-brand-paper border border-brand-main/10 rounded-xl focus:outline-none focus:border-brand-copper focus:ring-1 focus:ring-brand-copper transition-all" placeholder="06 00 00 00 00" />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium text-brand-main">CV (PDF, DOCX)</label>
              <input 
                type="file" 
                name="cv" 
                required
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="hidden" 
              />
              
              <div 
                onClick={triggerFileInput}
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer group ${
                    selectedFile 
                    ? 'border-brand-copper/50 bg-brand-copper/5' 
                    : 'border-brand-main/20 hover:bg-brand-paper hover:border-brand-copper'
                }`}
              >
                {selectedFile ? (
                    <div className="flex items-center justify-center gap-3 text-brand-main animate-in fade-in slide-in-from-bottom-2">
                        <FileText className="text-brand-copper" />
                        <span className="font-medium">{selectedFile.name}</span>
                        <button 
                            onClick={removeFile}
                            className="p-1 hover:bg-red-100 hover:text-red-500 rounded-full transition-colors"
                            type="button"
                        >
                            <X size={16} />
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="w-12 h-12 bg-brand-main/5 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-copper group-hover:scale-110 transition-transform duration-300">
                        <Upload size={20} />
                        </div>
                        <p className="text-sm text-brand-dark/60 group-hover:text-brand-main transition-colors">
                            Cliquez pour déposer votre CV ou glissez-le ici
                        </p>
                    </>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-brand-main">Message optionnel</label>
              <textarea name="message" id="message" rows={4} className="w-full px-4 py-3 bg-brand-paper border border-brand-main/10 rounded-xl focus:outline-none focus:border-brand-copper focus:ring-1 focus:ring-brand-copper transition-all" placeholder="Présentez-vous brièvement..."></textarea>
            </div>

            {error && (
                <div className="p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-2 text-sm">
                    <AlertCircle size={18} />
                    {error}
                </div>
            )}

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-brand-main text-white rounded-full hover:bg-brand-copper transition-colors shadow-lg font-medium flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                    <Loader2 className="animate-spin" /> Envoi sécurisé vers nos serveurs...
                </>
              ) : (
                "Envoyer ma candidature"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CandidateForm;
