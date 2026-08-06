import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import FeatureCard from '@/components/ui/FeatureCard';
import { FEATURES } from '@/data/features';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Crafted With Care, Served With Pride"
          description="What keeps our guests coming back — night after night, table after table."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} delay={i * 0.1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
