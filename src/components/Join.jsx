import React from 'react'

export default function Join() {
  return (
    <section id="join" className="relative bg-[#0a0a0a] text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-3xl font-bold">Join Shadow Clan</h3>
          <p className="text-red-200/80 mt-4">We recruit disciplined, team-first players. If you value strategy over ego and consistency over luck, we want you.</p>
          <ul className="mt-6 space-y-3 text-sm text-red-200/70">
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-500"/> Rank: Master or above</li>
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-500"/> Role: Rifler / Sniper / IGL</li>
            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-red-500"/> Schedule: 4+ scrims per week</li>
          </ul>
        </div>
        <form id="contact" className="bg-black/60 border border-red-500/20 rounded-2xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-red-200/80 mb-1">Gamer Tag</label>
            <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-500" placeholder="ShadowX"/>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-red-200/80 mb-1">Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-500" placeholder="you@example.com"/>
            </div>
            <div>
              <label className="block text-sm text-red-200/80 mb-1">Role</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-500">
                <option>Rifler</option>
                <option>Sniper</option>
                <option>IGL</option>
                <option>Support</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm text-red-200/80 mb-1">Message</label>
            <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-500" placeholder="Tell us about your experience..."/>
          </div>
          <button type="button" className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 font-semibold shadow-[0_0_20px_rgba(220,38,38,0.4)] transition">Send Application</button>
          <p className="text-xs text-red-200/60">This is a demo form. Hook it up to the backend to collect submissions.</p>
        </form>
      </div>
    </section>
  )
}
