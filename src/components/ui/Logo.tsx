import logoMark from '@/assets/logo.jpg';
import { SITE } from '@/data/site';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className, size = 48 }: LogoProps) {
  return (
    <a
      href="#home"
      aria-label={SITE.name}
      className={cn('flex items-center', className)}
    >
      <img
        src={logoMark}
        alt={`${SITE.name} logo`}
        width={size}
        height={size}
        className="rounded-full ring-1 ring-white/10 shadow-md shadow-flame-600/20"
        style={{ height: size, width: size }}
      />
    </a>
  );
}
