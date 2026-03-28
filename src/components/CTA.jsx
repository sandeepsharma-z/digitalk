import { useReveal } from '../hooks/useReveal'

export default function CTA() {
  const { ref, visible } = useReveal()

  return (
    <section className="py-24 relative overflow-hidden text-center"
      style={{ background: 'linear-gradient(135deg,#0f172a,#1e3a5f,#1e40af,#2563eb)', backgroundSize: '200% 200%', animation: 'gradShift 6s ease infinite' }}>
      {/* Orbs */}
      <div className="orb w-[600px] h-[600px] -top-48 -left-48 animate-blob1 pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(96,165,250,0.20),transparent 70%)' }} />
      <div className="orb w-[500px] h-[500px] -bottom-48 -right-36 animate-blob2 pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(59,130,246,0.25),transparent 70%)' }} />
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div ref={ref}
        className={`max-w-3xl mx-auto px-6 relative z-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white/90 border border-white/20 bg-white/10 mb-5">
          Ready to Grow?
        </span>
        <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-5">
          Let's Build Something<br />
          <span className="gradient-text-light">Powerful Together</span>
        </h2>
        <p className="text-base text-white/70 leading-relaxed mb-10 max-w-lg mx-auto">
          Join 100+ businesses that chose DigiTalk to power their digital transformation. Your success story starts here.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a href="#contact" className="btn-white">
            Get Free Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#portfolio" className="btn-white-outline">Start Project</a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {['Free consultation', 'No lock-in contracts', '100% satisfaction guaranteed'].map(t => (
            <span key={t} className="flex items-center gap-2 text-sm text-white/70 font-medium">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
