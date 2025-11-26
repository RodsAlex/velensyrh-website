# 🚀 Démarrage Rapide - Valensy RH

## Configuration Resend ✅

Votre projet est maintenant configuré avec **Resend** pour l'envoi d'emails avec support des **pièces jointes** !

### Clé API installée
```
re_VsPiqRwu_2RHTYANaKQ7t7rWnzmziESrK
```

## Lancer le projet en local

### Option 1 : Tout démarrer en une commande

```bash
npm run dev:all
```

Cela lancera :
- 🎨 Frontend sur `http://localhost:8080`
- 🔌 API Backend sur `http://localhost:8081`

### Option 2 : Démarrer séparément

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
npm run dev:api
```

## Test des fonctionnalités

### ✅ Formulaire Candidat (avec CV)
1. Allez sur `http://localhost:8080`
2. Naviguez vers le formulaire candidat
3. Remplissez le formulaire
4. **Ajoutez un CV** (PDF/DOCX)
5. Envoyez

→ Email avec pièce jointe envoyé à `noemiejuliard@valensyrh.com` ✉️

### ✅ Formulaire Entreprise (demande de devis)
1. Naviguez vers le formulaire entreprise
2. Remplissez le formulaire
3. Envoyez

→ Email simple envoyé à `noemiejuliard@valensyrh.com` ✉️

## ⚠️ Configuration importante pour la production

### 1. Configurer un domaine personnalisé sur Resend

Actuellement, l'expéditeur est `onboarding@resend.dev` (domaine de test).

Pour la production :
1. Allez sur https://resend.com/domains
2. Ajoutez votre domaine (ex: `valensyrh.com`)
3. Configurez les DNS (SPF, DKIM)
4. Modifiez `api/server.js` ligne 38 et 70 :
   ```javascript
   from: 'noreply@valensyrh.com'
   ```

### 2. Déployer sur Cloud Run

Voir le guide complet dans `api/README.md`

**Commandes rapides :**

```bash
# 1. Build
cd api
docker build -t gcr.io/VOTRE_PROJECT_ID/valensy-rh-api .

# 2. Push
docker push gcr.io/VOTRE_PROJECT_ID/valensy-rh-api

# 3. Deploy
gcloud run deploy valensy-rh-api \
  --image gcr.io/VOTRE_PROJECT_ID/valensy-rh-api \
  --platform managed \
  --region europe-west1 \
  --allow-unauthenticated \
  --set-env-vars RESEND_API_KEY=re_VsPiqRwu_2RHTYANaKQ7t7rWnzmziESrK
```

### 3. Mettre à jour le frontend

Une fois déployé, mettez à jour `config.ts` :

```typescript
export const API_BASE_URL = "https://votre-url-cloud-run.run.app";
```

## Structure du projet

```
valensy-rh/
├── api/                    # Backend Express + Resend
│   ├── server.js          # Serveur avec endpoints
│   ├── .env              # Clé API Resend
│   ├── Dockerfile        # Pour Cloud Run
│   └── README.md         # Doc API
├── components/           # Composants React
│   ├── CandidateForm.tsx # Formulaire avec CV
│   └── ClientForm.tsx    # Formulaire entreprise
├── config.ts            # Configuration API
└── vite.config.ts      # Config Vite (port 8080)
```

## Emails envoyés

Tous les emails sont envoyés à :
📧 **noemiejuliard@valensyrh.com**

## Resend - Limites gratuites

- ✅ **3 000 emails/mois gratuits**
- ✅ Support des pièces jointes
- ✅ Excellente délivrabilité

## Besoin d'aide ?

- 📖 Doc Resend : https://resend.com/docs
- 📖 Doc API : `api/README.md`
- 🐛 Issues : https://github.com/resendlabs/resend-node
