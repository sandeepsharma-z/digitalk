const cols = [
  { title: 'Services', links: [['Website Development','/services'],['SEO Optimization','/services'],['Digital Marketing','/services'],['App Development','/services'],['IT Consulting','/contact']] },
  { title: 'Company',  links: [['About Us','/about'],['Portfolio','/portfolio'],['Blog','/blog'],['Careers','#'],['Contact Us','/contact']] },
  { title: 'Contact',  links: [['hello@digitalk.io','mailto:hello@digitalk.io'],['+1 (555) 123-4567','tel:+15551234567'],['Support Center','/contact'],['Privacy Policy','#'],['Terms of Service','#']] },
]

const socials = [
  {
    label: 'LinkedIn',
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: 'Twitter / X',
    svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    label: 'Instagram',
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  },
  {
    label: 'YouTube',
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0f172a"/></svg>,
  },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-16" style={{ background: 'linear-gradient(180deg,#0a0f1e,#0f172a)' }}>
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg,transparent,#3b82f6,transparent)', boxShadow: '0 0 30px rgba(59,130,246,0.6)' }} />

      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid md:grid-cols-[1.2fr_2fr] gap-14 pb-14">

          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5 mb-4">
              <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" stroke="url(#fl1)" strokeWidth="2.5"/>
                <path d="M12 20h6l3-6 3 10 3-6h4" stroke="url(#fl2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="fl1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#60a5fa"/><stop offset="1" stopColor="#3b82f6"/></linearGradient>
                  <linearGradient id="fl2" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#93c5fd"/><stop offset="1" stopColor="#2563eb"/></linearGradient>
                </defs>
              </svg>
              <span className="text-xl font-extrabold text-white tracking-tight">Digi<span className="text-blue-400">Talk</span></span>
            </a>
            <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-[280px]">
              Building the digital future for ambitious businesses. Premium IT solutions engineered for growth.
            </p>
            <div className="flex gap-2.5">
              {socials.map(s => (
                <a key={s.label} href="#" aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white/40 transition-all duration-200 hover:-translate-y-1 hover:text-white hover:border-blue-500"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#3b82f6'; e.currentTarget.style.border = '1px solid #3b82f6' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)' }}>
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-10">
            {cols.map(col => (
              <div key={col.title}>
                <h4 className="text-sm font-bold text-white mb-4">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map(([label, href]) => (
                    <li key={label}>
                      <a href={href} className="text-sm text-white/40 hover:text-blue-300 transition-colors duration-200">{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        <div className="h-px mb-6" style={{ background: 'rgba(255,255,255,0.07)' }} />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pb-8 text-xs text-white/25">
          <span>© 2025 DigiTalk. All rights reserved.</span>
          <span>Engineered for excellence. Built for growth.</span>
        </div>
      </div>
    </footer>
  )
}
