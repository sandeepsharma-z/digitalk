import { useReveal } from '../hooks/useReveal'

const points = [
  ['Performance-First', 'Every line of code optimized for speed and measurable results'],
  ['Design-Led Thinking', 'Interfaces that inspire trust and drive user action'],
  ['Full-Stack Capability', 'From strategy to deployment and beyond'],
  ['Growth Partners', 'We grow when your business grows'],
]


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

      <div className="max-w-[1440px] mx-auto px-6">
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
            <div className="relative">
              {/* main image */}
              <div className="rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(59,130,246,0.18)] animate-float-med">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=85&fit=crop"
                  alt="DigiTalk Team"
                  className="w-full object-cover"
                  style={{ height: '380px' }}
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 rounded-3xl"
                  style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(15,23,42,0.65) 100%)' }} />
              </div>

              {/* bottom overlay text */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div className="text-white">
                  <div className="text-xl font-extrabold leading-tight">DigiTalk Team</div>
                  <div className="text-xs text-white/60 mt-0.5">50+ Experts across Web, App & Marketing</div>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <span className="text-xl">🏆</span>
                  <div>
                    <div className="text-xs font-bold text-white leading-none">Top IT Agency</div>
                    <div className="text-[10px] text-blue-300 mt-0.5">2024 Award</div>
                  </div>
                </div>
              </div>

              {/* floating stat cards */}
              <div className="absolute -top-4 -right-4 px-4 py-3 rounded-2xl shadow-lg animate-float"
                style={{ background: 'white', border: '1px solid rgba(59,130,246,0.15)' }}>
                <div className="text-2xl font-extrabold text-blue-600 leading-none">500+</div>
                <div className="text-xs text-gray-500 mt-0.5 font-medium">Projects Delivered</div>
              </div>

              <div className="absolute -bottom-4 -left-4 px-4 py-3 rounded-2xl shadow-lg animate-float-slow"
                style={{ background: 'white', border: '1px solid rgba(139,92,246,0.15)' }}>
                <div className="text-2xl font-extrabold text-purple-500 leading-none">98%</div>
                <div className="text-xs text-gray-500 mt-0.5 font-medium">Client Satisfaction</div>
              </div>
            </div>

            {/* tech stack tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {['React','Next.js','Flutter','Node.js','AWS','WordPress'].map(t => (
                <span key={t} className="px-3 py-1.5 rounded-full text-xs font-semibold text-gray-700 bg-white border border-gray-200 shadow-sm">{t}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
