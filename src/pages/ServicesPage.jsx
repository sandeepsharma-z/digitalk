import { useReveal } from '../hooks/useReveal'
import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const services = [
  {
    color: 'blue',
    title: 'Website Development',
    desc: 'Blazing-fast, SEO-ready websites built with modern frameworks that convert visitors into paying customers.',
    features: [
      'Custom design & pixel-perfect development',
      'CMS & e-commerce integration',
      'Core Web Vitals performance tuning',
      'Responsive across all devices',
      'Ongoing maintenance & support',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    color: 'green',
    title: 'SEO Optimization',
    desc: 'Dominate search rankings with data-driven strategies built for sustainable, long-term organic growth.',
    features: [
      'Comprehensive technical SEO audit',
      'Keyword research & content strategy',
      'Authority link-building campaigns',
      'Local SEO & Google Business setup',
      'Monthly ranking & traffic reports',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    color: 'purple',
    title: 'Digital Marketing',
    desc: 'Multi-channel campaigns that amplify your brand, drive engagement, and generate qualified leads at scale.',
    features: [
      'Social media management & ads',
      'Google Ads / PPC campaigns',
      'Email marketing automation',
      'Conversion rate optimisation',
      'Real-time performance dashboards',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    color: 'orange',
    title: 'App Development',
    desc: 'Native and cross-platform mobile apps with intuitive UX that delight users and drive retention.',
    features: [
      'iOS & Android native apps',
      'React Native / Flutter builds',
      'REST & GraphQL API integration',
      'Push notifications & analytics',
      'App Store & Play Store submission',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    color: 'cyan',
    title: 'IT Consulting',
    desc: 'Strategic technology guidance that aligns your digital infrastructure with your business objectives.',
    features: [
      'Digital transformation roadmap',
      'Cloud architecture & migration',
      'Security audits & compliance',
      'Tech stack evaluation & selection',
      'Team training & knowledge transfer',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    color: 'pink',
    title: 'UI/UX Design',
    desc: 'Beautiful, research-backed interfaces that create intuitive user journeys and boost engagement.',
    features: [
      'User research & persona mapping',
      'Wireframing & interactive prototypes',
      'Design system creation',
      'Usability testing & iteration',
      'Figma / Adobe XD deliverables',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
        <path d="M3.05 11a9 9 0 0 1 17.9 0" />
      </svg>
    ),
  },
]

const colorMap = {
  blue:   { icon: 'bg-blue-100 text-blue-600',     badge: 'text-blue-600',     glow: 'rgba(59,130,246,0.12)',   check: '#3b82f6' },
  green:  { icon: 'bg-emerald-100 text-emerald-600', badge: 'text-emerald-600', glow: 'rgba(16,185,129,0.12)',  check: '#10b981' },
  purple: { icon: 'bg-purple-100 text-purple-600',  badge: 'text-purple-600',  glow: 'rgba(139,92,246,0.12)',  check: '#8b5cf6' },
  orange: { icon: 'bg-orange-100 text-orange-600',  badge: 'text-orange-600',  glow: 'rgba(249,115,22,0.12)',  check: '#f97316' },
  cyan:   { icon: 'bg-cyan-100 text-cyan-600',      badge: 'text-cyan-600',    glow: 'rgba(6,182,212,0.12)',   check: '#06b6d4' },
  pink:   { icon: 'bg-pink-100 text-pink-600',      badge: 'text-pink-600',    glow: 'rgba(236,72,153,0.12)',  check: '#ec4899' },
}

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We deep-dive into your business, audience, and goals to uncover the exact opportunities that will drive growth.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'We craft a tailored digital roadmap with clear milestones, timelines, and measurable KPIs.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h.01M7 20v-4M12 20V10M17 20V4M22 20h.01" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Execution',
    desc: 'Our expert team builds, tests, and launches with precision — on time, on budget, and beyond expectations.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Results',
    desc: 'We track, analyse, and continuously optimise — delivering compounding results and transparent reporting.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
]

const plans = [
  {
    name: 'Starter',
    price: '$499',
    period: '/mo',
    desc: 'Perfect for small businesses ready to build their digital presence.',
    popular: false,
    features: [
      '5-page responsive website',
      'Basic SEO setup',
      '2 social media profiles managed',
      'Monthly analytics report',
      'Email support',
      '1 revision round per month',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    price: '$999',
    period: '/mo',
    desc: 'The complete digital engine for growing businesses that demand results.',
    popular: true,
    features: [
      'Custom website (up to 15 pages)',
      'Full SEO + content strategy',
      'Google Ads + social campaigns',
      'Weekly performance reports',
      'Priority support (24h response)',
      'A/B testing & CRO',
    ],
    cta: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'Tailored solutions for large organisations with complex needs.',
    popular: false,
    features: [
      'Unlimited pages & custom features',
      'Dedicated project manager',
      'Full-suite digital marketing',
      'App development included',
      'SLA-backed support',
      'Quarterly strategy review',
    ],
    cta: 'Contact Us',
  },
]

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */
function ServiceCard({ service, delay }) {
  const { ref, visible } = useReveal()
  const c = colorMap[service.color]
  return (
    <div
      ref={ref}
      className={`glass rounded-2xl p-7 group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: delay }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${c.glow}, transparent 65%)` }} />

      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${c.icon}`}>
        {service.icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-4">{service.desc}</p>
      <ul className="space-y-2">
        {service.features.map(f => (
          <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
            <svg className="mt-0.5 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c.check} strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
    </div>
  )
}

function StepCard({ step, delay }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-7 relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-100 hover:shadow-lg ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: delay }}
    >
      <span className="text-6xl font-extrabold text-gray-50 absolute top-4 right-6 select-none pointer-events-none leading-none">{step.num}</span>
      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
        {step.icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
    </div>
  )
}

function PricingCard({ plan, delay }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={`rounded-2xl p-8 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 ${plan.popular
        ? 'text-white'
        : 'bg-white border border-gray-100 shadow-sm hover:shadow-blue-50 hover:shadow-lg'
      } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={plan.popular
        ? { transitionDelay: delay, background: 'linear-gradient(135deg,#1d4ed8 0%,#3b82f6 60%,#60a5fa 100%)', boxShadow: '0 20px 60px rgba(59,130,246,0.40)' }
        : { transitionDelay: delay }
      }
    >
      {plan.popular && (
        <span className="absolute top-5 right-5 bg-white text-blue-600 text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}

      <p className={`text-sm font-bold uppercase tracking-widest mb-1 ${plan.popular ? 'text-blue-100' : 'text-blue-500'}`}>{plan.name}</p>
      <div className="flex items-end gap-1 mb-2">
        <span className={`text-5xl font-extrabold tracking-tight ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
        {plan.period && <span className={`text-base font-medium mb-1.5 ${plan.popular ? 'text-blue-100' : 'text-gray-400'}`}>{plan.period}</span>}
      </div>
      <p className={`text-sm mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>{plan.desc}</p>

      <ul className="space-y-3 mb-8">
        {plan.features.map(f => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <svg className="shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={plan.popular ? '#bfdbfe' : '#3b82f6'} strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className={plan.popular ? 'text-blue-50' : 'text-gray-600'}>{f}</span>
          </li>
        ))}
      </ul>

      {plan.name === 'Enterprise' ? (
        <a href="#contact" className={`block text-center py-3.5 rounded-full font-semibold text-sm transition-all duration-300 border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white`}>
          {plan.cta}
        </a>
      ) : plan.popular ? (
        <a href="#contact" className="block text-center py-3.5 rounded-full font-semibold text-sm transition-all duration-300 bg-white text-blue-600 hover:-translate-y-1 hover:shadow-lg">
          Get Started
        </a>
      ) : (
        <a href="#contact" className="block text-center py-3.5 rounded-full font-semibold text-sm transition-all duration-300 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white">
          {plan.cta}
        </a>
      )}
    </div>
  )
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function ServicesPage() {
  const heroReveal    = useReveal()
  const servicesReveal = useReveal()
  const howReveal     = useReveal()
  const pricingReveal = useReveal()
  const ctaReveal     = useReveal()

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden pt-32 pb-24 text-center"
        style={{ background: 'linear-gradient(135deg,#0a0f1e 0%,#0f172a 50%,#1e1b4b 100%)' }}
      >
        {/* Orbs */}
        <div className="orb w-[600px] h-[600px] -top-48 -left-40 pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(59,130,246,0.18),transparent 70%)' }} />
        <div className="orb w-[500px] h-[500px] -bottom-36 -right-32 pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(139,92,246,0.14),transparent 70%)' }} />
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

        <div
          ref={heroReveal.ref}
          className={`max-w-[1440px] mx-auto px-6 relative z-10 transition-all duration-700 ${heroReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="section-badge-light">Our Services</span>
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mt-2 mb-5">
            Premium <span className="gradient-text-light">Digital Services</span><br className="hidden sm:block" /> That Drive Real Growth
          </h1>
          <p className="text-white/65 text-base lg:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            From pixel-perfect websites to full-scale digital marketing campaigns — we deliver end-to-end solutions that transform businesses and generate measurable ROI.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#contact" className="btn-primary">
              Get Free Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <Link to="/portfolio" className="btn-white-outline">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-24 bg-[#f8faff] relative overflow-hidden" id="services">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        <div className="orb w-[500px] h-[500px] -top-32 -right-24 pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(59,130,246,0.06),transparent 70%)' }} />

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div
            ref={servicesReveal.ref}
            className={`text-center mb-16 transition-all duration-700 ${servicesReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="section-badge">What We Do</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
              Six Ways We <span className="gradient-text">Accelerate</span> Your Business
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              Every service is backed by deep expertise, proven processes, and a relentless focus on your results.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.title} service={s} delay={`${i * 80}ms`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 bg-white relative overflow-hidden" id="how-it-works">
        <div className="orb w-[400px] h-[400px] top-0 left-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(59,130,246,0.05),transparent 70%)' }} />

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div
            ref={howReveal.ref}
            className={`text-center mb-16 transition-all duration-700 ${howReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="section-badge">Our Process</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
              How We <span className="gradient-text">Deliver</span> Results
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              A streamlined four-step process that takes you from idea to measurable impact — with full transparency every step of the way.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <StepCard key={step.num} step={step} delay={`${i * 100}ms`} />
            ))}
          </div>

          {/* Connector line — desktop only */}
          <div className="hidden lg:flex items-center justify-between max-w-3xl mx-auto mt-8 px-24 -translate-y-4 pointer-events-none select-none">
            {[0,1,2].map(i => (
              <div key={i} className="flex-1 h-px bg-gradient-to-r from-blue-200 to-blue-400 mx-2" />
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-24 bg-[#f8faff] relative overflow-hidden" id="pricing">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div
            ref={pricingReveal.ref}
            className={`text-center mb-16 transition-all duration-700 ${pricingReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="section-badge">Pricing</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
              Transparent <span className="gradient-text">Pricing</span> for Every Stage
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              No hidden fees. No lock-in contracts. Just straightforward value that scales with your ambition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <PricingCard key={plan.name} plan={plan} delay={`${i * 100}ms`} />
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">
            All plans include a free 30-minute strategy call. Cancel anytime.
          </p>
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
          <span className="section-badge-light">Ready to Grow?</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mt-2 mb-5">
            Let's Build Something <span className="gradient-text-light">Powerful</span> Together
          </h2>
          <p className="text-white/65 text-base max-w-lg mx-auto mb-10">
            Join 100+ businesses that chose DigiTalk to power their digital transformation. Your success story starts here — with a free consultation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a href="#contact" className="btn-white">
              Get Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <Link to="/portfolio" className="btn-white-outline">
              See Our Work
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {['Free consultation', 'No lock-in contracts', '100% satisfaction guaranteed'].map(t => (
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
