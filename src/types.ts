export type ProjectCategory = 'ALL' | 'AI' | 'FRONTEND' | 'FULL STACK' | 'EXPERIMENTS';

export interface Project {
  id: string;
  number: string;
  name: string;
  tagline: string;
  category: 'AI' | 'FRONTEND' | 'FULL STACK' | 'EXPERIMENTS';
  description: string;
  longDescription: string;
  technologies: string[];
  keyFeatures: string[];
  architectureOverview: string;
  githubUrl: string;
  liveUrl?: string;
  accentColor: string;
  imageTheme: 'crime-ai' | 'focus-flow' | 'health-ai' | 'unisync' | 'neuro-canvas';
}

export interface SkillItem {
  name: string;
  highlight?: string;
  iconName?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface TimelineItem {
  year: string;
  title: string;
  role: string;
  description: string;
  details: string[];
  status?: 'past' | 'present' | 'current';
  category?: string;
  isKeyMilestone?: boolean;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  icon: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  output: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: string;
  description: string;
  badge: string;
}

export interface QuickStat {
  label: string;
  value: string;
  subtext: string;
}
