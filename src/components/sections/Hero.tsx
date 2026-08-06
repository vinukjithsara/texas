import { motion, type Variants } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { SITE } from '@/data/site';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80';

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <motion.img
          src={HERO_IMAGE}
          alt="Signature dish at TEXAS Restaurant"
          className="h-full w-full object-cover"
          fetchPriority="high"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/30 to-ink/70" />
      </div>

      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-flame-600/20 blur-[110px] animate-float"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-ember-500/10 blur-[120px]"
        aria-hidden
      />

      <Container className="relative pt-28 pb-24 sm:pt-32">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          <motion.div
            variants={item}
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-ember-300 backdrop-blur-sm sm:text-xs sm:tracking-[0.25em]"
          >
            <Star size={13} className="shrink-0 fill-ember-400 text-ember-400" />
            <span>Maharagama&apos;s Fire-Grilled Favorite</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-extrabold leading-[1.08] text-cream sm:text-5xl md:text-6xl lg:text-[4.2rem]"
          >
            Welcome to <span className="text-gradient">{SITE.name}</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {SITE.description}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#menu" variant="primary">
              View Menu
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Us
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:flex sm:items-center sm:gap-8"
          >
            <div className="min-w-0">
              <p className="font-display text-xl font-bold text-cream sm:text-2xl">10+</p>
              <p className="text-[10px] uppercase tracking-wider text-muted sm:text-xs">Years Serving</p>
            </div>
            <div className="hidden h-9 w-px bg-white/10 sm:block" />
            <div className="min-w-0">
              <p className="font-display text-xl font-bold text-cream sm:text-2xl">4.8/5</p>
              <p className="text-[10px] uppercase tracking-wider text-muted sm:text-xs">Guest Rating</p>
            </div>
            <div className="hidden h-9 w-px bg-white/10 sm:block" />
            <div className="min-w-0">
              <p className="font-display text-xl font-bold text-cream sm:text-2xl">30+</p>
              <p className="text-[10px] uppercase tracking-wider text-muted sm:text-xs">Signature Dishes</p>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      <a
        href="#menu"
        aria-label="Scroll to menu"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted sm:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="animate-bounce" size={18} />
      </a>
    </section>
  );
}
