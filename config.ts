
// URL de l'API Cloud Run
// Pour le développement local, définissez VITE_API_BASE_URL="http://localhost:8081" dans .env.local
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://valensyrh-332851092224.europe-west9.run.app";

export const ENDPOINTS = {
  APPLY: `${API_BASE_URL}/api/apply`,     // Pour les candidats (Multipart/Form-data)
  CONTACT: `${API_BASE_URL}/api/contact`, // Pour les entreprises (JSON)
};
