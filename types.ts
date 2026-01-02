import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  icon: React.ReactNode;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum ThemeColors {
  PRIMARY = 'sapphire-900',
  ACCENT_CYAN = 'neon-cyan',
  ACCENT_GREEN = 'neon-green'
}