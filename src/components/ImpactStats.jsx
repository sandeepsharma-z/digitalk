import { useCounter } from '../hooks/useReveal'

const stats = [
  { target: 100,  suffix: '+',  label: 'Happy Clients' },
  { target: 500,  suffix: '+',  label: 'Projects Delivered' },
  { target: 380,  suffix: '%',  label: 'Average Traffic Growth' },
  { target: 50,   suffix: 'M+', label: 'Revenue Generated' },
]

function ImpactNum({ target, suffix, label }) {
  const { ref, count } = useCounter(target, 2000)
  return (
    <div ref={ref} className="text-center">
      <div className="flex items-end justify-center gap-0.5">
        <span className="text-5xl lg:text-6xl font-extrabold text-white leading-none">{count}</span>
        <span className="text-3xl lg:text-4xl font-extrabold text-blue-300 leading-none">{suffix}</span>
      </div>
      <p className="text-sm text-white/60 mt-2 font-medium">{label}</p>
    </div>
  )
}

export default function ImpactStats() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#0f172a,#1e3a5f,#1e40af)' }}>
      <div className="orb w-[600px] h-[600px] -top-48 -left-36 animate-blob1 pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(59,130,246,0.30),transparent 70%)' }} />
      <div className="orb w-[500px] h-[500px] -bottom-36 -right-24 animate-blob2 pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(29,78,216,0.25),transparent 70%)' }} />
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="section-badge-light">Our Impact</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Numbers That <span className="gradient-text-light">Tell Our Story</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map(s => <ImpactNum key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  )
}
