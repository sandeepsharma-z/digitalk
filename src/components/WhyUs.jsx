import { useReveal } from '../hooks/useReveal'

const items = [
  { emoji: '🎨', title: 'Modern UI/UX',      desc: 'Designs crafted for optimal user psychology and conversion architecture.' },
  { emoji: '📈', title: 'Business Focus',    desc: 'Every decision driven by ROI — we grow when your business grows.' },
  { emoji: '🔍', title: 'SEO Ready',         desc: 'Search optimization baked into every project from architecture to content.' },
  { emoji: '⚡', title: 'Scalable Tech',     desc: 'Future-proof stacks that scale from startup to enterprise-level demands.' },
  { emoji: '🔒', title: 'Secure & Reliable', desc: 'Security-first development with 99.9% uptime SLA and proactive monitoring.' },
  { emoji: '🤝', title: 'Dedicated Support', desc: 'Dedicated PM and 24/7 support team — never left alone after launch.' },
]

function WhyCard({ emoji, title, desc, delay }) {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref}
      className={`glass rounded-2xl p-7 text-center card-hover transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: delay }}>
      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">{emoji}</div>
      <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  )
}

export default function WhyUs() {
  return (
    <section className="py-24 bg-[#f8faff]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-badge">Why DigiTalk</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            The <span className="gradient-text">Competitive Edge</span> That Sets Us Apart
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => <WhyCard key={item.title} {...item} delay={`${i * 80}ms`} />)}
        </div>
      </div>
    </section>
  )
}
