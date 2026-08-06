import { useState } from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import MenuCategoryCard from '@/components/ui/MenuCategoryCard';
import MenuViewer from '@/components/ui/MenuViewer';
import { MENU_CATEGORIES } from '@/data/menu';

export default function Menu() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="menu" className="relative bg-ink py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Menu"
          title="Explore The Full Menu"
          description="Browse by category — tap a card to flip through it like you're at the table."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {MENU_CATEGORIES.map((category, i) => (
            <MenuCategoryCard
              key={category.id}
              category={category}
              delay={(i % 4) * 0.08}
              onOpen={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </Container>

      <MenuViewer
        categories={MENU_CATEGORIES}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
