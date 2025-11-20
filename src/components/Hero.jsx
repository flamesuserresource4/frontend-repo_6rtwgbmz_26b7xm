import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for red/black vibe */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,0,72,0.25),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(255,0,0,0.2),transparent_40%)]" />

      <div className="relative z-10 container mx-auto px-6 py-24 flex min-h-[90vh] items-center">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
          >
            Shadow Clan
            <span className="block bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">Crossfire</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-red-100/90 max-w-2xl"
          >
            Elite, coordinated, unstoppable. Join a futuristic force forged in the shadows. Tactics, precision and style — sharpened for victory.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#join"
              className="group inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-white shadow-[0_0_25px_rgba(239,68,68,0.45)] ring-1 ring-red-400/40 transition hover:translate-y-[-1px] hover:bg-red-500"
            >
              Join the Clan
              <svg className="h-5 w-5 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-white/15"
            >
              Learn more
            </a>
          </motion.div>

          <div className="mt-10 grid grid-cols-3 gap-6 text-center sm:max-w-md">
            {[
              { label: 'Members', value: '500+' },
              { label: 'Victories', value: '1.2k' },
              { label: 'Events', value: '150+' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
