import { useState, useEffect, useRef } from 'react'

const slides = [
  {
    badge:    'Web Development Experts',
    badgeColor: 'bg-blue-500',
    title:    ['Build Stunning', 'Websites That', 'Convert'],
    sub:      'We craft high-performance, visually breathtaking websites that turn visitors into loyal customers. Precision code. Pixel-perfect design.',
    cta:      'Get Website',
    ctaLink:  '#contact',
    tags:     ['React', 'Next.js', 'WordPress', 'Shopify'],
    visual:   'browser',
  },
  {
    badge:    'SEO & Growth Agency',
    badgeColor: 'bg-emerald-500',
    title:    ['Rank Higher with', 'Powerful SEO', 'Strategies'],
    sub:      'Dominate search results and drive organic traffic that converts. Data-driven SEO built for sustainable, measurable growth.',
    cta:      'Boost Rankings',
    ctaLink:  '#seo',
    tags:     ['On-Page SEO', 'Technical SEO', 'Link Building'],
    visual:   'seo',
  },
  {
    badge:    'Apps & Digital Growth',
    badgeColor: 'bg-orange-500',
    title:    ['Scale with Apps &', 'Digital Marketing', 'Mastery'],
    sub:      'From powerful mobile apps to full-funnel marketing campaigns — we engineer growth at every touchpoint of the customer journey.',
    cta:      'Start Growth',
    ctaLink:  '#apps',
    tags:     ['iOS', 'Android', 'Flutter', 'React Native'],
    visual:   'app',
  },
]

function BrowserVisual() {
  return (
    <div className="relative w-full max-w-[480px] animate-float">
      <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(59,130,246,0.15)] overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-50 border-b border-gray-100">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <span className="flex-1 ml-2 px-3 py-1 bg-gray-100 rounded text-[11px] text-gray-400">digitalk.io/client</span>
        </div>
        <div className="p-4">
          <div className="h-10 bg-gray-50 rounded-lg mb-3" />
          <div className="h-24 rounded-xl mb-3 p-4" style={{ background: 'linear-gradient(135deg,#eff6ff,#dbeafe)' }}>
            <div className="h-2.5 w-4/5 bg-blue-200 rounded mb-2" />
            <div className="h-2 w-3/5 bg-blue-100 rounded mb-3" />
            <div className="flex gap-2">
              <div className="h-6 w-20 rounded-full" style={{ background: 'linear-gradient(90deg,#3b82f6,#2563eb)' }} />
              <div className="h-6 w-16 rounded-full border-2 border-blue-400" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[0,1,2].map(i => <div key={i} className="h-14 rounded-xl bg-blue-50 border border-blue-100" />)}
          </div>
        </div>
      </div>
      {/* Float Cards */}
      <div className="absolute -bottom-4 -left-6 flex items-center gap-2.5 px-4 py-2.5 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-white/90 text-sm animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
        </div>
        <div><div className="text-[10px] text-gray-400">Conversions</div><div className="font-bold text-gray-900">+247%</div></div>
      </div>
      <div className="absolute -top-2 -right-4 flex items-center gap-2.5 px-4 py-2.5 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-white/90 text-sm animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>
        </div>
        <div><div className="text-[10px] text-gray-400">Traffic</div><div className="font-bold text-gray-900">+18.4k</div></div>
      </div>
    </div>
  )
}

function SeoVisual() {
  return (
    <div className="relative w-full max-w-[440px]">
      <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(59,130,246,0.12)] p-6 animate-float-slow">
        {[
          { num: '#1', label: 'Your Business', w: 'w-full', active: true },
          { num: '#2', label: 'Competitor A',  w: 'w-[70%]' },
          { num: '#3', label: 'Competitor B',  w: 'w-[55%]' },
        ].map((r, i) => (
          <div key={i} className="flex items-center gap-3 mb-4 last:mb-0">
            <span className={`text-xs font-bold w-8 flex-shrink-0 ${r.active ? 'text-blue-500' : 'text-gray-400'}`}>{r.num}</span>
            <span className="text-xs font-medium text-gray-700 w-28 flex-shrink-0">{r.label}</span>
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${r.w} transition-all duration-700 ${r.active ? '' : 'bg-blue-100'}`}
                style={r.active ? { background: 'linear-gradient(90deg,#3b82f6,#60a5fa)' } : {}} />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute -bottom-4 -left-4 glass rounded-xl p-3 min-w-[170px] animate-float" style={{ animationDelay: '0.8s' }}>
        <div className="flex gap-2">
          {[['Keywords Ranked','1,240+','blue'],['Organic Growth','+380%','purple']].map(([l,v,c]) => (
            <div key={l}>
              <div className="text-[10px] text-gray-400">{l}</div>
              <div className={`text-sm font-bold text-${c}-600`}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AppVisual() {
  return (
    <div className="relative w-full max-w-[320px] mx-auto">
      <div className="w-52 mx-auto bg-gray-900 rounded-[36px] p-3.5 shadow-[0_24px_60px_rgba(0,0,0,0.25)] animate-float-med">
        <div className="w-16 h-4 bg-gray-900 rounded-full mx-auto mb-2" />
        <div className="rounded-[24px] overflow-hidden bg-gradient-to-b from-blue-50 to-gray-50 p-3 min-h-[300px]">
          <div className="h-9 rounded-lg mb-3" style={{ background: 'linear-gradient(90deg,#3b82f6,#2563eb)' }} />
          <div className="h-20 rounded-xl bg-blue-50 mb-3" />
          <div className="grid grid-cols-2 gap-2 mb-3">
            {[0,1,2,3].map(i => <div key={i} className="h-12 bg-white rounded-xl border border-blue-100" />)}
          </div>
          <div className="space-y-2">
            {[0,1].map(i => <div key={i} className="h-8 bg-white rounded-lg border border-gray-100" />)}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-2 -left-4 glass px-4 py-3 rounded-xl shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="text-yellow-400 text-base">★★★★★</div>
        <div className="text-xs font-semibold text-gray-700 mt-1">4.9 App Store Rating</div>
      </div>
    </div>
  )
}

const Visuals = { browser: BrowserVisual, seo: SeoVisual, app: AppVisual }

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const intervalRef = useRef(null)
  const canvasRef   = useRef(null)

  const goTo = (idx) => {
    if (idx === current) return
    setLeaving(true)
    setTimeout(() => { setCurrent((idx + slides.length) % slides.length); setLeaving(false) }, 300)
  }

  const next = () => goTo(current + 1)
  const prev = () => goTo(current - 1)

  const resetInterval = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(next, 5000)
  }

  useEffect(() => { resetInterval(); return () => clearInterval(intervalRef.current) }, [current])

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let particles = [], frame

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()

    const spawn = () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 2.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      o: Math.random() * 0.35 + 0.08,
    })
    particles = Array.from({ length: 55 }, spawn)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // connections
      for (let i = 0; i < particles.length; i++)
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx*dx + dy*dy)
          if (d < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(59,130,246,${0.06 * (1 - d/100)})`
            ctx.lineWidth = 0.8
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) Object.assign(p, spawn())
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2)
        ctx.fillStyle = `rgba(59,130,246,${p.o})`; ctx.fill()
      })
      frame = requestAnimationFrame(animate)
    }
    animate()
    const obs = new ResizeObserver(resize)
    obs.observe(canvas.parentElement)
    return () => { cancelAnimationFrame(frame); obs.disconnect() }
  }, [])

  const s = slides[current]
  const Visual = Visuals[s.visual]

  return (
    <section className="relative min-h-[calc(100vh-110px)] flex flex-col overflow-hidden bg-[#f8faff]" id="home">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb w-[500px] h-[500px] -top-24 -left-24 animate-blob1"
          style={{ background: 'radial-gradient(circle,rgba(59,130,246,0.18),transparent 70%)' }} />
        <div className="orb w-[400px] h-[400px] top-1/4 -right-20 animate-blob2"
          style={{ background: 'radial-gradient(circle,rgba(139,92,246,0.12),transparent 70%)' }} />
        <div className="orb w-[350px] h-[350px] -bottom-10 left-1/3 animate-blob3"
          style={{ background: 'radial-gradient(circle,rgba(59,130,246,0.10),transparent 70%)' }} />
        <div className="absolute inset-0 grid-pattern" />
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      </div>

      {/* Slide Content */}
      <div className="flex-1 relative z-10">
        <div
          className={`max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-14 transition-all duration-300 ${leaving ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
        >
          {/* Text */}
          <div className="flex-1 max-w-[560px]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-blue-600 text-xs font-bold border border-blue-100 bg-blue-50 mb-5">
              <span className={`w-2 h-2 rounded-full ${s.badgeColor} animate-badge-pulse`} />
              {s.badge}
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-gray-900 mb-5">
              {s.title.map((line, i) =>
                i === 1
                  ? <span key={i}><span className="gradient-text">{line}</span><br /></span>
                  : <span key={i}>{line}<br /></span>
              )}
            </h1>
            <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-[460px]">{s.sub}</p>
            <div className="flex flex-wrap gap-3 mb-6">
              <a href={s.ctaLink} className="btn-primary">
                {s.cta}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#portfolio" className="btn-ghost">View Work</a>
            </div>
            <div className="flex flex-wrap gap-2">
              {s.tags.map(t => (
                <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100">{t}</span>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="flex-1 flex justify-center items-center w-full">
            <Visual />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 pb-6 relative z-10">
        <button onClick={() => { prev(); resetInterval() }}
          className="w-11 h-11 rounded-full bg-white/80 border border-blue-100 text-blue-500 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 shadow-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => { goTo(i); resetInterval() }}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-blue-500' : 'w-2 bg-gray-300'}`} />
          ))}
        </div>
        <button onClick={() => { next(); resetInterval() }}
          className="w-11 h-11 rounded-full bg-white/80 border border-blue-100 text-blue-500 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 shadow-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>

      {/* Scroll hint */}
      <div className="flex flex-col items-center gap-2 pb-6 text-xs text-gray-400 relative z-10">
        <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-blue-500 rounded-full animate-scroll-wheel" />
        </div>
        Scroll to explore
      </div>
    </section>
  )
}
