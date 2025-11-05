import React from 'react'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl">
        <nav className="m-3 rounded-xl border border-zinc-800/60 bg-zinc-950/70 px-4 py-3 text-zinc-100 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
          <div className="flex items-center justify-between">
            <a href="#home" className="font-semibold tracking-wide text-zinc-100">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-zinc-200" />
              Monochrome Folio
            </a>
            <ul className="flex items-center gap-6 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-zinc-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="rounded-md border border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors hover:bg-zinc-800/70"
                >
                  Let’s talk
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
