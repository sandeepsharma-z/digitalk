import { useReveal } from '../../hooks/useReveal'

const features = [
  {
    title: 'Custom Design',
    desc: 'Pixel-perfect designs tailored to your brand. Every layout is built from scratch to reflect your identity.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    title: 'React / Next.js',
    desc: 'Built on modern frameworks for blazing speed, SEO readiness, and seamless user experiences.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="2"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    title: 'CMS Integration',
    desc: 'Headless or traditional CMS setups so your team can manage content without a developer.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    title: 'E-commerce',
    desc: 'Full-featured online stores with secure checkout, inventory management, and conversion optimisation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
  },
  {
    title: 'Performance Optimization',
    desc: 'Core Web Vitals tuning, lazy loading, and CDN strategies that push PageSpeed scores to 99+.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    title: 'API Development',
    desc: 'RESTful and GraphQL APIs that connect your website to any third-party service or internal system.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
]

const steps = [
  { num: '01', title: 'Discovery', desc: 'We deep-dive into your goals, audience, and competitors to set a solid foundation.' },
  { num: '02', title: 'Wireframing', desc: 'Lo-fi and hi-fi wireframes map every user journey before a single line of code is written.' },
  { num: '03', title: 'Development', desc: 'Our engineers build with clean, scalable code following industry best practices.' },
  { num: '04', title: 'Launch', desc: 'Rigorous QA, performance checks, and a smooth go-live with post-launch monitoring.' },
]

const stats = [
  { val: '300+', label: 'Websites Built', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  )},
  { val: '99', label: 'Avg PageSpeed Score', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  )},
  { val: '247%', label: 'Avg Conversion Lift', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
    </svg>
  )},
  { val: '48hr', label: 'Support Response', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
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

export default function WebDevPage() {
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
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547658719-da2b51169166?w=1920&q=85&fit=crop')" }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(10,15,30,0.82)' }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 py-24">
          <div
            ref={heroReveal.ref}
            className="max-w-3xl mx-auto text-center transition-all duration-1000"
            style={{ opacity: heroReveal.visible ? 1 : 0, transform: heroReveal.visible ? 'translateY(0)' : 'translateY(40px)' }}
          >
            <span className="section-badge mb-5 inline-block">Web Development</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5">
              Website Development{' '}
              <span className="gradient-text-light block mt-1">That Converts &amp; Scales</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              We design and engineer high-performance websites that turn visitors into customers — built on modern stacks, obsessively optimised, and ready to grow with your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="btn-primary">Start Your Project</a>
              <a href="/portfolio" className="btn-white">See Our Work</a>
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
            <span className="section-badge-light mb-4 inline-block">What We Deliver</span>
            <h2 className="text-4xl font-bold gradient-text">Everything Your Website Needs</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">From pixel-perfect design to production-grade engineering — we handle every layer of your web presence.</p>
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
            <h2 className="text-4xl font-bold gradient-text">How We Build</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">A proven four-step process that keeps every project on time, on budget, and above expectations.</p>
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
          <span className="section-badge-light mb-4 inline-block">Ready to Build?</span>
          <h2 className="text-4xl font-bold gradient-text mb-4">Start Your Website Project</h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-8">Tell us about your goals and we'll put together a custom plan — no obligation, no jargon.</p>
          <a href="/contact" className="btn-primary">Get a Free Quote</a>
        </div>
      </section>
    </div>
  )
}
