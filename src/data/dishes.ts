import type { Dish } from '@/types';

// Demo menu — swap image, name, description and price for the real menu.
export const DISHES: Dish[] = [
  {
    id: 'bbq-burger',
    name: 'Smoky Texas BBQ Burger',
    description: 'Charred beef patty, smoked cheddar, crispy onions, house BBQ glaze.',
    price: '$12.90',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    tag: 'Bestseller',
  },
  {
    id: 'ribeye-steak',
    name: 'Grilled Ribeye Steak',
    description: 'Char-grilled ribeye, rosemary butter, roasted garlic mash.',
    price: '$24.50',
    image:
      'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
    tag: "Chef's Pick",
  },
  {
    id: 'wood-fired-pizza',
    name: 'Wood-Fired Pepperoni Pizza',
    description: 'Slow-fermented dough, San Marzano sauce, double pepperoni.',
    price: '$14.00',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'creamy-pasta',
    name: 'Creamy Garlic Pasta',
    description: 'Hand-rolled fettuccine, roasted garlic cream, aged parmesan.',
    price: '$13.20',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'harvest-salad',
    name: 'Fresh Harvest Salad',
    description: 'Seasonal greens, cherry tomato, feta, citrus vinaigrette.',
    price: '$9.50',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    tag: 'Light',
  },
  {
    id: 'molten-dessert',
    name: 'Molten Chocolate Dessert',
    description: 'Warm chocolate lava cake, vanilla bean ice cream.',
    price: '$8.00',
    image:
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80',
  },
];
