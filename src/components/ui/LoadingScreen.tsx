import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import logoMark from '@/assets/logo.jpg';
import { SITE } from '@/data/site';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => setVisible(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = '';
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-200 flex flex-col items-center justify-center gap-6 bg-ink"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex h-20 w-20 items-center justify-center"
          >
            <span className="absolute inset-0 animate-spin rounded-full border-2 border-white/10 border-t-ember-500" />
            <img
              src={logoMark}
              alt={`${SITE.name} logo`}
              className="h-14 w-14 rounded-full object-cover"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-muted"
          >
            {SITE.name}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
