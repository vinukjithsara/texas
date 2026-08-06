import { Leaf, Timer, Users, ChefHat } from 'lucide-react';
import type { Feature } from '@/types';

export const FEATURES: Feature[] = [
  {
    id: 'fresh',
    title: 'Fresh Ingredients',
    description: 'Locally sourced produce and premium cuts, delivered daily.',
    icon: Leaf,
  },
  {
    id: 'fast',
    title: 'Fast Service',
    description: 'From kitchen to table, quickly — without cutting corners.',
    icon: Timer,
  },
  {
    id: 'family',
    title: 'Family Friendly',
    description: 'A warm, welcoming space designed for every generation.',
    icon: Users,
  },
  {
    id: 'chefs',
    title: 'Experienced Chefs',
    description: 'Decades of combined craft behind every plate we serve.',
    icon: ChefHat,
  },
];
