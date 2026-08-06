import type { LucideIcon } from 'lucide-react';

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  className?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface NavLink {
  label: string;
  href: string;
}
