import { Flame, Award, Users2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import { SITE } from '@/data/site';

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1200&q=80';

const STATS = [
  { icon: Flame, value: '10+', label: 'Years of Flavor' },
  { icon: Award, value: '15', label: 'Signature Recipes' },
  { icon: Users2, value: '50k+', label: 'Happy Guests' },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 sm:mx-0 mx-auto">
            <img
              src={ABOUT_IMAGE}
              alt="Inside TEXAS Restaurant"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 -right-2 flex items-center gap-4 rounded-2xl border border-white/10 bg-surface/90 px-6 py-4 shadow-2xl backdrop-blur-md sm:right-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-ember-500 to-flame-600 text-white">
              <Flame size={20} />
            </span>
            <div>
              <p className="font-display text-lg font-bold text-cream">Est. 2014</p>
              <p className="text-xs text-muted">Maharagama, Sri Lanka</p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-ember-400">
              <span className="h-px w-6 bg-ember-400" />
              Our Story
            </span>
            <h2 className="mt-4 text-3xl font-bold text-cream sm:text-4xl md:text-5xl">
              A Decade of Fire, Flavor &amp; Family
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              {SITE.name} started as a single charcoal grill and a simple promise: cook everything
              like it&apos;s for family. What began as a small neighborhood spot in Maharagama has
              grown into a gathering place for good food and better company — but the fire, and the
              recipe for it, hasn&apos;t changed.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Every plate that leaves our kitchen is built on fresh ingredients, slow technique, and
              a genuine love for feeding people well. This is demo copy — replace it with the real
              story once you&apos;re ready to go live.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label}>
                <Icon className="text-ember-400" size={22} />
                <p className="mt-2 font-display text-2xl font-bold text-cream">{value}</p>
                <p className="text-xs text-muted">{label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
