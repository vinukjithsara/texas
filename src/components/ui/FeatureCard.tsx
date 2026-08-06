import type { Feature } from '@/types';
import Reveal from '@/components/ui/Reveal';

interface FeatureCardProps {
  feature: Feature;
  delay?: number;
}

export default function FeatureCard({ feature, delay = 0 }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <Reveal delay={delay} className="h-full">
      <div className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-b from-surface-2 to-surface p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-ember-500/30">
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-flame-600/10 blur-2xl transition-all duration-500 group-hover:bg-flame-600/20" />

        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-ember-500 to-flame-600 text-white shadow-lg shadow-flame-600/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <Icon size={26} strokeWidth={2} />
        </div>

        <h3 className="relative mt-6 text-lg font-bold text-cream">{feature.title}</h3>
        <p className="relative mt-2 text-sm leading-relaxed text-muted">
          {feature.description}
        </p>
      </div>
    </Reveal>
  );
}
