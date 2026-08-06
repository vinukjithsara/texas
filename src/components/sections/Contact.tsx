import { MapPin, Phone, Mail, Navigation, MessageCircle, Clock } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { SITE } from '@/data/site';

const whatsappHref = `https://wa.me/${SITE.contact.whatsapp}?text=${encodeURIComponent(
  `Hi ${SITE.name}, I'd like to make a reservation.`
)}`;

export default function Contact() {
  return (
    <section id="contact" className="relative bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact &amp; Location"
          title="Come Say Hello"
          description="Find us in Maharagama — reach out anytime for reservations, questions or events."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="flex flex-col gap-4 lg:col-span-2">
            <div className="flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-surface-2 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-ember-500 to-flame-600 text-white">
                <MapPin size={19} />
              </span>
              <div>
                <p className="text-sm font-bold text-cream">Address</p>
                <p className="mt-1 text-sm text-muted">{SITE.location.addressLines.join(', ')}</p>
                <a
                  href={SITE.location.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-ember-400 hover:text-ember-300"
                >
                  <Navigation size={14} />
                  Get Directions
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-surface-2 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-ember-500 to-flame-600 text-white">
                <Phone size={19} />
              </span>
              <div>
                <p className="text-sm font-bold text-cream">Phone</p>
                <a href={`tel:${SITE.contact.phone}`} className="mt-1 block text-sm text-muted hover:text-ember-400">
                  {SITE.contact.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-surface-2 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-ember-500 to-flame-600 text-white">
                <Mail size={19} />
              </span>
              <div>
                <p className="text-sm font-bold text-cream">Email</p>
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="mt-1 block break-all text-sm text-muted hover:text-ember-400"
                >
                  {SITE.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-surface-2 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-ember-500 to-flame-600 text-white">
                <Clock size={19} />
              </span>
              <div className="w-full">
                <p className="text-sm font-bold text-cream">Opening Hours</p>
                <ul className="mt-1 space-y-1">
                  {SITE.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4 text-sm text-muted">
                      <span>{h.day}</span>
                      <span className="text-cream/70">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-6 py-4 text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              <MessageCircle size={19} />
              Chat with us on WhatsApp
            </a>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-3xl border border-white/[0.06]">
              <iframe
                title={`${SITE.name} location map`}
                src={SITE.location.mapEmbedSrc}
                className="h-full min-h-[420px] w-full grayscale-[35%] contrast-[1.05]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center p-4">
                <Button
                  href={SITE.location.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="primary"
                  className="pointer-events-auto shadow-2xl"
                >
                  <Navigation size={16} />
                  Get Directions
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
