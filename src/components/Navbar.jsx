import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const serviceItems = [
  {
    href: '/services/web-development',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Website Development',
    desc: 'Fast, beautiful websites that convert visitors',
    color: 'text-blue-600 bg-blue-50',
  },
  {
    href: '/services/seo',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    title: 'SEO Optimization',
    desc: 'Rank #1 on Google with data-driven SEO',
    color: 'text-emerald-600 bg-emerald-50',
  },
  {
    href: '/services/digital-marketing',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'Digital Marketing',
    desc: 'Multi-channel campaigns that drive revenue',
    color: 'text-purple-600 bg-purple-50',
  },
  {
    href: '/services/app-development',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
      </svg>
    ),
    title: 'App Development',
    desc: 'iOS & Android apps users love to use',
    color: 'text-orange-600 bg-orange-50',
  },
  {
    href: '/services/it-consulting',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18"/>
      </svg>
    ),
    title: 'IT Consulting',
    desc: 'Strategic tech roadmaps for business growth',
    color: 'text-cyan-600 bg-cyan-50',
  },
  {
    href: '/services/ui-ux-design',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
    title: 'UI/UX Design',
    desc: 'Interfaces that delight users & drive action',
    color: 'text-pink-600 bg-pink-50',
  },
]

const navLinks = [
  { label: 'Home',      href: '/' },
  { label: 'Services',  href: '/services', hasMega: true },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About',     href: '/about' },
  { label: 'Blog',      href: '/blog' },
  { label: 'Contact',   href: '/contact' },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [megaOpen,    setMegaOpen]    = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const megaRef   = useRef(null)
  const timerRef  = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false); setMegaOpen(false) }, [pathname])

  const openMega  = () => { clearTimeout(timerRef.current); setMegaOpen(true) }
  const closeMega = () => { timerRef.current = setTimeout(() => setMegaOpen(false), 120) }

  const isActive = (href) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header
      className="sticky top-0 z-[100] transition-all duration-300"
      style={scrolled ? {
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(59,130,246,0.10)',
        boxShadow: '0 4px 24px rgba(59,130,246,0.08)',
      } : { background: 'rgba(255,255,255,0.97)' }}
    >
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between h-[72px] gap-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" stroke="url(#nl1)" strokeWidth="2.5"/>
            <path d="M12 20h6l3-6 3 10 3-6h4" stroke="url(#nl2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="nl1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#60a5fa"/><stop offset="1" stopColor="#3b82f6"/>
              </linearGradient>
              <linearGradient id="nl2" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#93c5fd"/><stop offset="1" stopColor="#2563eb"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="text-xl font-extrabold tracking-tight text-gray-900">
            Digi<span className="text-blue-500">Talk</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(l => l.hasMega ? (
            /* Services with mega menu */
            <div key={l.href} className="relative"
              onMouseEnter={openMega} onMouseLeave={closeMega} ref={megaRef}>
              <button
                className={`nav-link flex items-center gap-1 ${isActive(l.href) ? 'active' : ''}`}
                onClick={() => setMegaOpen(o => !o)}>
                {l.label}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  style={{ transform: megaOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>

              {/* Mega dropdown */}
              {megaOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
                  style={{ background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
                  onMouseEnter={openMega} onMouseLeave={closeMega}>

                  {/* Header */}
                  <div className="px-6 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-extrabold text-gray-900">Our Services</div>
                      <div className="text-xs text-gray-400 mt-0.5">Premium IT solutions for every business need</div>
                    </div>
                    <Link to="/services"
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors">
                      View All
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  </div>

                  {/* Services grid */}
                  <div className="grid grid-cols-2 gap-1 p-3">
                    {serviceItems.map(s => (
                      <Link key={s.href} to={s.href}
                        className="flex items-start gap-3 p-3.5 rounded-xl hover:bg-gray-50 transition-colors duration-150 group">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${s.color}`}>
                          {s.icon}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">{s.title}</div>
                          <div className="text-xs text-gray-400 mt-0.5 leading-snug">{s.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Footer bar */}
                  <div className="px-6 py-3.5 border-t border-gray-100 flex items-center justify-between"
                    style={{ background: 'rgba(59,130,246,0.03)' }}>
                    <span className="text-xs text-gray-400">Not sure what you need?</span>
                    <Link to="/contact"
                      className="text-xs font-semibold px-3.5 py-1.5 rounded-full text-white transition-all duration-200 hover:opacity-90"
                      style={{ background: 'linear-gradient(135deg,#3b82f6,#2563eb)' }}>
                      Get Free Consultation →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link key={l.href} to={l.href} className={`nav-link ${isActive(l.href) ? 'active' : ''}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Burger */}
        <div className="flex items-center gap-3">
          <Link to="/contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg,#3b82f6,#2563eb)', boxShadow: '0 2px 12px rgba(59,130,246,0.35)' }}>
            Start Project
          </Link>
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu">
            <span className="block w-6 h-0.5 bg-gray-700 rounded transition-all duration-300"
              style={menuOpen ? { transform: 'rotate(45deg) translate(5px,5px)' } : {}}/>
            <span className="block w-6 h-0.5 bg-gray-700 rounded transition-all duration-300"
              style={menuOpen ? { opacity: 0 } : {}}/>
            <span className="block w-6 h-0.5 bg-gray-700 rounded transition-all duration-300"
              style={menuOpen ? { transform: 'rotate(-45deg) translate(5px,-5px)' } : {}}/>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-white border-b border-gray-100 shadow-xl z-50 px-4 py-3 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
          <Link to="/" className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${isActive('/') && pathname === '/' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}>
            Home
          </Link>

          {/* Mobile Services accordion */}
          <div>
            <button
              onClick={() => setMobileServices(o => !o)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${isActive('/services') ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}>
              Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                style={{ transform: mobileServices ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            {mobileServices && (
              <div className="ml-4 mt-1 space-y-1">
                <Link to="/services" className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-blue-600 hover:bg-blue-50 transition-colors">
                  View All Services →
                </Link>
                {serviceItems.map(s => (
                  <Link key={s.href} to={s.href}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${s.color}`}>
                      {s.icon}
                    </div>
                    <span className="font-medium">{s.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[{ label: 'Portfolio', href: '/portfolio' }, { label: 'About', href: '/about' }, { label: 'Blog', href: '/blog' }, { label: 'Contact', href: '/contact' }].map(l => (
            <Link key={l.href} to={l.href}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${isActive(l.href) ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}>
              {l.label}
            </Link>
          ))}

          <Link to="/contact" className="btn-primary mt-2 justify-center">
            Start Project
          </Link>
        </div>
      )}
    </header>
  )
}
