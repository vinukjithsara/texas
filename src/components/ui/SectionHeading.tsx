import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className={cn('max-w-2xl', isCenter && 'mx-auto text-center', className)}
    >
      <motion.span
        variants={item}
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-ember-400"
      >
        <span className="h-px w-6 bg-ember-400" />
        {eyebrow}
        {isCenter && <span className="h-px w-6 bg-ember-400" />}
      </motion.span>
      <motion.h2 variants={item} className="mt-4 text-3xl font-bold text-cream sm:text-4xl md:text-5xl">
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={item} className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
