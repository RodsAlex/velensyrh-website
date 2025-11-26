export type ViewType = 'home' | 'expertise' | 'candidates' | 'companies' | 'contact';

export interface NavItem {
  id: ViewType;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Value {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}