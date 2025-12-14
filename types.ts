export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  link: string;
  year: string;
  image?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  WORK = 'work',
  CONTACT = 'contact',
  CHAT = 'chat'
}