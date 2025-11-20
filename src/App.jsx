import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Carousel from './components/Carousel'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Join from './components/Join'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Carousel />
        <section id="gallery">
          <Gallery />
        </section>
        <CTA />
        <Join />
      </main>
      <Footer />
    </div>
  )
}

export default App
