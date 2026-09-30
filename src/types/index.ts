// src/types/index.ts — Tipos TypeScript globales del proyecto CreatIA

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ReasonItem {
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

export type Locale = 'es' | 'en';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
export type ButtonSize    = 'sm' | 'md' | 'lg';
