import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-black selection:bg-zinc-200 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-zinc-900 bg-black py-10 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Monochrome Folio — Designed with clarity
      </footer>
    </div>
  )
}

export default App
