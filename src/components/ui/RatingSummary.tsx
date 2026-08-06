import Reveal from '@/components/ui/Reveal';
import StarRating from '@/components/ui/StarRating';
import { SITE } from '@/data/site';

export default function RatingSummary() {
  const { rating, count } = SITE.reviews;

  return (
    <Reveal className="mx-auto mb-12 flex max-w-md flex-col items-center gap-3 rounded-2xl border border-white/[0.06] bg-surface-2 px-8 py-6 text-center sm:max-w-xl sm:flex-row sm:justify-center sm:gap-6 sm:text-left">
      <div className="flex items-baseline gap-1.5">
        <span className="font-display text-4xl font-bold text-cream">{rating.toFixed(1)}</span>
        <span className="text-sm text-muted">/ 5</span>
      </div>
      <div className="hidden h-10 w-px bg-white/10 sm:block" />
      <div>
        <StarRating rating={Math.round(rating)} size={20} className="justify-center sm:justify-start" />
        <p className="mt-1.5 text-sm text-muted">
          Based on <span className="font-semibold text-cream">{count}</span> Google Reviews
        </p>
      </div>
    </Reveal>
  );
}
