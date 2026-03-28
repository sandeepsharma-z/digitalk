import { useReveal } from '../hooks/useReveal'

const points = [
  ['Performance-First', 'Every line of code optimized for speed and measurable results'],
  ['Design-Led Thinking', 'Interfaces that inspire trust and drive user action'],
  ['Full-Stack Capability', 'From strategy to deployment and beyond'],
  ['Growth Partners', 'We grow when your business grows'],
]

const teamColors = ['from-blue-400 to-blue-600', 'from-emerald-400 to-emerald-600', 'from-purple-400 to-purple-600', 'from-orange-400 to-orange-600']

export default function About() {
  const { ref: r1, visible: v1 } = useReveal()
  const { ref: r2, visible: v2 } = useReveal()

  return (
    <section className="py-24 bg-[#f8faff] relative overflow-hidden" id="about">
      {/* Orbs */}
      <div className="orb w-[400px] h-[400px] -top-24 right-[10%] animate-blob1 pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(59,130,246,0.10),transparent 70%)' }} />
      <div className="orb w-[300px] h-[300px] -bottom-12 left-[5%] animate-blob2 pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(139,92,246,0.08),transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Text */}
          <div ref={r1} className={`transition-all duration-700 ${v1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="section-badge">About DigiTalk</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-gray-900 mb-5">
              We Engineer <span className="gradient-text">Digital Success</span> for Ambitious Brands
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              DigiTalk is a premier IT agency built for the modern era. We blend cutting-edge technology with strategic thinking to help businesses thrive in an increasingly digital world.
            </p>
            <div className="space-y-3.5 mb-8">
              {points.map(([title, desc]) => (
                <div key={title} className="flex gap-3 items-start">
                  <div className="w-5 h-5 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <p className="text-sm text-gray-600"><strong className="text-gray-800">{title}</strong> — {desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">Work With Us</a>
              <a href="#services" className="btn-outline">Our Services</a>
            </div>
          </div>

          {/* Visual */}
          <div ref={r2} className={`transition-all duration-700 delay-150 ${v2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="glass rounded-3xl p-7 animate-float-med shadow-[0_20px_60px_rgba(59,130,246,0.10)]">
              <div className="grid grid-cols-2 gap-3 mb-4">
                {teamColors.map((g, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${g} flex-shrink-0`} />
                    <div>
                      <div className="h-2.5 w-16 bg-gray-200 rounded mb-1.5" />
                      <div className="h-2 w-12 bg-gray-100 rounded" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl border border-blue-100"
                style={{ background: 'linear-gradient(135deg,rgba(59,130,246,0.06),rgba(29,78,216,0.04))' }}>
                <span className="text-3xl">🏆</span>
                <div>
                  <div className="text-sm font-bold text-gray-900">Top IT Agency</div>
                  <div className="text-xs text-blue-500 font-semibold">2024 Award</div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {['React','Next.js','Flutter','Node.js','AWS'].map(t => (
                <span key={t} className="px-3 py-1.5 rounded-full text-xs font-semibold text-gray-700 bg-white border border-gray-200 shadow-sm">{t}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
