import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 18) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'currentColor',
});

export function FacebookIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M13.5 21v-7.7h2.6l.4-3h-3v-1.9c0-.87.24-1.46 1.5-1.46h1.6V4.28C15.9 4.2 15 4.1 13.98 4.1c-2.1 0-3.55 1.28-3.55 3.63v2.02H8v3h2.43V21h3.07Z" />
    </svg>
  );
}

export function InstagramIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TwitterXIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M13.6 10.4 20 3h-2l-5.2 5.9L8.6 3H3l6.7 9.6L3 21h2l5.6-6.3L15.4 21H21l-7.4-10.6Zm-2 2.3-.6-.9L5.9 4.4h2.1l4.2 6 .6.9 5.4 7.7h-2.1l-4.5-6.3Z" />
    </svg>
  );
}

export function TiktokIcon({ size, ...props }: IconProps) {
  return (
    <svg {...base(size)} {...props}>
      <path d="M16.6 3h-3v12.2a2.6 2.6 0 1 1-2.1-2.55v-3.1a5.7 5.7 0 1 0 4.9 5.65V8.9a7.6 7.6 0 0 0 4.3 1.33V7.2a4.6 4.6 0 0 1-4.1-4.2Z" />
    </svg>
  );
}
