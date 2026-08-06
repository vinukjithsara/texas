import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import { NAV_LINKS } from '@/data/navigation';
import { SITE } from '@/data/site';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'border-b border-white/[0.06] bg-ink/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <Container className="flex h-18 items-center justify-between py-4">
        <Logo />

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-cream/75 transition-colors hover:text-ember-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${SITE.contact.phone}`}
            className="flex items-center gap-2 text-sm font-semibold text-cream/80 hover:text-ember-400"
          >
            <Phone size={16} />
            {SITE.contact.phoneDisplay}
          </a>
          <Button href="#contact" variant="primary" className="!px-6 !py-2.5">
            Reserve a Table
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-cream lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-white/[0.06] bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-semibold text-cream/85 hover:bg-white/5 hover:text-ember-400"
                >
                  {link.label}
                </a>
              ))}
              <Button href="#contact" variant="primary" className="mt-4 w-full" onClick={() => setOpen(false)}>
                Reserve a Table
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
