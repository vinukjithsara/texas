import type { GalleryImage } from '@/types';

import texas1 from '@/assets/texas1.webp';
import texas2 from '@/assets/texas2.webp';
import texas3 from '@/assets/texas3.webp';
import texas4 from '@/assets/texas4.webp';
import texas5 from '@/assets/texas5.webp';
import texas6 from '@/assets/texas6.webp';
import texas7 from '@/assets/texas7.webp';

// Real photos from TEXAS Restaurant, Maharagama.
// texas4 is the featured centerpiece — kept large and centered in the grid.
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'texas-1',
    src: texas1,
    alt: 'Grilled platter with sides at TEXAS Restaurant',
    className: 'lg:[grid-column:1] lg:[grid-row:1/3]',
  },
  {
    id: 'texas-2',
    src: texas2,
    alt: 'Fried noodles topped with a fried egg',
    className: 'lg:[grid-column:4] lg:[grid-row:1/3]',
  },
  {
    id: 'texas-3',
    src: texas3,
    alt: 'Nasi goreng special served table-side',
    className: 'lg:[grid-column:1] lg:[grid-row:3]',
  },
  {
    id: 'texas-4',
    src: texas4,
    alt: "TEXAS Restaurant's signature bottle wall",
    className: 'col-span-2 row-span-2 lg:[grid-column:2/4] lg:[grid-row:1/3]',
  },
  {
    id: 'texas-5',
    src: texas5,
    alt: 'Live band performing at TEXAS Restaurant',
    className: 'lg:[grid-column:2] lg:[grid-row:3]',
  },
  {
    id: 'texas-6',
    src: texas6,
    alt: 'Fried rice served on the outdoor patio',
    className: 'lg:[grid-column:3] lg:[grid-row:3]',
  },
  {
    id: 'texas-7',
    src: texas7,
    alt: 'Illuminated TEXAS Restaurant signage at night',
    className: 'lg:[grid-column:4] lg:[grid-row:3]',
  },
];
