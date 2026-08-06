import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GalleryItem from '@/components/ui/GalleryItem';
import { GALLERY_IMAGES } from '@/data/gallery';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));
  const showNext = () => setActiveIndex((i) => (i === null ? null : (i + 1) % GALLERY_IMAGES.length));

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeIndex]);

  const active = activeIndex !== null ? GALLERY_IMAGES[activeIndex] : null;

  return (
    <section id="gallery" className="relative bg-ink py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="A Taste of the Atmosphere"
          description="Step inside — the food, the fire, and the room it all happens in."
        />

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY_IMAGES.map((image, i) => (
            <GalleryItem key={image.id} image={image} delay={(i % 4) * 0.08} onClick={() => setActiveIndex(i)} />
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm sm:p-10"
            onClick={close}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-cream hover:bg-white/10"
            >
              <X size={20} />
            </button>

            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-cream hover:bg-white/10 sm:left-6"
            >
              <ChevronLeft size={22} />
            </button>

            <motion.img
              key={active.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              src={active.src}
              alt={active.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />

            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-cream hover:bg-white/10 sm:right-6"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
