import { useState, useEffect } from 'react'

const socials = [
  {
    label: 'LinkedIn',
    color: '#0077b5',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    color: '#000000',
    href: '#',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    color: '#e1306c',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    color: '#1877f2',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    color: '#ff0000',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
      </svg>
    ),
  },
]

export default function SocialSidebar() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      className="fixed left-0 top-1/2 -translate-y-1/2 z-[90] flex flex-col items-start"
      style={{
        opacity: visible ? 1 : 0,
        transform: `translateY(-50%) translateX(${visible ? '0' : '-60px'})`,
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}>

      {/* Top accent line */}
      <div className="w-0.5 h-8 ml-[22px] rounded-full"
        style={{ background: 'linear-gradient(180deg,transparent,#3b82f6)' }} />

      {/* Icons */}
      <div className="flex flex-col gap-1">
        {socials.map((s, i) => (
          <div key={s.label} className="relative flex items-center group"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}>
            <a
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-r-xl transition-all duration-300"
              style={{
                background: hovered === i ? s.color : 'rgba(255,255,255,0.92)',
                color: hovered === i ? '#fff' : '#6b7280',
                boxShadow: hovered === i
                  ? `4px 4px 20px ${s.color}44`
                  : '2px 2px 12px rgba(0,0,0,0.08)',
                transform: hovered === i ? 'translateX(4px)' : 'translateX(0)',
                borderLeft: `3px solid ${hovered === i ? s.color : '#e5e7eb'}`,
              }}>
              {s.icon}
            </a>

            {/* Tooltip */}
            <div
              className="absolute left-full ml-3 px-2.5 py-1 rounded-lg text-xs font-semibold text-white whitespace-nowrap pointer-events-none"
              style={{
                background: s.color,
                opacity: hovered === i ? 1 : 0,
                transform: hovered === i ? 'translateX(0)' : 'translateX(-6px)',
                transition: 'opacity 0.2s, transform 0.2s',
                boxShadow: `0 4px 12px ${s.color}55`,
              }}>
              {s.label}
              {/* Arrow */}
              <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent"
                style={{ borderRightColor: s.color }} />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom accent line */}
      <div className="w-0.5 h-8 ml-[22px] rounded-full"
        style={{ background: 'linear-gradient(180deg,#3b82f6,transparent)' }} />
    </div>
  )
}
