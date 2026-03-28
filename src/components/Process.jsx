import { useReveal } from '../hooks/useReveal'
import { useRef, useEffect, useState } from 'react'

const steps = [
  { num: '01', icon: '🔍', title: 'Discovery',  desc: 'Deep-dive into your business goals, target audience, and competitive landscape.' },
  { num: '02', icon: '🗺️', title: 'Strategy',   desc: 'Custom roadmap, technical architecture, and design system crafted for your goals.' },
  { num: '03', icon: '💻', title: 'Build',       desc: 'Agile development sprints with continuous feedback loops and quality checkpoints.' },
  { num: '04', icon: '🚀', title: 'Launch',      desc: 'Seamless deployment, performance testing, and ongoing optimization post-launch.' },
]

export default function Process() {
  const lineRef  = useRef(null)
  const trackRef = useRef(null)
  const [lineW, setLineW] = useState('0%')

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setLineW('100%'); obs.disconnect() }
    }, { threshold: 0.3 })
    if (trackRef.current) obs.observe(trackRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="section-badge">Our Process</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            From <span className="gradient-text">Vision to Launch</span> — Our Proven Process
          </h2>
        </div>

        <div ref={trackRef} className="relative">
          {/* Line */}
          <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-gray-100 z-0">
            <div ref={lineRef} className="h-full rounded-full transition-all duration-[1500ms] ease-out"
              style={{ width: lineW, background: 'linear-gradient(90deg,#3b82f6,#60a5fa)' }} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((s, i) => {
              const { ref, visible } = useReveal()
              return (
                <div key={s.num} ref={ref}
                  className={`flex flex-col items-center text-center transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 150}ms` }}>
                  {/* Node */}
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-extrabold text-base mb-5 animate-pulse-glow"
                    style={{ background: 'linear-gradient(135deg,#3b82f6,#2563eb)', boxShadow: '0 4px 16px rgba(59,130,246,0.4)' }}>
                    {s.num}
                  </div>
                  {/* Card */}
                  <div className="glass rounded-2xl p-6 w-full card-hover">
                    <div className="text-2xl mb-3">{s.icon}</div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
