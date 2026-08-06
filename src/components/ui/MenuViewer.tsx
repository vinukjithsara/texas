import { useEffect } from 'react';
import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { MenuCategory } from '@/types';
import { cn } from '@/lib/utils';

interface MenuViewerProps {
  categories: MenuCategory[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function MenuViewer({ categories, activeIndex, onClose, onNavigate }: MenuViewerProps) {
  const total = categories.length;
  const isOpen = activeIndex !== null;
  const active = isOpen ? categories[activeIndex] : null;

  const goPrev = () => {
    if (activeIndex === null) return;
    onNavigate((activeIndex - 1 + total) % total);
  };
  const goNext = () => {
    if (activeIndex === null) return;
    onNavigate((activeIndex + 1) % total);
  };

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, activeIndex]);

  const handleDragEnd = (_: PointerEvent | MouseEvent | TouchEvent, info: PanInfo) => {
    if (info.offset.x < -80) goNext();
    else if (info.offset.x > 80) goPrev();
  };

  return (
    <AnimatePresence>
      {active && activeIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-100 flex flex-col bg-ink/96 backdrop-blur-md"
          onClick={onClose}
        >
          <div className="flex items-center justify-between gap-4 p-4 sm:p-6" onClick={(e) => e.stopPropagation()}>
            <div>
              <p className="font-display text-lg font-bold text-cream sm:text-xl">{active.name}</p>
              <p className="text-xs text-muted">
                {activeIndex + 1} / {total}
              </p>
            </div>
            <button
              type="button"
              aria-label="Close menu viewer"
              onClick={onClose}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-cream transition-colors hover:bg-white/10"
            >
              <X size={20} />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center overflow-hidden px-3 pb-4 sm:px-10">
            <button
              type="button"
              aria-label="Previous category"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-cream transition-colors hover:bg-white/10 sm:left-4"
            >
              <ChevronLeft size={22} />
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={active.id}
                src={active.image}
                alt={`${active.name} menu`}
                loading="eager"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={handleDragEnd}
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="max-h-full max-w-full cursor-grab touch-pan-y rounded-2xl object-contain shadow-2xl active:cursor-grabbing"
              />
            </AnimatePresence>

            <button
              type="button"
              aria-label="Next category"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-cream transition-colors hover:bg-white/10 sm:right-4"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div
            className="flex gap-3 overflow-x-auto px-4 pb-6 sm:justify-center sm:px-10"
            onClick={(e) => e.stopPropagation()}
          >
            {categories.map((cat, i) => (
              <button
                key={cat.id}
                type="button"
                aria-label={`Jump to ${cat.name}`}
                onClick={() => onNavigate(i)}
                className={cn(
                  'relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-300 sm:h-16 sm:w-16',
                  i === activeIndex
                    ? 'border-ember-500 opacity-100'
                    : 'border-white/10 opacity-50 hover:opacity-90'
                )}
              >
                <img src={cat.image} alt={cat.name} loading="lazy" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
