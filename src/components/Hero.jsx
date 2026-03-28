import { useState, useEffect, useRef } from 'react'

/* ─── slide data ─────────────────────────────────────────── */
const slides = [
  {
    badge:       'Web Development Experts',
    title:       'Build Stunning Websites',
    titleAccent: 'That Convert',
    sub:         'We craft high-performance, visually breathtaking websites that turn visitors into loyal customers. Precision code. Pixel-perfect design.',
    cta:         'Get Website',
    cta2:        'View Work',
    cta2Link:    '#portfolio',
    ctaLink:     '#contact',
    tags:        ['React', 'Next.js', 'WordPress', 'Shopify'],
    stat1: { val: '247%', label: 'Conversion Uplift' },
    stat2: { val: '18k+', label: 'Monthly Visitors' },
    stat3: { val: '99',   label: 'PageSpeed Score' },
    rightImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=90&fit=crop',
    rightFloats: [
      { val: '99/100', label: 'PageSpeed Score',    icon: '⚡', pos: 'top-4 right-4' },
      { val: '+247%',  label: 'Conversions',        icon: '📈', pos: 'bottom-6 left-4' },
      { val: '1,842',  label: 'Live Visitors',      icon: '🟢', pos: 'bottom-6 right-4' },
    ],
    /* real background image */
    image:   'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=85&fit=crop',
    overlay: 'linear-gradient(110deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.70) 50%, rgba(0,0,0,0.55) 100%)',
    accent:  '#60a5fa',
    orb1: 'rgba(96,165,250,0.30)',
    orb2: 'rgba(139,92,246,0.20)',
  },
  {
    badge:       'SEO & Growth Agency',
    title:       'Rank #1 on Google',
    titleAccent: 'Drive Real Traffic',
    sub:         'Dominate search results and convert organic visitors into revenue. Data-driven SEO engineered for sustainable, long-term growth.',
    cta:         'Boost Rankings',
    cta2:        'See Results',
    cta2Link:    '#portfolio',
    ctaLink:     '#contact',
    tags:        ['On-Page SEO', 'Technical SEO', 'Link Building'],
    stat1: { val: '380%', label: 'Traffic Growth' },
    stat2: { val: '1.2k+', label: 'Keywords Ranked' },
    stat3: { val: '4mo',   label: 'Avg to Page 1' },
    rightImage: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=900&q=90&fit=crop',
    rightFloats: [
      { val: '+380%',  label: 'Traffic Growth',     icon: '📊', pos: 'top-4 right-4' },
      { val: '1,240',  label: 'Keywords Ranked',    icon: '🔍', pos: 'bottom-6 left-4' },
      { val: 'Page #1', label: 'Search Position',   icon: '🏆', pos: 'bottom-6 right-4' },
    ],
    image:   'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=85&fit=crop',
    overlay: 'linear-gradient(110deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.70) 50%, rgba(0,0,0,0.55) 100%)',
    accent:  '#60a5fa',
    orb1: 'rgba(96,165,250,0.30)',
    orb2: 'rgba(139,92,246,0.20)',
  },
  {
    badge:       'Apps & Digital Marketing',
    title:       'Scale Your Business',
    titleAccent: 'With Smart Digital',
    sub:         'From powerful mobile apps to full-funnel marketing campaigns — we engineer growth at every touchpoint of the customer journey.',
    cta:         'Start Growth',
    cta2:        'Explore Apps',
    cta2Link:    '#apps',
    ctaLink:     '#contact',
    tags:        ['iOS', 'Android', 'Flutter', 'React Native'],
    stat1: { val: '4.8x', label: 'Avg ROAS' },
    stat2: { val: '50k+', label: 'App Downloads' },
    stat3: { val: '2.4M', label: 'Campaign Reach' },
    rightImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=90&fit=crop',
    rightFloats: [
      { val: '4.8x',   label: 'Avg ROAS',          icon: '💰', pos: 'top-4 right-4' },
      { val: '50k+',   label: 'App Downloads',      icon: '📱', pos: 'bottom-6 left-4' },
      { val: '2.4M',   label: 'Campaign Reach',     icon: '🚀', pos: 'bottom-6 right-4' },
    ],
    image:   'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&q=85&fit=crop',
    overlay: 'linear-gradient(110deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.70) 50%, rgba(0,0,0,0.55) 100%)',
    accent:  '#60a5fa',
    orb1: 'rgba(96,165,250,0.30)',
    orb2: 'rgba(139,92,246,0.20)',
  },
]

/* ─── particle canvas ────────────────────────────────────── */
function ParticleCanvas() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let pts = [], raf

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      pts = Array.from({ length: 65 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.4,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        o: Math.random() * 0.35 + 0.08,
      }))
    }
    resize()

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255,255,255,${0.07 * (1 - d / 120)})`
            ctx.lineWidth = 0.7
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.stroke()
          }
        }
        pts[i].x += pts[i].vx; pts[i].y += pts[i].vy
        if (pts[i].x < 0 || pts[i].x > canvas.width)  pts[i].vx *= -1
        if (pts[i].y < 0 || pts[i].y > canvas.height) pts[i].vy *= -1
        ctx.beginPath()
        ctx.arc(pts[i].x, pts[i].y, pts[i].r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${pts[i].o})`
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas.parentElement)
    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [])
  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />
}

/* ─── floating stat card ─────────────────────────────────── */
function StatCard({ val, label, accent, delay = 0, className = '' }) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-2xl animate-float ${className}`}
      style={{
        background:    'rgba(0,0,0,0.35)',
        backdropFilter:'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        border:        `1px solid ${accent}33`,
        animationDelay:`${delay}s`,
        boxShadow:     `0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)`,
      }}>
      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: `${accent}20`, border: `1px solid ${accent}40` }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
          <polyline points="16 7 22 7 22 13"/>
        </svg>
      </div>
      <div>
        <div className="text-lg font-extrabold text-white leading-none">{val}</div>
        <div className="text-[11px] mt-0.5 font-medium text-white/50">{label}</div>
      </div>
    </div>
  )
}

/* ── glass box style ─────────────────────────────────────── */
const glassBox = {
  background:          'rgba(0,0,0,0.40)',
  backdropFilter:      'blur(20px)',
  WebkitBackdropFilter:'blur(20px)',
  border:              '1px solid rgba(255,255,255,0.15)',
  boxShadow:           '0 16px 40px rgba(0,0,0,0.45)',
}

/* ─── right panel — real image + floating stat cards ─────── */
function SlideVisual({ slide, animKey }) {
  return (
    <div className="flex-1 relative flex items-center justify-center min-h-[420px] py-6"
      key={`vis-${animKey}`}
      style={{ animation: 'fadeSlideInRight 0.7s cubic-bezier(0.22,1,0.36,1) both' }}>
      <div className="relative w-full max-w-[500px] mx-auto">
        {/* image frame */}
        <div className="rounded-2xl overflow-hidden animate-float"
          style={{
            boxShadow: `0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.12), 0 0 80px ${slide.accent}22`,
            border: `1px solid rgba(255,255,255,0.15)`,
          }}>
          <img
            src={slide.rightImage}
            alt=""
            className="w-full object-cover"
            style={{ height: '320px', display: 'block' }}
            loading="eager"
          />
        </div>
        {/* floating stat cards */}
        {slide.rightFloats.map((f, i) => (
          <div key={i}
            className={`absolute ${f.pos} flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl animate-float`}
            style={{
              background:          'rgba(0,0,0,0.55)',
              backdropFilter:      'blur(20px)',
              WebkitBackdropFilter:'blur(20px)',
              border:              `1px solid ${slide.accent}33`,
              boxShadow:           '0 8px 32px rgba(0,0,0,0.45)',
              animationDelay:      `${i * 0.4}s`,
              zIndex: 10,
            }}>
            <span className="text-xl leading-none">{f.icon}</span>
            <div>
              <div className="text-sm font-extrabold text-white leading-none">{f.val}</div>
              <div className="text-[10px] text-white/50 mt-0.5">{f.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── LEGACY stubs (kept for reference, not used) ─────────── */
function Visual0({ accent }) {
  return (
    <div className="relative w-full max-w-[500px] mx-auto">
      {/* main browser */}
      <div className="rounded-2xl overflow-hidden animate-float" style={glassBox}>
        {/* browser chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
          <span className="w-3 h-3 rounded-full bg-red-400/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <span className="w-3 h-3 rounded-full bg-green-400/80" />
          <div className="flex-1 mx-3 h-6 rounded-lg flex items-center px-3 text-[11px] text-white/30"
            style={{ background:'rgba(255,255,255,0.07)' }}>
            🔒 &nbsp;digitalk.io/your-website
          </div>
        </div>
        {/* page hero */}
        <div className="mx-4 mt-4 rounded-xl overflow-hidden"
          style={{ background:'linear-gradient(135deg,rgba(96,165,250,0.25),rgba(59,130,246,0.10))', border:'1px solid rgba(96,165,250,0.20)' }}>
          {/* fake navbar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full" style={{ background: accent }} />
              <div className="h-2 w-14 rounded-full bg-white/30" />
            </div>
            <div className="flex gap-3">
              {[40,32,36].map((w,i) => <div key={i} className="h-1.5 rounded-full bg-white/20" style={{ width: w }} />)}
            </div>
            <div className="h-6 w-16 rounded-full" style={{ background: accent+'aa' }} />
          </div>
          {/* hero content */}
          <div className="px-5 py-5">
            <div className="h-4 w-4/5 rounded-full bg-white/40 mb-2.5" />
            <div className="h-3 w-3/5 rounded-full bg-white/25 mb-1.5" />
            <div className="h-3 w-2/3 rounded-full bg-white/20 mb-4" />
            <div className="flex gap-2">
              <div className="h-8 w-24 rounded-full" style={{ background: accent }} />
              <div className="h-8 w-20 rounded-full border border-white/30" />
            </div>
          </div>
          {/* cards row */}
          <div className="grid grid-cols-3 gap-2 px-4 pb-4">
            {['📱','🚀','⚡'].map((em,i) => (
              <div key={i} className="rounded-xl p-3 border border-white/10" style={{ background:'rgba(255,255,255,0.07)' }}>
                <div className="text-xl mb-2">{em}</div>
                <div className="h-2 w-full rounded-full bg-white/20 mb-1" />
                <div className="h-1.5 w-3/4 rounded-full bg-white/12" />
              </div>
            ))}
          </div>
        </div>
        {/* bottom bar */}
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex gap-1.5">
            {[60,44,52].map((w,i) => <div key={i} className="h-1.5 rounded-full bg-white/15" style={{ width: w }} />)}
          </div>
          <div className="h-2 w-2 rounded-full" style={{ background: accent }} />
        </div>
      </div>

      {/* floating cards */}
      <div className="absolute -top-3 -right-4 lg:-right-8 rounded-2xl px-4 py-3 animate-float"
        style={{ ...glassBox, animationDelay:'0.5s', minWidth: 150 }}>
        <div className="text-[10px] text-white/50 mb-1">PageSpeed Score</div>
        <div className="flex items-end gap-1">
          <span className="text-3xl font-extrabold text-white">99</span>
          <span className="text-xs text-white/40 pb-1">/100</span>
        </div>
        <div className="mt-1.5 h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full rounded-full" style={{ width:'99%', background:`linear-gradient(90deg,${accent},${accent}cc)`,
            boxShadow:`0 0 8px ${accent}` }} />
        </div>
      </div>

      <div className="absolute -bottom-2 -left-4 lg:-left-10 rounded-2xl px-4 py-3 animate-float"
        style={{ ...glassBox, animationDelay:'1.2s', minWidth: 170 }}>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm" style={{ background: accent+'25' }}>📈</div>
          <div className="text-[11px] text-white/50">Conversions This Month</div>
        </div>
        <div className="text-2xl font-extrabold text-white">+247%</div>
        <div className="text-[10px] text-green-400 mt-0.5">↑ vs last month</div>
      </div>

      <div className="absolute bottom-24 -right-3 lg:-right-6 rounded-2xl px-4 py-3 animate-float"
        style={{ ...glassBox, animationDelay:'2s' }}>
        <div className="text-[10px] text-white/50 mb-1.5">Live Visitors</div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xl font-extrabold text-white">1,842</span>
        </div>
      </div>
    </div>
  )
}

/* ── Slide 1: SEO dashboard ───────────────────────────────── */
function Visual1({ accent }) {
  const bars = [35, 55, 45, 70, 62, 85, 78, 95]
  return (
    <div className="relative w-full max-w-[500px] mx-auto">
      {/* main dashboard card */}
      <div className="rounded-2xl overflow-hidden animate-float-med" style={glassBox}>
        {/* header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div>
            <div className="text-white font-bold text-sm">SEO Performance</div>
            <div className="text-white/40 text-xs mt-0.5">Last 8 months</div>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
            style={{ background: accent+'20', color: accent, border:`1px solid ${accent}40` }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Live
          </div>
        </div>

        {/* chart area */}
        <div className="px-5 pt-4 pb-2">
          <div className="flex items-end gap-2 h-28">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 rounded-t-lg relative overflow-hidden"
                style={{ height:`${h}%`, background:`rgba(255,255,255,0.08)`, animationDelay:`${i*0.1}s` }}>
                <div className="absolute inset-0 rounded-t-lg"
                  style={{ background:`linear-gradient(180deg,${accent},${accent}66)`,
                           opacity: i === 7 ? 1 : 0.5 + i*0.07,
                           boxShadow: i === 7 ? `0 0 12px ${accent}88` : 'none' }} />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-1">
            {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'].map(m => (
              <span key={m} className="text-[9px] text-white/25 flex-1 text-center">{m}</span>
            ))}
          </div>
        </div>

        {/* keyword ranks */}
        <div className="px-5 pb-4 space-y-2">
          {[
            { kw:'digital marketing agency', pos:'#1', w:'100%' },
            { kw:'web development company',  pos:'#2', w:'75%'  },
            { kw:'SEO services near me',      pos:'#3', w:'60%'  },
          ].map((r, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-xs font-bold w-6 flex-shrink-0" style={{ color: i===0 ? accent : 'rgba(255,255,255,0.35)' }}>{r.pos}</span>
              <span className="text-[11px] text-white/50 w-40 truncate flex-shrink-0">{r.kw}</span>
              <div className="flex-1 h-1.5 rounded-full bg-white/08 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: r.w,
                  background: i===0 ? `linear-gradient(90deg,${accent},${accent}bb)` : 'rgba(255,255,255,0.20)' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* floating cards */}
      <div className="absolute -top-4 -right-4 lg:-right-10 rounded-2xl px-4 py-3 animate-float"
        style={{ ...glassBox, animationDelay:'0.6s', minWidth:155 }}>
        <div className="text-[10px] text-white/50 mb-1">Organic Traffic</div>
        <div className="text-2xl font-extrabold text-white">+380%</div>
        <div className="flex items-center gap-1 mt-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
          </svg>
          <span className="text-[10px] text-green-400">vs last quarter</span>
        </div>
      </div>

      <div className="absolute -bottom-3 -left-4 lg:-left-10 rounded-2xl px-4 py-3 animate-float"
        style={{ ...glassBox, animationDelay:'1.4s', minWidth:160 }}>
        <div className="text-[10px] text-white/50 mb-2">Keywords Ranked</div>
        <div className="flex items-end gap-1">
          <span className="text-2xl font-extrabold text-white">1,240</span>
          <span className="text-xs text-white/40 pb-0.5">keywords</span>
        </div>
        <div className="mt-1.5 flex gap-0.5">
          {[8,12,6,14,10,16,18].map((h,i) => (
            <div key={i} className="flex-1 rounded-sm" style={{ height: h, background: `${accent}${40+i*10}` }} />
          ))}
        </div>
      </div>

      <div className="absolute top-8 -right-2 lg:-right-4 rounded-2xl px-4 py-3 animate-float"
        style={{ ...glassBox, animationDelay:'2.2s', marginTop:160 }}>
        <div className="text-[10px] text-white/50 mb-1">Domain Authority</div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-extrabold text-sm text-white"
            style={{ borderColor: accent, boxShadow:`0 0 14px ${accent}66` }}>72</div>
          <span className="text-[10px] text-white/40">out of 100</span>
        </div>
      </div>
    </div>
  )
}

/* ── Slide 2: Phone + marketing ──────────────────────────── */
function Visual2({ accent }) {
  return (
    <div className="relative w-full max-w-[480px] mx-auto flex items-center justify-center">

      {/* phone frame */}
      <div className="relative z-10 animate-float-med" style={{ animationDuration:'8s' }}>
        <div className="w-52 rounded-[40px] p-3 shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
          style={{ background:'rgba(20,20,30,0.85)', backdropFilter:'blur(20px)', border:'1px solid rgba(255,255,255,0.12)' }}>
          {/* notch */}
          <div className="w-20 h-5 rounded-full mx-auto mb-2" style={{ background:'rgba(20,20,30,1)' }} />
          {/* screen */}
          <div className="rounded-[28px] overflow-hidden" style={{ background:'#0f1120', minHeight: 340 }}>
            {/* status */}
            <div className="flex justify-between items-center px-4 py-2">
              <span className="text-[9px] text-white/40">9:41</span>
              <div className="flex gap-1">
                {[1,1,0.5].map((o,i) => <div key={i} className="w-1 rounded-sm" style={{ height:6+i*2, background:`rgba(255,255,255,${o*0.5})` }} />)}
              </div>
            </div>
            {/* app header */}
            <div className="px-4 pb-3">
              <div className="text-white/50 text-[10px]">Dashboard</div>
              <div className="text-white font-bold text-sm">Marketing Hub</div>
            </div>
            {/* stats row */}
            <div className="grid grid-cols-2 gap-2 px-3 mb-3">
              {[['ROAS','4.8x'],['Leads','340']].map(([l,v]) => (
                <div key={l} className="rounded-2xl p-3" style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.08)' }}>
                  <div className="text-[9px] text-white/40 mb-1">{l}</div>
                  <div className="text-lg font-extrabold text-white">{v}</div>
                  <div className="text-[9px] text-green-400">↑ this month</div>
                </div>
              ))}
            </div>
            {/* mini chart */}
            <div className="mx-3 rounded-2xl p-3 mb-3" style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.07)' }}>
              <div className="text-[9px] text-white/40 mb-2">Campaign Reach</div>
              <div className="flex items-end gap-1 h-12">
                {[40,55,35,70,60,80,75,95,85,100].map((h,i) => (
                  <div key={i} className="flex-1 rounded-sm"
                    style={{ height:`${h}%`, background:`${accent}${30+i*7}`, boxShadow: i===9 ? `0 0 6px ${accent}` : 'none' }} />
                ))}
              </div>
            </div>
            {/* channels */}
            <div className="px-3 space-y-2">
              {[['📘 Facebook Ads','68%'],['🔍 Google Ads','82%'],['📸 Instagram','54%']].map(([ch,pct]) => (
                <div key={ch} className="flex items-center gap-2">
                  <span className="text-[10px] text-white/50 w-24 flex-shrink-0">{ch}</span>
                  <div className="flex-1 h-1 rounded-full bg-white/08 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width:pct, background:`${accent}bb` }} />
                  </div>
                  <span className="text-[9px] text-white/40 w-7">{pct}</span>
                </div>
              ))}
            </div>
            <div className="h-10 mt-3 mx-3 mb-2 rounded-2xl flex items-center justify-center text-[10px] font-bold"
              style={{ background:`linear-gradient(135deg,${accent},${accent}bb)`, color:'#fff' }}>
              View Full Report →
            </div>
          </div>
        </div>
      </div>

      {/* floating cards */}
      <div className="absolute top-6 -right-2 lg:-right-8 rounded-2xl px-4 py-3 animate-float"
        style={{ ...glassBox, animationDelay:'0.4s', minWidth:155 }}>
        <div className="text-[10px] text-white/50 mb-1">App Downloads</div>
        <div className="text-2xl font-extrabold text-white">50k+</div>
        <div className="text-[10px] text-green-400 mt-0.5">↑ 23% this week</div>
      </div>

      <div className="absolute bottom-10 -right-2 lg:-right-6 rounded-2xl px-4 py-3 animate-float"
        style={{ ...glassBox, animationDelay:'1.5s', minWidth:155 }}>
        <div className="text-[10px] text-white/50 mb-1.5">Avg ROAS</div>
        <div className="flex items-end gap-1">
          <span className="text-2xl font-extrabold text-white">4.8</span>
          <span className="text-sm text-white/50 pb-0.5">x return</span>
        </div>
      </div>

      <div className="absolute top-1/3 -left-4 lg:-left-12 rounded-2xl px-4 py-3 animate-float"
        style={{ ...glassBox, animationDelay:'1s', minWidth:150 }}>
        <div className="text-[10px] text-white/50 mb-1">Campaign Reach</div>
        <div className="text-xl font-extrabold text-white">2.4M</div>
        <div className="flex items-center gap-1 mt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] text-white/40">impressions</span>
        </div>
      </div>
    </div>
  )
}

/* ─── legacy mapping (unused) ────────────────────────────── */
const Visuals = [Visual0, Visual1, Visual2]
void Visuals

/* ─── main hero ──────────────────────────────────────────── */
export default function Hero() {
  const [cur,     setCur]     = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const [imgLoaded, setImgLoaded] = useState([false, false, false])
  const timerRef = useRef(null)
  const total    = slides.length

  /* preload all images */
  useEffect(() => {
    slides.forEach((s, i) => {
      const img = new Image()
      img.src   = s.image
      img.onload = () => setImgLoaded(prev => {
        const next = [...prev]; next[i] = true; return next
      })
    })
  }, [])

  const go = (idx) => {
    const next = (idx + total) % total
    if (next === cur) return
    setAnimKey(k => k + 1)
    setCur(next)
  }

  const reset = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCur(c => { setAnimKey(k => k+1); return (c+1) % total }), 6000)
  }

  useEffect(() => { reset(); return () => clearInterval(timerRef.current) }, [cur])

  const s = slides[cur]

  return (
    <section className="relative overflow-hidden" id="home"
      style={{ minHeight: 'calc(100vh - 110px)' }}>

      {/* ── BACKGROUND IMAGES (all stacked, only active visible) ── */}
      {slides.map((sl, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-[900ms] ease-in-out"
          style={{ opacity: i === cur ? 1 : 0, zIndex: 0 }}>
          {/* actual image */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: imgLoaded[i] ? `url(${sl.image})` : 'none',
              backgroundColor: '#0a0f28',
              transform: i === cur ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform 6s ease',
            }} />
          {/* gradient overlay — makes text readable */}
          <div className="absolute inset-0" style={{ background: sl.overlay }} />
          {/* noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundSize: '200px' }} />
        </div>
      ))}

      {/* ── DECORATIVE LAYERS ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        {/* glowing orbs */}
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full animate-blob1"
          style={{ background: `radial-gradient(circle, ${s.orb1}, transparent 70%)`, filter: 'blur(70px)' }} />
        <div className="absolute -top-24 right-0 w-[400px] h-[400px] rounded-full animate-blob2"
          style={{ background: `radial-gradient(circle, ${s.orb2}, transparent 70%)`, filter: 'blur(80px)' }} />

        {/* spinning rings */}
        <div className="absolute top-10 right-[20%] w-60 h-60 rounded-full border border-white/[0.05]"
          style={{ animation: 'spinRing 22s linear infinite' }} />
        <div className="absolute top-10 right-[20%] w-44 h-44 rounded-full border border-white/[0.04]"
          style={{ margin: 32, animation: 'spinRing 14s linear infinite reverse' }} />
        <div className="absolute bottom-16 left-[6%] w-40 h-40 rounded-full border border-white/[0.04]"
          style={{ animation: 'spinRing 18s linear infinite' }} />

        {/* grid dot pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.045]">
          <defs>
            <pattern id="heroGrid" width="52" height="52" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>

        {/* accent glow dots */}
        {[
          { t:'20%', l:'10%', s:5 }, { t:'70%', l:'5%',  s:3 },
          { t:'35%', r:'7%',  s:4 }, { t:'80%', r:'12%', s:3 },
          { t:'15%', l:'48%', s:3 }, { t:'60%', l:'38%', s:2.5 },
        ].map((d, i) => (
          <div key={i} className="absolute rounded-full pointer-events-none animate-pulse"
            style={{
              top: d.t, left: d.l, right: d.r,
              width: d.s, height: d.s,
              background: s.accent,
              boxShadow: `0 0 ${d.s * 5}px 2px ${s.accent}99`,
              animationDelay: `${i * 0.5}s`,
            }} />
        ))}

        {/* particles */}
        <ParticleCanvas />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative flex flex-col h-full" style={{ zIndex: 2, minHeight: 'calc(100vh - 110px)' }}>
        <div className="flex-1 max-w-[1440px] mx-auto px-6 lg:px-14 w-full
                        flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-16 lg:py-20">

          {/* ── LEFT: Text ── */}
          <div className="flex-1 max-w-[600px]"
            key={`t-${animKey}`}
            style={{ animation: 'fadeSlideIn 0.65s cubic-bezier(0.22,1,0.36,1) both' }}>

            {/* badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-7"
              style={{ background:`${s.accent}18`, border:`1px solid ${s.accent}40`, color: s.accent,
                       boxShadow:`0 0 20px ${s.accent}22` }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: s.accent, boxShadow:`0 0 8px ${s.accent}` }} />
              {s.badge}
            </div>

            {/* headline */}
            <h1 className="font-extrabold text-white leading-[1.06] tracking-tight mb-5"
              style={{ fontSize: 'clamp(30px, 3.8vw, 52px)', letterSpacing: '-1.5px',
                       textShadow: '0 2px 40px rgba(0,0,0,0.4)' }}>
              {s.title}
              <br />
              <span style={{
                background: `linear-gradient(135deg, ${s.accent} 0%, #fff 55%, ${s.accent} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {s.titleAccent}
              </span>
            </h1>

            {/* sub */}
            <p className="text-base leading-relaxed mb-9 max-w-[500px] text-white/60">
              {s.sub}
            </p>

            {/* buttons */}
            <div className="flex flex-wrap gap-3 mb-9">
              <a href={s.ctaLink}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                style={{ background:`linear-gradient(135deg, ${s.accent}, ${s.accent}bb)`,
                         boxShadow:`0 6px 28px ${s.accent}55` }}>
                {s.cta}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href={s.cta2Link}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-white transition-all duration-300 hover:-translate-y-1.5"
                style={{ background:'rgba(255,255,255,0.08)', backdropFilter:'blur(14px)',
                         border:'1px solid rgba(255,255,255,0.20)' }}>
                {s.cta2}
              </a>
            </div>

            {/* tags */}
            <div className="flex flex-wrap gap-2">
              {s.tags.map(t => (
                <span key={t} className="px-4 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.13)',
                           color:'rgba(255,255,255,0.65)' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Visual ── */}
          <SlideVisual slide={s} animKey={animKey} index={cur} />
        </div>

        {/* ── BOTTOM CONTROL BAR ── */}
        <div className="border-t border-white/[0.07]"
          style={{ background:'rgba(0,0,0,0.30)', backdropFilter:'blur(16px)' }}>
          <div className="max-w-[1440px] mx-auto px-6 lg:px-14 py-4
                          flex items-center justify-between gap-6 flex-wrap">

            {/* prev / dots / next */}
            <div className="flex items-center gap-3">
              <button onClick={() => { go(cur - 1); reset() }}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                style={{ background:'rgba(255,255,255,0.09)', border:'1px solid rgba(255,255,255,0.16)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>

              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button key={i} onClick={() => { go(i); reset() }}
                    className="rounded-full transition-all duration-400"
                    style={{
                      height: 8,
                      width:  i === cur ? 28 : 8,
                      background: i === cur ? s.accent : 'rgba(255,255,255,0.25)',
                      boxShadow:  i === cur ? `0 0 12px ${s.accent}` : 'none',
                    }} />
                ))}
              </div>

              <button onClick={() => { go(cur + 1); reset() }}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                style={{ background:'rgba(255,255,255,0.09)', border:'1px solid rgba(255,255,255,0.16)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            {/* slide counter */}
            <div className="text-sm font-bold text-white/30">
              <span style={{ color: s.accent, fontSize: 18, fontWeight: 800 }}>0{cur + 1}</span>
              <span className="mx-1">/</span>
              0{total}
            </div>

            {/* progress bar */}
            <div className="flex-1 max-w-[220px] h-[3px] rounded-full overflow-hidden bg-white/10">
              <div key={`p-${animKey}`} className="h-full rounded-full"
                style={{ background: s.accent, animation: 'progressBar 6s linear forwards',
                         boxShadow: `0 0 8px ${s.accent}` }} />
            </div>

            {/* scroll hint */}
            <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-white/30">
              <div className="w-5 h-7 rounded-full border border-white/20 flex justify-center pt-1">
                <div className="w-1 h-2 rounded-full animate-scroll-wheel"
                  style={{ background: s.accent }} />
              </div>
              Scroll down
            </div>
          </div>
        </div>
      </div>

      {/* ── keyframes ── */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity:0; transform:translateX(-35px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes fadeSlideInRight {
          from { opacity:0; transform:translateX(35px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes progressBar {
          from { width:0%; }
          to   { width:100%; }
        }
        @keyframes spinRing {
          from { transform:rotate(0deg); }
          to   { transform:rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
