import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { TESTIMONIALS } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section id="reviews" className="relative bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Customer Reviews"
          title="Loved By Our Guests"
          description="Don't just take our word for it — here's what regulars keep coming back for."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((testimonial, i) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} delay={(i % 4) * 0.1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
