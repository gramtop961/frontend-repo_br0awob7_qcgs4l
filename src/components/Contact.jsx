import React, { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thanks — I will get back to you shortly.')
  }

  return (
    <section id="contact" className="relative bg-black py-20 text-zinc-100">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">Let’s build something</h2>
        <p className="mt-2 text-zinc-400">
          Tell me a little about your project and I’ll respond within 1–2 business days.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                type="text"
                required
                placeholder="Name"
                className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition-colors focus:border-zinc-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="email"
                required
                placeholder="Email"
                className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition-colors focus:border-zinc-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              required
              placeholder="Project details"
              rows={6}
              className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition-colors focus:border-zinc-500"
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <button
              type="submit"
              className="rounded-md border border-zinc-700 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:bg-white/10"
            >
              Send message
            </button>
            <p className="text-sm text-zinc-400">{status}</p>
          </div>
        </form>

        <p className="mt-10 text-xs text-zinc-500">
          This is a demo form. In production, wire this to your preferred email or CRM service.
        </p>
      </div>
    </section>
  )
}
