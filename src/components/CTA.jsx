import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative bg-gradient-to-b from-black to-zinc-950 py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_90%,rgba(239,68,68,0.2),transparent_40%)]" />
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-gradient-to-r from-red-600 to-red-500 p-8 shadow-xl ring-1 ring-red-300/40"
        >
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-bold">Ready to step into the shadows?</h3>
              <p className="text-red-50/90">Apply to join our next open trials — limited spots, high standards.</p>
            </div>
            <a href="#join" className="rounded-xl bg-black/80 px-5 py-3 font-medium text-white ring-1 ring-black/40 transition hover:bg-black">Apply Now</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
