import { useState, useEffect } from 'react'

const links = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Projects',     href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active,   setActive]     = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id) }),
      { threshold: 0.4 }
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header
      className="sticky top-0 z-[100] transition-all duration-400"
      style={scrolled ? {
        background: 'rgba(255,255,255,0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(59,130,246,0.10)',
        boxShadow: '0 4px 24px rgba(59,130,246,0.08)',
      } : {}}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[72px] gap-6">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" stroke="url(#nl1)" strokeWidth="2.5" />
            <path d="M12 20h6l3-6 3 10 3-6h4" stroke="url(#nl2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="nl1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#60a5fa" /><stop offset="1" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="nl2" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#93c5fd" /><stop offset="1" stopColor="#2563eb" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-xl font-extrabold tracking-tight text-gray-900">
            Digi<span className="text-blue-500">Talk</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href} className={`nav-link ${active === l.href ? 'active' : ''}`}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA + Burger */}
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all duration-200"
            style={{ background: 'linear-gradient(135deg,#3b82f6,#2563eb)', boxShadow: '0 2px 12px rgba(59,130,246,0.35)' }}>
            Start Project
          </a>
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 z-50"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className="block w-5.5 h-0.5 bg-gray-700 rounded transition-all duration-300"
              style={menuOpen ? { transform: 'rotate(45deg) translate(5px,5px)' } : {}} />
            <span className="block w-5.5 h-0.5 bg-gray-700 rounded transition-all duration-300"
              style={menuOpen ? { opacity: 0 } : {}} />
            <span className="block w-5.5 h-0.5 bg-gray-700 rounded transition-all duration-300"
              style={menuOpen ? { transform: 'rotate(-45deg) translate(5px,-5px)' } : {}} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl z-50 px-6 py-4 flex flex-col gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={close}
              className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={close} className="btn-primary mt-2 justify-center">
            Start Project
          </a>
        </div>
      )}
    </header>
  )
}
