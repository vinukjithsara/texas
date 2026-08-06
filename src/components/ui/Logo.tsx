import { Flame } from 'lucide-react';
import { SITE } from '@/data/site';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

// Placeholder logo mark — swap for the restaurant's real logo file/SVG later.
export default function Logo({ className }: LogoProps) {
  return (
    <a
      href="#home"
      className={cn('flex items-center gap-2.5 font-display text-xl font-bold text-cream', className)}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-ember-500 to-flame-600 text-white shadow-md shadow-flame-600/30">
        <Flame size={18} strokeWidth={2.5} />
      </span>
      {SITE.shortName}
      <span className="text-gradient">.</span>
    </a>
  );
}
