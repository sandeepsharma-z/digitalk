import { useReveal } from '../../hooks/useReveal'

const features = [
  {
    title: 'Technical SEO Audit',
    desc: 'Crawl errors, Core Web Vitals, structured data, and site architecture — we surface every issue holding you back.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    ),
  },
  {
    title: 'Keyword Research',
    desc: 'Data-driven keyword mapping that targets high-intent queries your ideal customers are already searching.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    title: 'On-Page Optimization',
    desc: 'Title tags, meta descriptions, heading hierarchy, internal linking — every on-page signal dialled in.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    title: 'Link Building',
    desc: 'White-hat outreach campaigns that earn authoritative backlinks and build lasting domain authority.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
  },
  {
    title: 'Local SEO',
    desc: 'Google Business Profile optimisation, local citations, and geo-targeted content to dominate your area.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    title: 'SEO Reporting',
    desc: 'Clear monthly reports showing rankings, traffic, and ROI so you always know exactly what your investment is delivering.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
]

const steps = [
  { num: '01', title: 'Audit', desc: 'A full technical and content audit uncovers every gap between you and the first page.' },
  { num: '02', title: 'Strategy', desc: 'We build a prioritised roadmap targeting quick wins and long-term authority gains.' },
  { num: '03', title: 'Execution', desc: 'On-page fixes, content creation, and link outreach executed by dedicated SEO specialists.' },
  { num: '04', title: 'Monitor & Scale', desc: 'Weekly rank tracking and monthly reviews ensure we scale what works and pivot fast.' },
]

const stats = [
  { val: '1,200+', label: 'Keywords Ranked', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  )},
  { val: '380%', label: 'Avg Traffic Growth', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
    </svg>
  )},
  { val: '4mo', label: 'Avg to Page 1', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  )},
  { val: '98%', label: 'Client Retention', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )},
]

function FeatureCard({ feature, index }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className="glass rounded-2xl p-7 flex gap-5 items-start transition-all duration-700"
      style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)', transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center text-blue-500 flex-shrink-0">
        {feature.icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 text-lg mb-1">{feature.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
      </div>
    </div>
  )
}

function StatCard({ stat, index }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className="glass-dark rounded-2xl p-8 text-center transition-all duration-700"
      style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(28px)', transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex justify-center mb-3 text-blue-400">{stat.icon}</div>
      <div className="text-4xl font-bold gradient-text-light mb-1">{stat.val}</div>
      <div className="text-slate-400 text-sm">{stat.label}</div>
    </div>
  )
}

export default function SeoPage() {
  const heroReveal = useReveal()
  const featReveal = useReveal()
  const procReveal = useReveal()
  const ctaReveal = useReveal()

  return (
    <div>
      {/* 1. Hero */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=85&fit=crop')" }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(10,15,30,0.82)' }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 py-24">
          <div
            ref={heroReveal.ref}
            className="max-w-3xl mx-auto text-center transition-all duration-1000"
            style={{ opacity: heroReveal.visible ? 1 : 0, transform: heroReveal.visible ? 'translateY(0)' : 'translateY(40px)' }}
          >
            <span className="section-badge mb-5 inline-block">SEO &amp; Growth</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5">
              SEO Optimization{' '}
              <span className="gradient-text-light block mt-1">Rank #1, Stay #1</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              We combine technical precision, content strategy, and authority building to put your brand at the top of search results — and keep it there.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="btn-primary">Boost Your Rankings</a>
              <a href="/contact" className="btn-white">Get a Free Audit</a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Features */}
      <section className="py-20 bg-[#f8faff]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div
            ref={featReveal.ref}
            className="text-center mb-14 transition-all duration-700"
            style={{ opacity: featReveal.visible ? 1 : 0, transform: featReveal.visible ? 'translateY(0)' : 'translateY(24px)' }}
          >
            <span className="section-badge-light mb-4 inline-block">What We Do</span>
            <h2 className="text-4xl font-bold gradient-text">Full-Stack SEO Services</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Every dimension of search engine optimisation covered under one roof, by specialists who live and breathe rankings.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => <FeatureCard key={f.title} feature={f} index={i} />)}
          </div>
        </div>
      </section>

      {/* 3. Process */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div
            ref={procReveal.ref}
            className="text-center mb-14 transition-all duration-700"
            style={{ opacity: procReveal.visible ? 1 : 0, transform: procReveal.visible ? 'translateY(0)' : 'translateY(24px)' }}
          >
            <span className="section-badge-light mb-4 inline-block">Our Process</span>
            <h2 className="text-4xl font-bold gradient-text">How We Rank You</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">A transparent, repeatable process that delivers consistent ranking growth month after month.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.num} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-gradient-to-r from-blue-300 to-indigo-200" />
                )}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-extrabold mx-auto mb-4 shadow-lg">
                  {step.num}
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why DigiTalk */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-badge-light mb-5 inline-block">Why DigiTalk</span>
              <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-5">
                Results You Can <span className="gradient-text">Measure & Trust</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                We don't just deliver projects — we deliver outcomes. Every engagement is driven by data, transparent communication, and an obsession with your growth.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Dedicated project manager from day one',
                  'Weekly progress reports and live dashboards',
                  'Post-launch support included in every package',
                  '100% satisfaction guarantee — we fix it until it is right'
                ].map(point => (
                  <li key={point} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{point}</span>
                  </li>
                ))}
              </ul>
              <a href="/contact" className="btn-primary inline-flex">Book a Free Consultation</a>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=85&fit=crop"
                  alt="DigiTalk team" className="w-full object-cover" style={{ height: '420px' }} />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100">
                <div className="text-2xl font-extrabold text-blue-600">100+</div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">Happy Clients</div>
              </div>
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100">
                <div className="text-2xl font-extrabold text-blue-600">4.9★</div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Stats */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg,#0a0f1e,#0f172a)' }}>
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Our <span className="gradient-text-light">Numbers</span> Speak for Themselves</h2>
            <p className="text-white/40 text-sm mt-3 max-w-md mx-auto">Real results from real projects — measurable impact across every client we work with.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => <StatCard key={s.label} stat={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 bg-[#f8faff] text-center">
        <div
          ref={ctaReveal.ref}
          className="max-w-[1440px] mx-auto px-6 transition-all duration-700"
          style={{ opacity: ctaReveal.visible ? 1 : 0, transform: ctaReveal.visible ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <span className="section-badge-light mb-4 inline-block">Let's Grow Together</span>
          <h2 className="text-4xl font-bold gradient-text mb-4">Boost Your Rankings</h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-8">Get a complimentary SEO audit and find out exactly what it takes to reach position one for your most valuable keywords.</p>
          <a href="/contact" className="btn-primary">Get Your Free SEO Audit</a>
        </div>
      </section>
    </div>
  )
}
