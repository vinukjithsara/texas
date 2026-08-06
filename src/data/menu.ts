import type { MenuCategory } from '@/types';

// Demo menu categories — swap `image` for a photo of each real printed
// menu page when they're ready. Everything else (cards, viewer, thumbnails)
// works unchanged.
export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'appetizers',
    name: 'Appetizers',
    description: 'Small plates to start the night right.',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'burgers',
    name: 'Burgers',
    description: 'Charred patties, toasted buns, bold sauces.',
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'bbq',
    name: 'BBQ',
    description: 'Low and slow, straight off the grill.',
    image:
      'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'pizza',
    name: 'Pizza',
    description: 'Wood-fired, stone-baked, always fresh.',
    image:
      'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'pasta',
    name: 'Pasta',
    description: 'Hand-tossed classics made to order.',
    image:
      'https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet finishes worth saving room for.',
    image:
      'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'coffee',
    name: 'Coffee',
    description: 'Freshly brewed, roasted for depth.',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'beverages',
    name: 'Beverages',
    description: 'Refreshers, mocktails and cold pours.',
    image:
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80',
  },
];
