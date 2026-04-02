import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const info = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.45-.45a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
    title: 'Phone', val: '+91 96676 74425 / +91 98914 55836', link: 'tel:+919667674425', color: 'blue',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    title: 'Email', val: 'digitalk9891@gmail.com', link: 'mailto:digitalk9891@gmail.com', color: 'purple',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    title: 'Office', val: 'H.No.-2810, Gali No.- E-68, 2nd 60 Feet Road, Molarband Extn. Badarpur Border, New Delhi', link: '#', color: 'green',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    title: 'Hours', val: 'Mon–Sat: 9AM–7PM IST', link: '#', color: 'orange',
  },
]

const colorMap = {
  blue:   'bg-blue-50 text-blue-600',
  purple: 'bg-purple-50 text-purple-600',
  green:  'bg-emerald-50 text-emerald-600',
  orange: 'bg-orange-50 text-orange-600',
}

const faqs = [
  { q: 'How long does a typical project take?', a: 'Website projects take 3–6 weeks. Mobile apps typically 8–16 weeks. SEO campaigns show results in 3–6 months.' },
  { q: 'Do you work with international clients?', a: 'Absolutely. We work with clients across North America, Europe, Middle East, and Asia Pacific.' },
  { q: 'What is your development process?', a: 'We follow Discovery → Design → Development → Testing → Launch → Support. Every step is transparent with weekly updates.' },
  { q: 'Do you offer post-launch support?', a: 'Yes. All projects include 30 days of free post-launch support. Extended maintenance plans are also available.' },
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const { ref: r1, visible: v1 } = useReveal()
  const { ref: r2, visible: v2 } = useReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => { setSent(false); e.target.reset() }, 3500)
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0a0f1e 0%,#0f172a 50%,#1e1b4b 100%)', minHeight: 340 }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle,rgba(59,130,246,0.12),transparent 70%)' }} />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-blue-300 border border-blue-500/30 mb-5"
            style={{ background: 'rgba(59,130,246,0.10)' }}>
            ✦ Get In Touch
          </span>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5">
            Let's Build Something <span style={{ background: 'linear-gradient(135deg,#60a5fa,#a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Great Together</span>
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Tell us about your project and we'll get back to you within 24 hours with a tailored strategy.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-[#f8faff]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-start">

            {/* Form */}
            <div ref={r1} className={`glass rounded-3xl p-10 transition-all duration-700 ${v1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-sm text-gray-500 mb-8">We respond to every inquiry within 24 hours.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Your Name *</label>
                    <input className="form-input" type="text" placeholder="John Smith" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Email Address *</label>
                    <input className="form-input" type="email" placeholder="john@company.com" required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Phone Number</label>
                    <input className="form-input" type="tel" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Company Name</label>
                    <input className="form-input" type="text" placeholder="Your Company" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">Service Interested In</label>
                  <select className="form-input" style={{ appearance: 'none', backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', paddingRight: 40 }}>
                    <option value="">Select a service</option>
                    <option>Website Development</option>
                    <option>SEO Optimization</option>
                    <option>Digital Marketing</option>
                    <option>App Development</option>
                    <option>IT Consulting</option>
                    <option>UI/UX Design</option>
                    <option>Full Package</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">Project Budget</label>
                  <select className="form-input" style={{ appearance: 'none', backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', paddingRight: 40 }}>
                    <option value="">Select budget range</option>
                    <option>Under $1,000</option>
                    <option>$1,000 – $5,000</option>
                    <option>$5,000 – $10,000</option>
                    <option>$10,000 – $25,000</option>
                    <option>$25,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">Your Message *</label>
                  <textarea className="form-input resize-none" rows="5" placeholder="Tell us about your project, goals, and timeline..." required />
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
            <div ref={r2} className={`space-y-5 transition-all duration-700 delay-150 ${v2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {/* Contact info */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-extrabold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-5">
                  {info.map(({ icon, title, val, link, color }) => (
                    <a key={title} href={link}
                      className="flex gap-4 items-start group hover:bg-gray-50 rounded-xl p-2 -mx-2 transition-colors duration-200">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${colorMap[color]}`}>{icon}</div>
                      <div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-0.5">{title}</div>
                        <div className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">{val}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map visual */}
              <div className="relative h-52 rounded-3xl overflow-hidden" style={{ border: '1px solid #bfdbfe' }}>
                <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80&fit=crop"
                  alt="Office location" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(59,130,246,0.45),rgba(29,78,216,0.30))' }} />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-white">123 Innovation Ave</div>
                    <div className="text-xs text-white/80">Tech City, CA 90210</div>
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div className="bg-blue-600 rounded-3xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div className="font-extrabold text-lg">Fast Response</div>
                </div>
                <p className="text-sm text-white/75 leading-relaxed">We typically respond within <strong className="text-white">2–4 hours</strong> during business hours. Urgent projects? Call us directly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-badge">FAQ</span>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">Common <span className="gradient-text">Questions</span></h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-bold text-gray-900 text-sm">{f.q}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5"
                    style={{ transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}>
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
