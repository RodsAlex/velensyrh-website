import React from 'react';
import { ViewType } from './types';
import { 
  Users, 
  Target, 
  ShieldCheck, 
  Gem, 
  Search, 
  Briefcase, 
  TrendingUp, 
  UserCheck,
  Factory,
  Building2,
  ShoppingCart,
  Scale,
  Monitor,
  HeartHandshake,
  Eye,
  Zap
} from 'lucide-react';

export const CONTACT_INFO = {
  address: "110 Rue de Fontenay, 94300 Vincennes",
  email: "noemiejuliard@valensyrh.com",
  linkedin: "https://www.linkedin.com/in/noémie-juliard/"
};

export const NAV_ITEMS: { id: ViewType; label: string }[] = [
  { id: 'home', label: 'Accueil' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'candidates', label: 'Candidats' },
  { id: 'companies', label: 'Entreprises' },
];

export const VALUES = [
  {
    title: "Humain",
    description: "Au-delà des CV, nous rencontrons des personnalités. L'empathie est notre premier outil de travail.",
    icon: <HeartHandshake />
  },
  {
    title: "Transparence",
    description: "Une communication claire avec candidats et clients à chaque étape.",
    icon: <Eye />
  },
  {
    title: "Réactivité",
    description: "Le marché n'attend pas. Nous nous engageons sur des délais courts sans sacrifier la qualité.",
    icon: <Zap />
  },
  {
    title: "Proximité",
    description: "Un accompagnement sur-mesure et disponible. Nous sommes partenaires, pas justes prestataires.",
    icon: <Users />
  }
];

export const SERVICES = [
  {
    id: 'industrie',
    title: "Industrie – Automobile",
    description: "Recrutement d'experts techniques, ingénieurs, responsables de production et directeurs de site industriel.",
    icon: <Factory />
  },
  {
    id: 'support',
    title: "Fonctions Support",
    description: "Chasse de talents pour les métiers RH, Finance, Juridique, Achats et Assistanat de Direction.",
    icon: <Building2 />
  },
  {
    id: 'retail',
    title: "Grande Distribution",
    description: "Experts du retail pour vos recrutements de directeurs de magasins, chefs de secteur et fonctions sièges.",
    icon: <ShoppingCart />
  },
  {
    id: 'legal',
    title: "Legal",
    description: "Accompagnement des cabinets d'avocats, notaires et directions juridiques dans la recherche de leurs collaborateurs.",
    icon: <Scale />
  },
  {
    id: 'it',
    title: "IT & Digital",
    description: "Recrutement de profils Tech, Data, DSI et chefs de projets pour accompagner votre transformation numérique.",
    icon: <Monitor />
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Immersion",
    description: "Nous plongeons au cœur de votre entreprise pour comprendre votre ADN, vos enjeux et votre vision."
  },
  {
    number: "02",
    title: "Sourcing Ciblé",
    description: "Identification méticuleuse des talents via notre réseau et approche directe multicanale."
  },
  {
    number: "03",
    title: "Évaluation 360°",
    description: "Entretiens approfondis, tests de personnalité et prises de références pour valider le savoir-être."
  },
  {
    number: "04",
    title: "Intégration",
    description: "Accompagnement durant la période d'essai pour garantir une prise de poste réussie et pérenne."
  }
];