const cols = [
  { title: 'Services', links: [['Website Development','#webdev'],['SEO Optimization','#seo'],['Digital Marketing','#marketing'],['App Development','#apps'],['IT Consulting','#contact']] },
  { title: 'Company',  links: [['About Us','#about'],['Portfolio','#portfolio'],['Testimonials','#testimonials'],['Careers','#'],['Press','#']] },
  { title: 'Contact',  links: [['hello@digitalk.io','mailto:hello@digitalk.io'],['+1 (555) 123-4567','tel:+15551234567'],['Support Center','#'],['Privacy Policy','#'],['Terms of Service','#']] },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-16" style={{ background: 'linear-gradient(180deg,#0a0f1e,#0f172a)' }}>
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg,transparent,#3b82f6,transparent)', boxShadow: '0 0 30px rgba(59,130,246,0.6)' }} />

      <div className="max-w-6xl mx-auto px-6">
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
              {['in','𝕏','▶','📸'].map((s, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white/40 text-xs font-bold transition-all duration-200 hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#3b82f6'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.border = '1px solid #3b82f6' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)' }}>
                  {s}
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
