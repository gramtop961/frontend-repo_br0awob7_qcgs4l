import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Monochrome Brand Site',
    description: 'Clean, grid-first layout with subtle motion and keyboard-friendly navigation.',
    tags: ['Next.js', 'Framer Motion', 'Accessibility'],
  },
  {
    title: 'Interactive Data Deck',
    description: 'Minimalist dashboard with focus states, progressive disclosure and smooth transitions.',
    tags: ['React', 'D3', 'Design Systems'],
  },
  {
    title: 'Product Teaser',
    description: 'Elegant landing visuals, measured typography, and tactile hover feedback.',
    tags: ['Vite', 'Tailwind', 'Animation'],
  },
]

function Card({ title, description, tags }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/60 p-5 text-zinc-200 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="mb-4 h-40 w-full rounded-lg bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_60%)] ring-1 ring-inset ring-zinc-800 transition-colors group-hover:ring-red-400/40" />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-zinc-400">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-md border border-zinc-800 bg-zinc-900/60 px-2 py-1 text-[11px] text-zinc-300 transition-colors group-hover:border-zinc-700 group-hover:text-zinc-200"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black py-20 text-zinc-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">Selected projects</h2>
            <p className="mt-2 max-w-2xl text-zinc-400">
              Purposeful interfaces with a monochrome palette and interactive depth.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-md border border-zinc-800 px-3 py-2 text-xs text-zinc-200 transition-colors hover:bg-zinc-900 sm:inline-block"
          >
            Start a project
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
