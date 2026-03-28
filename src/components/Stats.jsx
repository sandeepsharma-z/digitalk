import { useCounter } from '../hooks/useReveal'

const stats = [
  { icon: '👥', label: 'Happy Clients',      target: 100, suffix: '+',  color: 'blue',   bar: 85 },
  { icon: '🖥️', label: 'Projects Completed', target: 500, suffix: '+',  color: 'purple', bar: 92 },
  { icon: '⭐', label: 'Years Experience',   target: 5,   suffix: '+',  color: 'green',  bar: 75 },
  { icon: '💯', label: 'Client Satisfaction',target: 98,  suffix: '%',  color: 'orange', bar: 98 },
]

const barColors = {
  blue:   'from-blue-400 to-blue-500',
  purple: 'from-purple-400 to-purple-500',
  green:  'from-emerald-400 to-emerald-500',
  orange: 'from-orange-400 to-orange-500',
}

function StatCard({ icon, label, target, suffix, color, bar }) {
  const { ref, count } = useCounter(target)
  return (
    <div ref={ref} className="glass rounded-2xl p-7 text-center card-hover">
      <div className="text-3xl mb-3">{icon}</div>
      <div className="flex items-end justify-center gap-0.5">
        <span className="text-4xl font-extrabold text-gray-900 leading-none">{count}</span>
        <span className="text-2xl font-extrabold text-blue-500 leading-none">{suffix}</span>
      </div>
      <p className="text-sm text-gray-500 mt-2 mb-3 font-medium">{label}</p>
      <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full bg-gradient-to-r ${barColors[color]} rounded-full`} style={{ width: `${bar}%` }} />
      </div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-14 bg-white relative z-10">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map(s => <StatCard key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  )
}
