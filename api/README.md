# API Backend Valensy RH

Backend API Node.js + Express pour gérer l'envoi d'emails via **Resend**.

## Fonctionnalités

✅ Envoi d'emails avec **pièces jointes** (CV candidats)
✅ Formulaire de contact entreprise
✅ Support de Resend API
✅ Prêt pour déploiement sur Cloud Run

## Installation

```bash
cd api
npm install
```

## Configuration

Créez un fichier `.env` avec:

```env
RESEND_API_KEY=re_VsPiqRwu_2RHTYANaKQ7t7rWnzmziESrK
PORT=8081
```

## Démarrage en local

```bash
npm start
```

L'API démarre sur `http://localhost:8081`

## Endpoints

### POST /api/apply
Formulaire candidat avec CV en pièce jointe.

**Content-Type:** `multipart/form-data`

**Paramètres:**
- `nom` (string)
- `prenom` (string)
- `email` (string)
- `phone` (string)
- `message` (string, optionnel)
- `cv` (file, PDF/DOCX)

### POST /api/contact
Formulaire de demande de devis entreprise.

**Content-Type:** `application/json`

**Body:**
```json
{
  "company": "Nom entreprise",
  "contactName": "Jean Dupont",
  "contactPhone": "0600000000",
  "contactEmail": "jean@entreprise.com",
  "pole": "IT",
  "is_rapid": true,
  "volume": 5,
  "delai": "1 mois"
}
```

## Déploiement sur Cloud Run

### 1. Build l'image Docker

```bash
cd api
docker build -t gcr.io/VOTRE_PROJECT_ID/valensy-rh-api .
```

### 2. Push vers Google Container Registry

```bash
docker push gcr.io/VOTRE_PROJECT_ID/valensy-rh-api
```

### 3. Déployer sur Cloud Run

```bash
gcloud run deploy valensy-rh-api \
  --image gcr.io/VOTRE_PROJECT_ID/valensy-rh-api \
  --platform managed \
  --region europe-west1 \
  --allow-unauthenticated \
  --set-env-vars RESEND_API_KEY=re_VsPiqRwu_2RHTYANaKQ7t7rWnzmziESrK
```

### 4. Mettre à jour le frontend

Une fois déployé, copiez l'URL Cloud Run et mettez à jour `config.ts`:

```typescript
export const API_BASE_URL = "https://votre-url-cloud-run.a.run.app";
```

## Configuration Resend

⚠️ **Important**: Remplacez `onboarding@resend.dev` par votre propre domaine vérifié dans `server.js`:

```javascript
from: 'noreply@votredomaine.com'
```

Pour configurer un domaine personnalisé:
1. Allez sur https://resend.com/domains
2. Ajoutez votre domaine
3. Configurez les enregistrements DNS
4. Utilisez `noreply@votredomaine.com` comme expéditeur

## Notes

- Le port par défaut est `8081` en local (8080 est utilisé par le frontend Vite)
- En production sur Cloud Run, le port sera automatiquement `8080`
- Les fichiers CV sont limités à 10 Mo
