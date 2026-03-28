import { useState } from 'react'

const projects = [
  { gradient: 'linear-gradient(135deg,#1e40af,#7c3aed)', tag: 'E-Commerce', title: 'LuxeStore Redesign',    desc: 'Full redesign + custom Shopify dev resulting in 340% conversion uplift', metrics: ['+340% Conversions', '2.1s Load Time'] },
  { gradient: 'linear-gradient(135deg,#065f46,#0891b2)', tag: 'SaaS',       title: 'FinTrack Dashboard',   desc: 'Real-time financial analytics SaaS platform with 10k+ active users',  metrics: ['10k+ Users', '99.9% Uptime'] },
  { gradient: 'linear-gradient(135deg,#7c2d12,#9a3412)', tag: 'Healthcare',  title: 'MedConnect App',       desc: 'Patient-doctor telehealth mobile app with HIPAA compliance',            metrics: ['50k Downloads', '4.9★ Rating'] },
  { gradient: 'linear-gradient(135deg,#1e3a5f,#1d4ed8)', tag: 'Real Estate', title: 'PropertiesHub Portal', desc: 'AI-powered property search platform with virtual tours',                  metrics: ['+280% Leads', '3s Load Time'] },
]

function MockBrowser({ gradient }) {
  return (
    <div className="p-4 rounded-xl border border-white/20" style={{ background: 'rgba(255,255,255,0.10)' }}>
      <div className="h-5 rounded mb-2.5" style={{ background: 'rgba(255,255,255,0.15)' }} />
      <div className="h-12 rounded-lg mb-2.5" style={{ background: 'rgba(255,255,255,0.10)' }} />
      <div className="grid grid-cols-3 gap-2">
        {[0,1,2].map(i => <div key={i} className="h-9 rounded" style={{ background: 'rgba(255,255,255,0.08)' }} />)}
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [idx, setIdx] = useState(0)

  const visible = window.innerWidth > 1024 ? 3 : window.innerWidth > 640 ? 2 : 1
  const max = projects.length - visible

  const prev = () => setIdx(i => i > 0 ? i - 1 : max)
  const next = () => setIdx(i => i < max ? i + 1 : 0)

  return (
    <section className="py-24 bg-[#f8faff] overflow-hidden" id="portfolio">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-badge">Portfolio</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            Work That <span className="gradient-text">Speaks</span> for Itself
          </h2>
          <p className="text-gray-500 mt-3">A selection of our most impactful projects across industries.</p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${idx * (100 / visible)}% - ${idx * 24 / visible}px))` }}>
            {projects.map((p, i) => (
              <div key={i} className="flex-shrink-0 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
                style={{ width: `calc(${100/visible}% - ${24*(visible-1)/visible}px)` }}>
                <div className="h-52 relative p-5" style={{ background: p.gradient }}>
                  <MockBrowser gradient={p.gradient} />
                </div>
                <div className="glass p-5 rounded-b-2xl">
                  <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide text-blue-600 bg-blue-50 mb-2">{p.tag}</span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1.5">{p.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{p.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {p.metrics.map(m => (
                      <span key={m} className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          <button onClick={prev} className="w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200 shadow-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          <button onClick={next} className="w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200 shadow-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
