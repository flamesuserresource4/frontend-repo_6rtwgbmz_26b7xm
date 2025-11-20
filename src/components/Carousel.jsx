import { useRef } from 'react';

const slides = [
  {
    title: 'Tournament Night',
    subtitle: 'Weekly competitive brackets',
    img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Training Grounds',
    subtitle: 'Sharpen your skills with pros',
    img: 'https://images.unsplash.com/photo-1509099836639-18ba02c0e2d2?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Shadow Ops',
    subtitle: 'Covert missions, coordinated strikes',
    img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Carousel() {
  const scroller = useRef(null);

  const next = () => scroller.current?.scrollBy({ left: scroller.current.clientWidth, behavior: 'smooth' });
  const prev = () => scroller.current?.scrollBy({ left: -scroller.current.clientWidth, behavior: 'smooth' });

  return (
    <section className="relative bg-black py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold">Events & Highlights</h2>
          <div className="flex gap-2">
            <button onClick={prev} className="rounded-lg bg-white/10 px-3 py-2 ring-1 ring-white/15 hover:bg-white/15">Prev</button>
            <button onClick={next} className="rounded-lg bg-red-600 px-3 py-2 ring-1 ring-red-400/40 hover:bg-red-500">Next</button>
          </div>
        </div>

        <div ref={scroller} className="no-scrollbar relative flex snap-x snap-mandatory overflow-x-auto gap-6">
          {slides.map((s, i) => (
            <article key={i} className="relative h-[340px] min-w-[85%] snap-center overflow-hidden rounded-2xl sm:min-w-[48%] lg:min-w-[32%]">
              <img src={s.img} alt={s.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-semibold">{s.title}</h3>
                <p className="text-red-100/80">{s.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
