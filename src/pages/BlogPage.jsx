import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

/* ─── DATA ─────────────────────────────────────────────────── */
const categories = ['All', 'Web Dev', 'SEO', 'Marketing', 'App Dev', 'Design']

const posts = [
  {
    tag: 'Web Dev',
    date: 'Mar 15, 2025',
    read: '5 min',
    title: '10 Website Trends That Will Dominate 2025',
    desc: 'From AI-powered personalisation to glassmorphism and micro-interactions — the design and tech shifts shaping the web this year.',
    gradient: 'linear-gradient(135deg,#1e40af,#3b82f6)',
  },
  {
    tag: 'SEO',
    date: 'Mar 8, 2025',
    read: '7 min',
    title: 'The Ultimate Guide to Technical SEO in 2025',
    desc: 'Core Web Vitals, structured data, and AI-driven search — master the technical signals that separate page-one winners from the rest.',
    gradient: 'linear-gradient(135deg,#065f46,#10b981)',
  },
  {
    tag: 'Marketing',
    date: 'Feb 28, 2025',
    read: '6 min',
    title: 'How to 4x Your ROAS with Smarter Ad Targeting',
    desc: 'Advanced audience segmentation and bid strategies that consistently deliver 4x+ returns across paid search and social channels.',
    gradient: 'linear-gradient(135deg,#7c2d12,#f97316)',
  },
  {
    tag: 'App Dev',
    date: 'Feb 15, 2025',
    read: '8 min',
    title: 'Flutter vs React Native: Which to Choose in 2025',
    desc: 'A deep-dive comparison of performance, developer experience, and ecosystem maturity for cross-platform mobile apps.',
    gradient: 'linear-gradient(135deg,#1e1b4b,#7c3aed)',
  },
  {
    tag: 'Design',
    date: 'Feb 5, 2025',
    read: '4 min',
    title: 'The Psychology of Color in UI Design',
    desc: 'How strategic colour choices influence user trust, emotion, and conversion rates — and how to wield them intentionally.',
    gradient: 'linear-gradient(135deg,#831843,#ec4899)',
  },
  {
    tag: 'SEO',
    date: 'Jan 25, 2025',
    read: '9 min',
    title: 'Local SEO in 2025: The Complete Playbook',
    desc: 'Dominate local search results with Google Business Profile optimisation, citation building, and hyper-local content strategy.',
    gradient: 'linear-gradient(135deg,#134e4a,#0d9488)',
  },
]

/* ─── REVEAL WRAPPER ────────────────────────────────────────── */
function RevealSection({ children, className = '' }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  )
}

/* ─── BLOG CARD ─────────────────────────────────────────────── */
function BlogCard({ post }) {
  return (
    <article className="bg-white rounded-2xl border border-gray-100 shadow-sm card-hover overflow-hidden flex flex-col">
      {/* Gradient header */}
      <div
        className="h-48 flex items-end p-5 relative overflow-hidden"
        style={{ background: post.gradient }}
      >
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23fff\' fill-opacity=\'0.3\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")' }} />
        <span className="relative z-10 inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-white/20 backdrop-blur-sm border border-white/30">
          {post.tag}
        </span>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-gray-400 font-medium mb-3">
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {post.date}
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {post.read} read
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{post.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{post.desc}</p>

        <a
          href="#"
          className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-blue-500 hover:text-blue-700 transition-colors duration-200 group"
        >
          Read More
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </a>
      </div>
    </article>
  )
}

/* ═══════════════════════════════════════════════════════════════
   BLOG PAGE
═══════════════════════════════════════════════════════════════ */
export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [email, setEmail] = useState('')

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter(p => p.tag === activeCategory)

  function handleSubscribe(e) {
    e.preventDefault()
    setEmail('')
  }

  return (
    <main className="w-full">

      {/* ── 1. HERO ──────────────────────────────────────────── */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0a0f1e 0%,#0f172a 50%,#1e1b4b 100%)' }}
      >
        {/* Orbs */}
        <div className="orb w-96 h-96 top-[-80px] left-[-60px] opacity-20" style={{ background: '#3b82f6' }} />
        <div className="orb w-72 h-72 bottom-[-60px] right-[-60px] opacity-15" style={{ background: '#6366f1' }} />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 text-center py-24">
          <span className="section-badge-light">Blog &amp; Insights</span>
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-white mt-4 mb-5 leading-tight">
            Knowledge <span className="gradient-text-light">Hub</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Insights, strategies and expert guides to grow your business digitally.
          </p>
        </div>
      </section>

      {/* ── 2. CATEGORY FILTER ───────────────────────────────── */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={[
                  'shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200',
                  activeCategory === cat
                    ? 'text-white shadow-md'
                    : 'text-gray-600 bg-gray-100 hover:bg-gray-200',
                ].join(' ')}
                style={
                  activeCategory === cat
                    ? { background: 'linear-gradient(135deg,#3b82f6,#2563eb)', boxShadow: '0 4px 14px rgba(59,130,246,0.4)' }
                    : {}
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. BLOG GRID ─────────────────────────────────────── */}
      <section className="bg-[#f8faff] py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          {/* Result count */}
          <RevealSection>
            <p className="text-sm text-gray-400 font-medium mb-8">
              Showing{' '}
              <span className="text-blue-500 font-bold">{filtered.length}</span>{' '}
              {filtered.length === 1 ? 'article' : 'articles'}
              {activeCategory !== 'All' && (
                <> in <span className="text-blue-500 font-bold">{activeCategory}</span></>
              )}
            </p>
          </RevealSection>

          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post, i) => (
                <RevealSection key={post.title}>
                  <div style={{ transitionDelay: `${i * 80}ms` }}>
                    <BlogCard post={post} />
                  </div>
                </RevealSection>
              ))}
            </div>
          ) : (
            <RevealSection>
              <div className="text-center py-20">
                <p className="text-5xl mb-4">📭</p>
                <p className="text-xl font-bold text-gray-700">No articles found</p>
                <p className="text-gray-400 mt-2">Try a different category.</p>
                <button
                  onClick={() => setActiveCategory('All')}
                  className="btn-primary mt-6"
                >
                  Show All Articles
                </button>
              </div>
            </RevealSection>
          )}
        </div>
      </section>

      {/* ── 4. NEWSLETTER ────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1440px] mx-auto px-6">
          <RevealSection>
            <div
              className="rounded-3xl px-8 py-16 text-center max-w-2xl mx-auto"
              style={{ background: 'linear-gradient(135deg,#eff6ff,#dbeafe)' }}
            >
              <span className="section-badge">Newsletter</span>
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mt-2 mb-4">
                Stay in the <span className="gradient-text">Loop</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Get the latest articles, case studies, and digital growth tips delivered straight
                to your inbox. No spam — unsubscribe any time.
              </p>

              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="form-input flex-1 !rounded-full"
                />
                <button type="submit" className="btn-primary shrink-0">
                  Subscribe
                </button>
              </form>

              <p className="text-xs text-gray-400 mt-4">
                Join 2,400+ subscribers. We publish 2–3 times per month.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

    </main>
  )
}
