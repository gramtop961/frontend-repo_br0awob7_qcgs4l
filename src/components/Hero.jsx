import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden bg-black">
      {/* Interactive 3D background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient edges for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl text-zinc-100">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-3 py-1 text-[11px] uppercase tracking-widest text-zinc-300">
            Interactive • Minimal • Monochrome
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Digital portfolio for modern work
          </h1>
          <p className="mt-4 text-zinc-300">
            Elegant, distraction-free design. Subtle motion. A clean canvas to showcase craft.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-md border border-zinc-700 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:bg-white/10"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:bg-zinc-900"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
