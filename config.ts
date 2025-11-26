
// C'est ici que vous mettrez l'URL de votre Cloud Run une fois déployé.
// Pour le développement local, vous pouvez mettre "http://localhost:8081"
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8081";

export const ENDPOINTS = {
  APPLY: `${API_BASE_URL}/api/apply`,     // Pour les candidats (Multipart/Form-data)
  CONTACT: `${API_BASE_URL}/api/contact`, // Pour les entreprises (JSON)
};
