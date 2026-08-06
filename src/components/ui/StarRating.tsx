import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  className?: string;
}

export default function StarRating({ rating, className }: StarRatingProps) {
  return (
    <div className={cn('flex items-center gap-1', className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? 'fill-ember-400 text-ember-400' : 'fill-transparent text-white/20'}
        />
      ))}
    </div>
  );
}
