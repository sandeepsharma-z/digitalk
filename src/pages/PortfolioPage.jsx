import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const TABS = ['All', 'Web Dev', 'Mobile App', 'SEO', 'Marketing']

const projects = [
  {
    category: 'Web Dev',
    title: 'TechVentures Website',
    stat: '+247% Conversions',
    desc: 'Complete brand overhaul and custom CMS build for a B2B SaaS company — redesigned the full marketing site with performance-optimised pages that tripled demo requests.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80&fit=crop',
  },
  {
    category: 'Mobile App',
    title: 'HealthBridge App',
    stat: '50k+ Downloads',
    desc: 'Patient-centred telehealth app for iOS & Android connecting patients with doctors in under 60 seconds. Achieved 4.8-star rating across both stores within 3 months of launch.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&fit=crop',
  },
  {
    category: 'SEO',
    title: 'GlobalTrade SEO',
    stat: '+380% Organic Traffic',
    desc: 'Technical SEO overhaul plus 12-month content strategy for an international B2B trade platform — ranking #1 for 40+ high-value keywords across 6 countries.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&fit=crop',
  },
  {
    category: 'Marketing',
    title: 'LuxeRetail Marketing',
    stat: '4.2x ROAS',
    desc: 'Full-funnel paid social and Google Shopping campaigns for a luxury e-commerce brand — scaled monthly revenue from $80k to $340k in six months.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80&fit=crop',
  },
  {
    category: 'Web Dev',
    title: 'FinanceFlow Dashboard',
    stat: '10k+ Active Users',
    desc: 'Real-time financial analytics dashboard built with React and a custom Node.js backend. Features live market data, AI-powered insights, and multi-user permissions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&fit=crop',
  },
  {
    category: 'Mobile App',
    title: 'FoodieApp Mobile',
    stat: '+310% Daily Orders',
    desc: 'On-demand food discovery and ordering app with real-time GPS tracking, push notifications, and seamless Stripe payment integration across iOS and Android.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80&fit=crop',
  },
]

const stats = [
  {
    value: '500+',
    label: 'Projects Delivered',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    value: '100+',
    label: 'Happy Clients',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: '$50M+',
    label: 'Revenue Generated',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6" />
      </svg>
    ),
  },
  {
    value: '98%',
    label: 'Satisfaction Rate',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
]

const categoryColors = {
  'Web Dev':    { bg: 'bg-blue-50',   text: 'text-blue-600'   },
  'Mobile App': { bg: 'bg-purple-50', text: 'text-purple-600' },
  'SEO':        { bg: 'bg-emerald-50', text: 'text-emerald-600' },
  'Marketing':  { bg: 'bg-orange-50', text: 'text-orange-600'  },
}

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */
function ProjectCard({ project, delay }) {
  const { ref, visible } = useReveal()
  const c = categoryColors[project.category] || { bg: 'bg-gray-50', text: 'text-gray-600' }

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-50 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: delay }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href="#contact"
            className="bg-white text-blue-600 text-sm font-bold px-5 py-2.5 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-blue-600 hover:text-white"
          >
            View Case Study
          </a>
        </div>
        {/* Stat badge */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-blue-600 text-xs font-extrabold px-3 py-1.5 rounded-full shadow-sm">
          {project.stat}
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <span className={`inline-block text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${c.bg} ${c.text}`}>
          {project.category}
        </span>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">{project.desc}</p>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:gap-3 transition-all duration-200"
        >
          View Case Study
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  )
}

function StatCard({ stat, delay }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={`glass rounded-2xl p-7 text-center transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: delay }}
    >
      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
        {stat.icon}
      </div>
      <p className="text-4xl font-extrabold tracking-tight text-gray-900 mb-1">{stat.value}</p>
      <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
    </div>
  )
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('All')

  const heroReveal  = useReveal()
  const tabsReveal  = useReveal()
  const statsReveal = useReveal()
  const ctaReveal   = useReveal()

  const filtered = activeTab === 'All'
    ? projects
    : projects.filter(p => p.category === activeTab)

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden pt-32 pb-24 text-center"
        style={{ background: 'linear-gradient(135deg,#0a0f1e 0%,#0f172a 50%,#1e1b4b 100%)' }}
      >
        <div className="orb w-[600px] h-[600px] -top-48 -left-40 pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(59,130,246,0.18),transparent 70%)' }} />
        <div className="orb w-[500px] h-[500px] -bottom-36 -right-32 pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(139,92,246,0.14),transparent 70%)' }} />
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

        <div
          ref={heroReveal.ref}
          className={`max-w-[1440px] mx-auto px-6 relative z-10 transition-all duration-700 ${heroReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="section-badge-light">Our Portfolio</span>
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mt-2 mb-5">
            Work That <span className="gradient-text-light">Speaks</span><br className="hidden sm:block" /> for Itself
          </h1>
          <p className="text-white/65 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Every project is a partnership. We don't just build — we strategise, execute, and deliver results that move the needle. Explore what we've built for clients around the world.
          </p>

          {/* Quick stats row */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
            {['500+ Projects', '100+ Clients', '$50M+ Revenue Generated'].map(t => (
              <span key={t} className="flex items-center gap-2 text-sm text-white/70 font-medium">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER + GRID ── */}
      <section className="py-24 bg-[#f8faff] relative overflow-hidden" id="work">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">

          {/* Filter Tabs */}
          <div
            ref={tabsReveal.ref}
            className={`flex flex-wrap items-center justify-center gap-2 mb-14 transition-all duration-700 ${tabsReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === tab
                  ? 'text-white shadow-lg shadow-blue-200'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50'
                }`}
                style={activeTab === tab
                  ? { background: 'linear-gradient(135deg,#3b82f6,#2563eb)' }
                  : {}
                }
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} delay={`${i * 80}ms`} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <svg className="mx-auto mb-4 opacity-40" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
              <p className="text-lg font-semibold">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── STATS ROW ── */}
      <section className="py-20 bg-white relative overflow-hidden" id="stats">
        <div className="orb w-[400px] h-[400px] top-0 right-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(59,130,246,0.05),transparent 70%)' }} />

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div
            ref={statsReveal.ref}
            className={`text-center mb-12 transition-all duration-700 ${statsReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="section-badge">By The Numbers</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
              Results That <span className="gradient-text">Matter</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <StatCard key={s.label} stat={s} delay={`${i * 80}ms`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-24 relative overflow-hidden text-center"
        style={{ background: 'linear-gradient(135deg,#0a0f1e 0%,#0f172a 50%,#1e1b4b 100%)' }}
      >
        <div className="orb w-[600px] h-[600px] -top-48 -left-48 pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(96,165,250,0.20),transparent 70%)' }} />
        <div className="orb w-[500px] h-[500px] -bottom-40 -right-36 pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(59,130,246,0.22),transparent 70%)' }} />
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

        <div
          ref={ctaReveal.ref}
          className={`max-w-3xl mx-auto px-6 relative z-10 transition-all duration-700 ${ctaReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="section-badge-light">Start Your Project</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mt-2 mb-5">
            Ready to Become Our<br />
            <span className="gradient-text-light">Next Success Story?</span>
          </h2>
          <p className="text-white/65 text-base max-w-lg mx-auto mb-10">
            Tell us about your project and we'll put together a free strategy tailored to your goals — no strings attached.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a href="#contact" className="btn-white">
              Start Your Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="#contact" className="btn-white-outline">
              Free Consultation
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {['Free strategy call', 'No lock-in contracts', '100% satisfaction guaranteed'].map(t => (
              <span key={t} className="flex items-center gap-2 text-sm text-white/65 font-medium">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
