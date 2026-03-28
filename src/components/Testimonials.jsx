import { useState, useEffect, useRef } from 'react'

const reviews = [
  { stars: 5, text: '"DigiTalk completely transformed our online presence. Our website traffic tripled within 3 months and conversions are up 247%. Best investment we\'ve ever made."', name: 'Sarah Mitchell',  role: 'CEO, TechVentures Inc.',  color: 'from-blue-400 to-blue-600' },
  { stars: 5, text: '"The app they built for us has 50,000 downloads and a 4.9-star rating. The team\'s attention to UX detail is extraordinary. They think like product owners."', name: 'James Okonkwo',   role: 'Founder, HealthBridge',     color: 'from-emerald-400 to-emerald-600' },
  { stars: 5, text: '"Our SEO went from page 5 to page 1 in under 4 months. Organic leads are now our primary revenue source. DigiTalk\'s SEO team is world-class."',              name: 'Priya Sharma',   role: 'Marketing Director, GlobalTrade', color: 'from-purple-400 to-purple-600' },
  { stars: 5, text: '"The digital marketing campaigns generated 4.8x ROAS consistently. They truly understand both the creative and analytical sides of growth marketing."',         name: 'Marcus Chen',    role: 'Owner, LuxeRetail Group',   color: 'from-orange-400 to-orange-600' },
]

export default function Testimonials() {
  const [idx, setIdx]   = useState(0)
  const intervalRef     = useRef(null)

  const visibleCount = () => typeof window !== 'undefined' && window.innerWidth > 1024 ? 3 : window.innerWidth > 640 ? 2 : 1

  const max = () => reviews.length - visibleCount()
  const next = () => setIdx(i => i < max() ? i + 1 : 0)
  const prev = () => setIdx(i => i > 0 ? i - 1 : max())

  const reset = () => { clearInterval(intervalRef.current); intervalRef.current = setInterval(next, 4500) }
  useEffect(() => { reset(); return () => clearInterval(intervalRef.current) }, [idx])

  return (
    <section className="py-24 bg-[#f8faff] overflow-hidden" id="testimonials">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-badge">Testimonials</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-6 testi-track"
            style={{ transform: `translateX(calc(-${idx * (100 / visibleCount())}% - ${idx * 24 / visibleCount()}px))` }}>
            {reviews.map((r, i) => (
              <div key={i} className="glass rounded-2xl p-8 flex-shrink-0"
                style={{ width: `calc(${100/visibleCount()}% - ${24*(visibleCount()-1)/visibleCount()}px)` }}>
                <div className="text-yellow-400 text-lg mb-4">{'★'.repeat(r.stars)}</div>
                <p className="text-sm text-gray-600 leading-relaxed italic mb-6">{r.text}</p>
                <div className="flex items-center gap-3.5">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${r.color} flex-shrink-0`} />
                  <div>
                    <strong className="text-sm font-bold text-gray-900 block">{r.name}</strong>
                    <span className="text-xs text-gray-500">{r.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button onClick={() => { prev(); reset() }} className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          <div className="flex gap-1.5">
            {reviews.map((_, i) => (
              <button key={i} onClick={() => { setIdx(i); reset() }}
                className={`h-2 rounded-full transition-all duration-300 ${i === idx ? 'w-6 bg-blue-500' : 'w-2 bg-gray-300'}`} />
            ))}
          </div>
          <button onClick={() => { next(); reset() }} className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
