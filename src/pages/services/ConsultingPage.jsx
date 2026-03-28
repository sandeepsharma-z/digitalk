import { useReveal } from '../../hooks/useReveal'

const features = [
  {
    title: 'Digital Strategy',
    desc: 'We assess where you are and chart the clearest path to where you want to be — with a technology plan tied to real business outcomes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M2 20h.01M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 4v16"/>
      </svg>
    ),
  },
  {
    title: 'Technology Roadmap',
    desc: 'A phased, prioritised technology roadmap that aligns your IT investments with your organisation\'s strategic goals.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    ),
  },
  {
    title: 'Cloud Migration',
    desc: 'Seamless migration to AWS, Azure, or GCP — minimising downtime, reducing costs, and unlocking cloud-native capabilities.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
  },
  {
    title: 'Cybersecurity Review',
    desc: 'Thorough vulnerability assessments and actionable remediation plans to protect your data and maintain compliance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'Team Training',
    desc: 'Practical workshops and ongoing coaching that upskill your team on the tools and processes that matter most.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Vendor Management',
    desc: 'We evaluate, negotiate, and manage your technology vendors so you get the best value and accountability from every contract.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
]

const steps = [
  { num: '01', title: 'Assessment', desc: 'We audit your current technology stack, processes, and team capabilities to establish a clear baseline.' },
  { num: '02', title: 'Roadmap', desc: 'A detailed, phased plan is produced — prioritised by impact and aligned to your budget and timeline.' },
  { num: '03', title: 'Implementation', desc: 'Our consultants work alongside your team to execute the roadmap with hands-on support at every step.' },
  { num: '04', title: 'Ongoing Advisory', desc: 'Regular check-ins and quarterly reviews keep your strategy on track as your business evolves.' },
]

const stats = [
  { val: '100+', label: 'Businesses Advised', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  )},
  { val: '$5M+', label: 'Cost Savings Identified', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  )},
  { val: '40%', label: 'Avg Efficiency Gain', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  )},
  { val: '5★', label: 'Consulting Rating', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
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

export default function ConsultingPage() {
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
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85&fit=crop')" }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(10,15,30,0.82)' }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 py-24">
          <div
            ref={heroReveal.ref}
            className="max-w-3xl mx-auto text-center transition-all duration-1000"
            style={{ opacity: heroReveal.visible ? 1 : 0, transform: heroReveal.visible ? 'translateY(0)' : 'translateY(40px)' }}
          >
            <span className="section-badge mb-5 inline-block">IT Consulting</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5">
              IT Consulting{' '}
              <span className="gradient-text-light block mt-1">Strategy That Works</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              We help businesses cut through the technology noise, eliminate inefficiencies, and build a digital foundation that supports long-term growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="btn-primary">Book a Strategy Call</a>
              <a href="/contact" className="btn-white">Download Our Approach</a>
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
            <h2 className="text-4xl font-bold gradient-text">Expert Guidance, Real Results</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Our consultants bring cross-industry experience to every engagement — practical advice that you can actually implement.</p>
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
            <h2 className="text-4xl font-bold gradient-text">How We Work With You</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">A collaborative engagement model that delivers clarity, momentum, and measurable improvements at every phase.</p>
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
          <span className="section-badge-light mb-4 inline-block">Ready to Transform?</span>
          <h2 className="text-4xl font-bold gradient-text mb-4">Book a Strategy Call</h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-8">A free 45-minute strategy session where we identify your biggest opportunities and lay out a clear action plan.</p>
          <a href="/contact" className="btn-primary">Book Your Free Call</a>
        </div>
      </section>
    </div>
  )
}
