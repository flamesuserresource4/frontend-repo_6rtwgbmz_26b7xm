import React from 'react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/30 border-b border-red-500/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-extrabold tracking-wide text-lg">
          <span className="text-red-600">SHADOW</span> CLAN
        </a>
        <div className="hidden sm:flex items-center gap-6 text-sm text-red-200/80">
          <a href="#about" className="hover:text-red-400 transition">About</a>
          <a href="#gallery" className="hover:text-red-400 transition">Gallery</a>
          <a href="#join" className="hover:text-red-400 transition">Join</a>
          <a href="#contact" className="hover:text-red-400 transition">Contact</a>
        </div>
        <a href="#join" className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm font-semibold shadow-[0_0_18px_rgba(220,38,38,0.4)] transition">Apply</a>
      </div>
    </nav>
  )
}
