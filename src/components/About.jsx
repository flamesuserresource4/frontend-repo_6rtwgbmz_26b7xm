import { motion } from 'framer-motion';

export default function About() {
  const items = [
    {
      title: 'Precision',
      desc: 'We plan, coordinate and execute with ruthless efficiency. Every move is deliberate.',
    },
    {
      title: 'Teamwork',
      desc: 'Synchronized strategies and callouts. No lone wolves — only the pack.',
    },
    {
      title: 'Style',
      desc: 'Futuristic aesthetic with a code of honor. Win with class, leave a legend.',
    },
  ];

  return (
    <section id="about" className="relative w-full bg-black py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_10%,rgba(220,38,38,0.15),transparent_40%)]" />
      <div className="container relative z-10 mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-extrabold"
        >
          About the Clan
        </motion.h2>
        <p className="mt-4 max-w-2xl text-red-100/80">
          Formed by veterans, built for champions. We elevate players through training, events and competitive play. Discipline meets creativity.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur"
            >
              <h3 className="text-xl font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-red-100/80">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
