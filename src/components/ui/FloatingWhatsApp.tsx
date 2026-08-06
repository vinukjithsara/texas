import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { SITE, getWhatsAppLink } from '@/data/site';

const href = getWhatsAppLink(`Hi ${SITE.name}, I'd like to make a reservation.`);

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, scale: 0.4, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.7, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-ink shadow-lg shadow-black/30 sm:bottom-8 sm:right-8"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-wa-pulse" aria-hidden />
      <MessageCircle size={26} className="relative" strokeWidth={2.25} />

      <motion.span
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 8 }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg border border-white/10 bg-surface px-3 py-1.5 text-xs font-semibold text-cream shadow-lg sm:block"
      >
        Chat with us
      </motion.span>
    </motion.a>
  );
}
