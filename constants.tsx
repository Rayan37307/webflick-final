import React from 'react';
import { Monitor, ShoppingBag, Code, Zap, Layers, BarChart3, Aperture } from 'lucide-react';
import { ServiceItem, NavItem } from './types';

export const APP_NAME = "WebFlick";
export const MISSION_STATEMENT = "Turning great ideas into digital realities through agile design and robust development.";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Portfolio', href: '#portfolio' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'custom-dev',
    title: 'Custom Development',
    description: 'Bespoke Solutions for Scalability & Innovation. We build robust React and Vue applications tailored to your unique business needs.',
    ctaText: 'Build Your Dream App',
    icon: <Code className="w-8 h-8 text-neon-cyan" />,
    features: ['React / Next.js', 'Complex Integrations', 'High Performance']
  },
  {
    id: 'shopify-dev',
    title: 'Shopify Development',
    description: 'E-commerce Powerhouse focusing on Conversion & Sales. Turn visitors into loyal customers with a high-performance store.',
    ctaText: 'Launch My Online Store',
    icon: <ShoppingBag className="w-8 h-8 text-neon-green" />,
    features: ['Custom Themes', 'App Development', 'Conversion Optimization']
  },
  {
    id: 'wordpress-dev',
    title: 'WordPress Development',
    description: 'Flexible & Reliable Content Management & SEO. Marketing sites that are easy to manage and designed to rank.',
    ctaText: 'Upgrade My Website',
    icon: <Monitor className="w-8 h-8 text-neon-purple" />,
    features: ['Custom Blocks', 'Speed Optimization', 'SEO First Structure']
  }
];

export const WHY_US_POINTS = [
  {
    title: "Design-First Approach",
    description: "We don't just write code; we craft experiences. Aesthetics and functionality merge seamlessly.",
    icon: <Aperture className="w-6 h-6" />
  },
  {
    title: "Transparent Process",
    description: "No black boxes. You get full visibility into our agile development cycle from day one.",
    icon: <Layers className="w-6 h-6" />
  },
  {
    title: "Post-Launch Support",
    description: "We don't disappear after launch. We offer ongoing optimization to ensure continuous growth.",
    icon: <BarChart3 className="w-6 h-6" />
  }
];

export const HERO_COPY = {
  headline: "Stop Dreaming, Start Selling: Design, Code, Grow.",
  subheadline: "WebFlick is the creative agency for custom e-commerce and marketing solutions, merging stunning design with robust technology.",
  primaryCta: "Start Your Project",
  secondaryCta: "View Our Work"
};