import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import DishCard from '@/components/ui/DishCard';
import Button from '@/components/ui/Button';
import { DISHES } from '@/data/dishes';

export default function FeaturedDishes() {
  return (
    <section id="menu" className="relative bg-ink py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Menu"
          title="Featured Dishes"
          description="A taste of what's cooking — fire-grilled classics and comfort favorites, made fresh to order."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DISHES.map((dish, i) => (
            <DishCard key={dish.id} dish={dish} delay={(i % 3) * 0.1} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button href="#contact" variant="secondary">
            View Full Menu
          </Button>
        </div>
      </Container>
    </section>
  );
}
