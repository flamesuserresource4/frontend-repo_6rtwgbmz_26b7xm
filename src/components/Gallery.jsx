import { useEffect, useRef, useState } from 'react';

// Simple infinite scroll gallery using public gaming images
function Card({ src, title }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
      <img src={src} alt={title} className="h-48 w-full object-cover transition duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 p-3">
        <div className="text-sm font-medium text-white">{title}</div>
      </div>
    </div>
  );
}

const seedImages = [
  'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1603975711481-18b7aacae1c7?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop',
];

export default function Gallery() {
  const [items, setItems] = useState(() => Array.from({ length: 12 }, (_, i) => ({
    src: seedImages[i % seedImages.length],
    title: `Shadow Moment #${i + 1}`,
  })));
  const loadRef = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setItems((prev) => {
              const start = prev.length;
              const more = Array.from({ length: 9 }, (_, i) => ({
                src: seedImages[(start + i) % seedImages.length],
                title: `Shadow Moment #${start + i + 1}`,
              }));
              return [...prev, ...more];
            });
          }
        });
      },
      { threshold: 1 }
    );

    if (loadRef.current) io.observe(loadRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative bg-black py-24 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Gallery</h2>
        <p className="mt-2 max-w-2xl text-red-100/80">Browse moments from training, matches and community events. Keep scrolling — it never ends.</p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((it, idx) => (
            <Card key={idx} src={it.src} title={it.title} />
          ))}
        </div>

        <div ref={loadRef} className="mt-10 h-12 w-full" />
      </div>
    </section>
  );
}
