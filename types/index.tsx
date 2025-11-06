export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  logo?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  description: string;
  gpa?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
  icon: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}