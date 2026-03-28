import { useReveal } from '../hooks/useReveal'

const services = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    color: 'blue',
    title: 'Website Development',
    desc: 'Blazing-fast, SEO-optimized websites built with modern frameworks that convert visitors into customers.',
    features: ['Custom Design & Development', 'CMS Integration', 'Performance Optimization'],
    href: '#webdev',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    color: 'green',
    title: 'SEO Optimization',
    desc: 'Dominate search rankings with data-driven strategies built for long-term, sustainable organic growth.',
    features: ['Technical SEO Audit', 'Keyword Strategy', 'Link Building'],
    href: '#seo',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    color: 'purple',
    title: 'Digital Marketing',
    desc: 'Multi-channel campaigns that amplify your brand, drive engagement, and generate qualified leads at scale.',
    features: ['Social Media Marketing', 'PPC & Google Ads', 'Content Strategy'],
    href: '#marketing',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
      </svg>
    ),
    color: 'orange',
    title: 'App Development',
    desc: 'Native and cross-platform mobile apps with intuitive UI/UX design that keeps users coming back.',
    features: ['iOS & Android Apps', 'React Native / Flutter', 'API Integration'],
    href: '#apps',
  },
]

const colors = {
  blue:   { icon: 'bg-blue-100 text-blue-600',   glow: 'rgba(59,130,246,0.12)',  link: 'text-blue-600' },
  green:  { icon: 'bg-emerald-100 text-emerald-600', glow: 'rgba(16,185,129,0.10)', link: 'text-emerald-600' },
  purple: { icon: 'bg-purple-100 text-purple-600',  glow: 'rgba(139,92,246,0.10)', link: 'text-purple-600' },
  orange: { icon: 'bg-orange-100 text-orange-600',  glow: 'rgba(249,115,22,0.10)', link: 'text-orange-600' },
}

function ServiceCard({ icon, color, title, desc, features, href, delay }) {
  const { ref, visible } = useReveal()
  const c = colors[color]
  return (
    <div
      ref={ref}
      className={`glass rounded-2xl p-8 group relative overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-2 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: delay, boxShadow: '0 4px 24px rgba(59,130,246,0.06)' }}
    >
      <div className={`w-13 h-13 rounded-xl flex items-center justify-center mb-5 ${c.icon}`} style={{ width: 52, height: 52 }}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-4">{desc}</p>
      <ul className="space-y-1.5 mb-5">
        {features.map(f => (
          <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
            <span className={`text-xs ${c.link}`}>→</span>{f}
          </li>
        ))}
      </ul>
      <a href={href} className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 ${c.link} group-hover:gap-3`}>
        Learn More
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${c.glow}, transparent 70%)` }} />
    </div>
  )
}

export default function Services() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="services">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="orb w-[500px] h-[500px] -top-32 -right-24 animate-blob1 pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(59,130,246,0.07),transparent 70%)' }} />
      <div className="orb w-[400px] h-[400px] -bottom-24 -left-20 animate-blob2 pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(139,92,246,0.05),transparent 70%)' }} />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="section-badge">What We Do</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Premium <span className="gradient-text">IT Services</span> That Deliver Results
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            From concept to deployment — we cover every digital need your business has with expertise and precision.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => <ServiceCard key={s.title} {...s} delay={`${i * 100}ms`} />)}
        </div>
      </div>
    </section>
  )
}
