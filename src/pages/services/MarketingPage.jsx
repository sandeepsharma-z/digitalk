import { useReveal } from '../../hooks/useReveal'

const features = [
  {
    title: 'Social Media Marketing',
    desc: 'Strategy, content creation, and community management across Instagram, LinkedIn, TikTok, and beyond.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    title: 'Google / Meta Ads (PPC)',
    desc: 'Data-driven paid campaigns engineered for maximum ROAS — every dollar tracked, every audience refined.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
  {
    title: 'Content Marketing',
    desc: 'Long-form articles, videos, and infographics that attract, educate, and convert your target audience.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
  },
  {
    title: 'Email Marketing',
    desc: 'Automated nurture sequences and broadcast campaigns that keep your audience engaged and buying.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    title: 'Influencer Marketing',
    desc: 'Curated influencer partnerships that put your brand in front of engaged, highly relevant audiences.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Analytics & Reporting',
    desc: 'Real-time dashboards and plain-English reports that tie every campaign directly to revenue outcomes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
]

const steps = [
  { num: '01', title: 'Research', desc: 'We analyse your market, competitors, and audience segments to find the highest-leverage opportunities.' },
  { num: '02', title: 'Campaign Design', desc: 'Creative assets, targeting parameters, funnels, and budgets are crafted for maximum impact.' },
  { num: '03', title: 'Launch', desc: 'Campaigns go live across selected channels with full tracking and attribution in place from day one.' },
  { num: '04', title: 'Optimize', desc: 'Continuous A/B testing and bid management squeeze every bit of performance from your ad spend.' },
]

const stats = [
  { val: '4.8x', label: 'Avg ROAS', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
    </svg>
  )},
  { val: '2.4M+', label: 'Campaign Reach', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  )},
  { val: '60%', label: 'Avg Lead Increase', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>
    </svg>
  )},
  { val: '$10M+', label: 'Ad Spend Managed', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
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

export default function MarketingPage() {
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
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=85&fit=crop')" }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(10,15,30,0.82)' }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 py-24">
          <div
            ref={heroReveal.ref}
            className="max-w-3xl mx-auto text-center transition-all duration-1000"
            style={{ opacity: heroReveal.visible ? 1 : 0, transform: heroReveal.visible ? 'translateY(0)' : 'translateY(40px)' }}
          >
            <span className="section-badge mb-5 inline-block">Digital Marketing</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5">
              Digital Marketing{' '}
              <span className="gradient-text-light block mt-1">That Drives Revenue</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              From paid ads to organic content, we design and run full-funnel campaigns that consistently generate leads, customers, and measurable return on investment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="btn-primary">Launch Your Campaign</a>
              <a href="/contact" className="btn-white">See Case Studies</a>
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
            <h2 className="text-4xl font-bold gradient-text">Marketing That Moves the Needle</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">We cover every growth channel so your brand reaches the right people, at the right time, with the right message.</p>
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
            <h2 className="text-4xl font-bold gradient-text">From Strategy to Revenue</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">A disciplined four-phase approach that turns marketing spend into predictable, scalable revenue growth.</p>
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
          <span className="section-badge-light mb-4 inline-block">Ready to Scale?</span>
          <h2 className="text-4xl font-bold gradient-text mb-4">Launch Your Campaign</h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-8">Tell us your growth goals and we'll map out a custom marketing strategy designed to hit them — fast.</p>
          <a href="/contact" className="btn-primary">Get a Free Strategy Session</a>
        </div>
      </section>
    </div>
  )
}
