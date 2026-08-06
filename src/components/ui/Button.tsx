import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 px-7 py-3.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:scale-95';

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-ember-500 to-flame-600 text-white shadow-lg shadow-flame-600/25 hover:shadow-xl hover:shadow-flame-600/40 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0',
  secondary:
    'border border-cream/25 text-cream bg-white/[0.03] backdrop-blur-sm hover:bg-white/10 hover:border-cream/40 hover:-translate-y-0.5 active:translate-y-0',
  ghost: 'text-cream/80 hover:text-ember-400',
};

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export default function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if ('href' in props && props.href) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
