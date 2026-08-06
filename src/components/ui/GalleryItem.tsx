import { Plus } from 'lucide-react';
import type { GalleryImage } from '@/types';
import Reveal from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

interface GalleryItemProps {
  image: GalleryImage;
  delay?: number;
  onClick?: () => void;
}

export default function GalleryItem({ image, delay = 0, onClick }: GalleryItemProps) {
  return (
    <Reveal delay={delay} className={cn('h-full', image.span)}>
      <button
        type="button"
        onClick={onClick}
        className="group relative h-full min-h-[200px] w-full overflow-hidden rounded-2xl border border-white/[0.06] text-left"
      >
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-500 group-hover:bg-ink/50 group-hover:opacity-100">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream backdrop-blur-sm">
            <Plus size={20} />
          </span>
        </div>
      </button>
    </Reveal>
  );
}
