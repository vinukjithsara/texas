import { MapPin, Mail, Phone } from 'lucide-react';
import Container from '@/components/ui/Container';
import Logo from '@/components/ui/Logo';
import { FacebookIcon, InstagramIcon, TwitterXIcon, TiktokIcon } from '@/components/ui/SocialIcons';
import { NAV_LINKS } from '@/data/navigation';
import { SITE } from '@/data/site';

const SOCIALS = [
  { id: 'facebook', label: 'Facebook', href: SITE.social.facebook, icon: FacebookIcon },
  { id: 'instagram', label: 'Instagram', href: SITE.social.instagram, icon: InstagramIcon },
  { id: 'tiktok', label: 'TikTok', href: SITE.social.tiktok, icon: TiktokIcon },
  { id: 'twitter', label: 'Twitter / X', href: SITE.social.twitter, icon: TwitterXIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-surface">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {SITE.description}
          </p>
          <div className="mt-6 flex items-center gap-3">
            {SOCIALS.map(({ id, label, href, icon: Icon }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-cream/70 transition-all hover:-translate-y-0.5 hover:border-ember-500/40 hover:text-ember-400"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-cream">Quick Links</h4>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-muted transition-colors hover:text-ember-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-cream">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-ember-400" />
              <span>{SITE.location.addressLines.join(', ')}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0 text-ember-400" />
              <a href={`tel:${SITE.contact.phone}`} className="hover:text-ember-400">
                {SITE.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 text-ember-400" />
              <a href={`mailto:${SITE.contact.email}`} className="hover:text-ember-400">
                {SITE.contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-cream">Opening Hours</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted">
            {SITE.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-cream/70">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/[0.06] py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-muted sm:flex-row">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p>Demo portfolio site — built with React, Vite &amp; Tailwind CSS.</p>
        </Container>
      </div>
    </footer>
  );
}
