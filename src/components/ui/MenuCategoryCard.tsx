import { ArrowUpRight } from 'lucide-react';
import type { MenuCategory } from '@/types';
import Reveal from '@/components/ui/Reveal';

interface MenuCategoryCardProps {
  category: MenuCategory;
  delay?: number;
  onOpen: () => void;
}

export default function MenuCategoryCard({ category, delay = 0, onOpen }: MenuCategoryCardProps) {
  return (
    <Reveal delay={delay} className="group h-full">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View ${category.name} menu`}
        className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/[0.06] text-left transition-all duration-500 hover:-translate-y-2 hover:border-ember-500/30 hover:shadow-2xl hover:shadow-flame-600/10"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/5 transition-colors duration-500 group-hover:from-ink/95" />

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <h3 className="font-display text-lg font-bold text-cream sm:text-xl">{category.name}</h3>
            <p className="mt-1.5 line-clamp-2 text-xs text-muted sm:text-sm">{category.description}</p>

            <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-ember-400 sm:text-xs">
              View Menu
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>
        </div>
      </button>
    </Reveal>
  );
}
