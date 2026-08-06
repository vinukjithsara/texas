import type { Dish } from '@/types';
import Reveal from '@/components/ui/Reveal';

interface DishCardProps {
  dish: Dish;
  delay?: number;
}

export default function DishCard({ dish, delay = 0 }: DishCardProps) {
  return (
    <Reveal delay={delay} className="group h-full">
      <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.06] bg-surface transition-all duration-500 hover:-translate-y-2 hover:border-ember-500/30 hover:shadow-2xl hover:shadow-flame-600/10">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={dish.image}
            alt={dish.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/0 to-ink/0" />
          {dish.tag && (
            <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ember-400 backdrop-blur-sm">
              {dish.tag}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-bold text-cream">{dish.name}</h3>
            <span className="shrink-0 font-display text-lg font-bold text-gradient">
              {dish.price}
            </span>
          </div>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
            {dish.description}
          </p>
        </div>
      </article>
    </Reveal>
  );
}
