/**
 * Central place for all editable business info.
 * Replace these values with the real restaurant's details before going live —
 * nothing else in the codebase needs to change.
 */

// Used to resolve the live Google Map + "Get Directions" link to the real
// business listing. If the owner confirms an exact street address, swap the
// query below for that address and it will still work unchanged.
const MAP_QUERY = 'TEXAS Restaurant, Maharagama, Sri Lanka';

export const SITE = {
  name: 'TEXAS Restaurant',
  shortName: 'TEXAS',
  tagline: 'Smoked. Grilled. Unforgettable.',
  description:
    'Bold, fire-kissed flavors served in the heart of Maharagama — where every plate is cooked low, slow, and loud.',

  contact: {
    // Demo values — swap for the restaurant's real line & inbox.
    phone: '+94 76 123 4567',
    phoneDisplay: '076 123 4567',
    email: 'hello@texasrestaurant.lk',
    whatsapp: '94761234567',
  },

  location: {
    addressLines: ['20 Elhena Road', 'Maharagama 10280, Sri Lanka'],
    mapQuery: MAP_QUERY,
    mapEmbedSrc: `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`,
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAP_QUERY)}`,
  },

  hours: [
    { day: 'Monday – Thursday', time: '11:00 AM – 10:30 PM' },
    { day: 'Friday – Saturday', time: '11:00 AM – 11:30 PM' },
    { day: 'Sunday', time: '12:00 PM – 10:00 PM' },
  ],

  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    tiktok: 'https://tiktok.com',
    twitter: 'https://x.com',
  },
} as const;
