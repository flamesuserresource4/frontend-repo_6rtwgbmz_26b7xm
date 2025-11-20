import { useState } from 'react';

export default function JoinUs() {
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    // For now, simulate success locally (no backend needed)
    await new Promise((r) => setTimeout(r, 600));
    setStatus('Thanks — we\'ll reach out soon!');
    e.currentTarget.reset();
  };

  return (
    <section id="join" className="relative bg-black py-24 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Join Us</h2>
        <p className="mt-2 max-w-2xl text-red-100/80">Tell us about yourself. We look for dedication, comms discipline, and a team-first mindset.</p>

        <form onSubmit={submit} className="mt-8 grid gap-4 sm:max-w-xl">
          <input name="name" required placeholder="Your name" className="rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 ring-1 ring-white/10 focus:ring-red-500/50 outline-none" />
          <input name="discord" required placeholder="Discord handle" className="rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 ring-1 ring-white/10 focus:ring-red-500/50 outline-none" />
          <select name="role" className="rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 ring-1 ring-white/10 focus:ring-red-500/50 outline-none">
            <option value="Fragger">Fragger</option>
            <option value="Support">Support</option>
            <option value="IGL">IGL</option>
            <option value="Sniper">Sniper</option>
          </select>
          <textarea name="message" rows="4" placeholder="Tell us why you\'re a good fit" className="rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 ring-1 ring-white/10 focus:ring-red-500/50 outline-none" />
          <button type="submit" className="rounded-xl bg-red-600 px-5 py-3 font-medium text-white ring-1 ring-red-400/40 transition hover:bg-red-500">Submit</button>
          {status && <p className="text-green-400">{status}</p>}
        </form>
      </div>
    </section>
  );
}
