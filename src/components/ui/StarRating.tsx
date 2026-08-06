import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  size?: number;
  className?: string;
}

export default function StarRating({ rating, size = 16, className }: StarRatingProps) {
  return (
    <div className={cn('flex items-center gap-1', className)} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
        >
          <Star
            size={size}
            className={i < rating ? 'fill-ember-400 text-ember-400' : 'fill-transparent text-white/20'}
          />
        </motion.span>
      ))}
    </div>
  );
}
