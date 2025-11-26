import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081;

// Configuration Resend
const resend = new Resend(process.env.RESEND_API_KEY || 're_VsPiqRwu_2RHTYANaKQ7t7rWnzmziESrK');

// Email de destination
const DESTINATION_EMAIL = 'noemiejuliard@valensyrh.com';

// Middleware
app.use(cors());
app.use(express.json());

// Configuration Multer pour gérer les fichiers uploadés (en mémoire)
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 } // 10 Mo max
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'Valensy RH API' });
});

// Endpoint pour les candidats (avec CV en pièce jointe)
app.post('/api/apply', upload.single('cv'), async (req, res) => {
  try {
    const { nom, prenom, email, phone, message } = req.body;
    const cv = req.file;

    if (!cv) {
      return res.status(400).json({ error: 'CV requis' });
    }

    // Préparer l'email avec pièce jointe
    const emailData = {
      from: 'onboarding@resend.dev', // Remplacer par votre domaine vérifié
      to: DESTINATION_EMAIL,
      subject: `Nouvelle candidature - ${prenom} ${nom}`,
      html: `
        <h2>Nouvelle candidature spontanée</h2>
        <p><strong>Nom:</strong> ${nom}</p>
        <p><strong>Prénom:</strong> ${prenom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        ${message ? `<p><strong>Message:</strong></p><p>${message}</p>` : ''}
        <p><em>CV en pièce jointe</em></p>
      `,
      attachments: [
        {
          filename: cv.originalname,
          content: cv.buffer,
        }
      ]
    };

    const result = await resend.emails.send(emailData);

    console.log('Email candidat envoyé:', result);
    res.json({ success: true, id: result.id });

  } catch (error) {
    console.error('Erreur envoi email candidat:', error);
    res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email' });
  }
});

// Endpoint pour les entreprises (formulaire de contact)
app.post('/api/contact', async (req, res) => {
  try {
    const { company, contactName, contactPhone, contactEmail, pole, is_rapid, volume, delai } = req.body;

    // Préparer l'email
    const emailData = {
      from: 'onboarding@resend.dev', // Remplacer par votre domaine vérifié
      to: DESTINATION_EMAIL,
      subject: `Demande de devis - ${company}`,
      html: `
        <h2>Nouvelle demande de devis</h2>
        <p><strong>Entreprise:</strong> ${company}</p>
        <p><strong>Contact:</strong> ${contactName}</p>
        <p><strong>Téléphone:</strong> ${contactPhone}</p>
        <p><strong>Email:</strong> ${contactEmail}</p>
        ${pole ? `<p><strong>Pôle concerné:</strong> ${pole}</p>` : ''}
        ${is_rapid ? `
          <h3>Devis Rapide ⚡</h3>
          <p><strong>Volume:</strong> ${volume} poste(s)</p>
          <p><strong>Délai:</strong> ${delai}</p>
        ` : ''}
      `
    };

    const result = await resend.emails.send(emailData);

    console.log('Email entreprise envoyé:', result);
    res.json({ success: true, id: result.id });

  } catch (error) {
    console.error('Erreur envoi email entreprise:', error);
    res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 API Valensy RH démarrée sur le port ${PORT}`);
  console.log(`📧 Resend configuré avec la clé: ${process.env.RESEND_API_KEY ? '✓ Variable d\'environnement' : '✓ Clé par défaut'}`);
});
