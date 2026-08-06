import { Quote } from 'lucide-react';
import type { Testimonial } from '@/types';
import Reveal from '@/components/ui/Reveal';
import StarRating from '@/components/ui/StarRating';

interface TestimonialCardProps {
  testimonial: Testimonial;
  delay?: number;
}

export default function TestimonialCard({ testimonial, delay = 0 }: TestimonialCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <figure className="relative flex h-full flex-col rounded-3xl border border-white/[0.06] bg-surface p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-ember-500/30">
        <Quote className="absolute right-6 top-6 text-white/[0.06]" size={56} strokeWidth={1} />

        <StarRating rating={testimonial.rating} />

        <blockquote className="relative mt-4 flex-1 text-sm leading-relaxed text-cream/90">
          “{testimonial.quote}”
        </blockquote>

        <figcaption className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            loading="lazy"
            className="h-11 w-11 rounded-full object-cover ring-2 ring-ember-500/30"
          />
          <div>
            <p className="text-sm font-semibold text-cream">{testimonial.name}</p>
            <p className="text-xs text-muted">{testimonial.role}</p>
          </div>
        </figcaption>
      </figure>
    </Reveal>
  );
}
