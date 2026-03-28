import { useReveal } from '../../hooks/useReveal'

const features = [
  {
    title: 'iOS Development',
    desc: 'Native Swift applications built for the App Store — smooth, secure, and optimised for every iPhone and iPad.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
  },
  {
    title: 'Android Development',
    desc: 'Kotlin-powered Android apps delivering native performance across thousands of device configurations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M4 16.5v-9A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9a2.5 2.5 0 0 1-2.5 2.5H15l-3 3-3-3H6.5A2.5 2.5 0 0 1 4 16.5z"/>
      </svg>
    ),
  },
  {
    title: 'React Native',
    desc: 'One codebase, two platforms. Ship iOS and Android simultaneously without sacrificing performance or UX.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="2"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    title: 'Flutter',
    desc: 'Google\'s UI toolkit enables expressive, natively compiled apps for mobile, web, and desktop from a single codebase.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    desc: 'Intuitive interfaces crafted through user research and iterative prototyping — beautiful and effortless to use.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
  },
  {
    title: 'App Store Optimization',
    desc: 'ASO strategy covering keywords, screenshots, and ratings management to maximise organic app downloads.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
]

const steps = [
  { num: '01', title: 'Concept', desc: 'We validate your idea, define core features, and map the technical architecture before any design begins.' },
  { num: '02', title: 'UI/UX Design', desc: 'Interactive prototypes tested with real users ensure the experience is intuitive before development starts.' },
  { num: '03', title: 'Development', desc: 'Agile sprints with weekly demos keep you in control of the build from first commit to final feature.' },
  { num: '04', title: 'QA & Launch', desc: 'Comprehensive testing across devices, app store submission, and post-launch analytics setup.' },
]

const stats = [
  { val: '50k+', label: 'App Downloads', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  )},
  { val: '4.9★', label: 'Avg App Rating', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )},
  { val: '120+', label: 'Apps Shipped', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  )},
  { val: '99.9%', label: 'Uptime SLA', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
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

export default function AppDevPage() {
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
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&q=85&fit=crop')" }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(10,15,30,0.82)' }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 py-24">
          <div
            ref={heroReveal.ref}
            className="max-w-3xl mx-auto text-center transition-all duration-1000"
            style={{ opacity: heroReveal.visible ? 1 : 0, transform: heroReveal.visible ? 'translateY(0)' : 'translateY(40px)' }}
          >
            <span className="section-badge mb-5 inline-block">App Development</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5">
              App Development{' '}
              <span className="gradient-text-light block mt-1">Users Love to Use</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              We build iOS, Android, and cross-platform apps that combine elegant design with rock-solid engineering — shipped on time and scaled for millions of users.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="btn-primary">Build Your App</a>
              <a href="/portfolio" className="btn-white">View Our Apps</a>
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
            <span className="section-badge-light mb-4 inline-block">What We Build</span>
            <h2 className="text-4xl font-bold gradient-text">End-to-End App Expertise</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Whether you need a native app or a cross-platform solution, our team has the skills to bring your vision to life.</p>
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
            <h2 className="text-4xl font-bold gradient-text">From Idea to App Store</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">A structured journey that de-risks every stage of development and keeps you informed at every milestone.</p>
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
          <span className="section-badge-light mb-4 inline-block">Let's Build Together</span>
          <h2 className="text-4xl font-bold gradient-text mb-4">Build Your App</h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-8">Share your app idea with us and we'll provide a detailed scope, timeline, and cost estimate — completely free.</p>
          <a href="/contact" className="btn-primary">Get a Free App Quote</a>
        </div>
      </section>
    </div>
  )
}
