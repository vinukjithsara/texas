import { cn } from '@/lib/utils';
import Reveal from '@/components/ui/Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <Reveal
      className={cn('max-w-2xl', isCenter && 'mx-auto text-center', className)}
    >
      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-ember-400">
        <span className="h-px w-6 bg-ember-400" />
        {eyebrow}
        {isCenter && <span className="h-px w-6 bg-ember-400" />}
      </span>
      <h2 className="mt-4 text-3xl font-bold text-cream sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
