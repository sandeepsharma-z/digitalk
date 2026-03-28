import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const info = [
  { icon: '📞', title: 'Phone',  val: '+1 (555) 123-4567' },
  { icon: '📧', title: 'Email',  val: 'hello@digitalk.io' },
  { icon: '📍', title: 'Office', val: '123 Innovation Ave, Tech City, CA 90210' },
  { icon: '🕐', title: 'Hours',  val: 'Mon–Fri: 9AM–6PM EST' },
]

const socials = [
  {
    label: 'LinkedIn', href: '#',
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: 'Twitter / X', href: '#',
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    label: 'Instagram', href: '#',
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  },
  {
    label: 'Dribbble', href: '#',
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>,
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const { ref: r1, visible: v1 } = useReveal()
  const { ref: r2, visible: v2 } = useReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => { setSent(false); e.target.reset() }, 3000)
  }

  return (
    <section className="py-24 bg-[#f8faff]" id="contact">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-badge">Get In Touch</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            Let's Start Your <span className="gradient-text">Project Today</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">

          {/* Form */}
          <div ref={r1} className={`glass rounded-2xl p-8 transition-all duration-700 ${v1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Your Name</label>
                  <input className="form-input" type="text" placeholder="John Smith" required />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address</label>
                  <input className="form-input" type="email" placeholder="john@company.com" required />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Phone Number</label>
                <input className="form-input" type="tel" placeholder="+1 (555) 000-0000" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Service Interested In</label>
                <select className="form-input" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', paddingRight: 40, appearance: 'none' }}>
                  <option value="">Select a service</option>
                  <option>Website Development</option>
                  <option>SEO Optimization</option>
                  <option>Digital Marketing</option>
                  <option>App Development</option>
                  <option>Full Package</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Your Message</label>
                <textarea className="form-input resize-none" rows="4" placeholder="Tell us about your project..." />
              </div>
              <button type="submit" className="w-full btn-primary justify-center py-4 text-base"
                style={sent ? { background: 'linear-gradient(135deg,#10b981,#059669)' } : {}}>
                {sent ? (
                  <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Message Sent!</>
                ) : (
                  <><span>Send Message</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg></>
                )}
              </button>
            </form>
          </div>

          {/* Info */}
          <div ref={r2} className={`transition-all duration-700 delay-150 ${v2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm mb-5">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-5 mb-6">
                {info.map(({ icon, title, val }) => (
                  <div key={title} className="flex gap-3.5 items-start">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-base flex-shrink-0">{icon}</div>
                    <div>
                      <strong className="block text-xs font-bold text-gray-900 mb-0.5">{title}</strong>
                      <span className="text-sm text-gray-500">{val}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2.5">
                {socials.map(s => (
                  <a key={s.label} href={s.href} aria-label={s.label}
                    className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200">
                    {s.svg}
                  </a>
                ))}
              </div>
            </div>
            {/* Map visual */}
            <div className="relative h-44 rounded-2xl overflow-hidden" style={{ border: '1px solid #bfdbfe' }}>
              <img
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80&fit=crop"
                alt="Office location"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(59,130,246,0.45),rgba(29,78,216,0.30))' }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-white">123 Innovation Ave</div>
                  <div className="text-xs text-white/80">Tech City, CA 90210</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
