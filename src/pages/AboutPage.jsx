import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

/* ─── DATA ─────────────────────────────────────────────────── */
const values = [
  {
    icon: '💡',
    title: 'Innovation',
    desc: 'We stay ahead of the curve by embracing emerging technologies and creative problem-solving. Every project is an opportunity to push boundaries and deliver forward-thinking solutions.',
  },
  {
    icon: '⭐',
    title: 'Excellence',
    desc: 'We hold ourselves to the highest standards in every line of code, every design pixel, and every client interaction. Good enough is never good enough for us.',
  },
  {
    icon: '🤝',
    title: 'Integrity',
    desc: 'Honest communication and transparent pricing form the bedrock of every relationship we build. We do what we say and say what we mean — always.',
  },
  {
    icon: '📈',
    title: 'Growth',
    desc: 'We grow alongside our clients, treating their success as our own. Continuous learning and measurable progress drive everything we do, for them and for ourselves.',
  },
]

const team = [
  {
    name: 'Alex Rodriguez',
    role: 'CEO & Founder',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop',
  },
  {
    name: 'Sarah Kim',
    role: 'Head of Design',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&fit=crop',
  },
  {
    name: 'Marcus Johnson',
    role: 'Lead Developer',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop',
  },
  {
    name: 'Priya Patel',
    role: 'SEO Director',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80&fit=crop',
  },
  {
    name: 'James Wilson',
    role: 'Marketing Head',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80&fit=crop',
  },
  {
    name: 'Lisa Chen',
    role: 'App Developer',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80&fit=crop',
  },
]

const milestones = [
  {
    year: '2019',
    title: 'Founded DigiTalk',
    desc: 'Started with a small but passionate team of 5 on a mission to democratise world-class digital solutions for businesses of every size.',
  },
  {
    year: '2020',
    title: 'First 25 Clients',
    desc: 'Crossed our first major milestone — 25 satisfied clients across e-commerce, SaaS, and professional services sectors.',
  },
  {
    year: '2022',
    title: 'Team of 30+',
    desc: 'Scaled our team to over 30 specialists, expanding our service portfolio to include dedicated SEO, paid media, and mobile app divisions.',
  },
  {
    year: '2024',
    title: '500+ Projects Delivered',
    desc: 'Celebrated the delivery of our 500th project, cementing DigiTalk as one of the most trusted IT agencies in the region.',
  },
]

/* ─── SOCIAL ICONS ──────────────────────────────────────────── */
function IconLinkedIn() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20.447 20.452H17.21v-5.569c0-1.328-.024-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.984V9.197h3.105v1.562h.044c.432-.82 1.489-1.684 3.065-1.684 3.279 0 3.883 2.157 3.883 4.963v6.414zM5.337 7.637a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm1.554 12.815H3.782V9.197h3.109v11.255zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function IconTwitter() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function IconGitHub() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

/* ─── SECTION WRAPPERS ──────────────────────────────────────── */
function RevealSection({ children, className = '' }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   ABOUT PAGE
═══════════════════════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <main className="w-full">

      {/* ── 1. HERO ──────────────────────────────────────────── */}
      <section
        className="relative min-h-[88vh] flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0a0f1e 0%,#0f172a 50%,#1e1b4b 100%)' }}
      >
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=85&fit=crop')`,
          }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(10,15,30,0.80)' }} />

        {/* Decorative orbs */}
        <div className="orb w-96 h-96 top-[-80px] left-[-80px] opacity-20" style={{ background: '#3b82f6' }} />
        <div className="orb w-72 h-72 bottom-[-60px] right-[-60px] opacity-15" style={{ background: '#6366f1' }} />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 text-center py-28">
          <span className="section-badge-light">About DigiTalk</span>
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-white mt-4 mb-6 leading-tight">
            We Are <span className="gradient-text-light">DigiTalk</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            A premier IT agency built on creativity, technical excellence, and an unwavering commitment
            to driving measurable growth for the brands we partner with.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/contact" className="btn-primary">Work With Us</a>
            <a href="/portfolio" className="btn-white-outline">View Our Work</a>
          </div>
        </div>
      </section>

      {/* ── 2. STORY ─────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1440px] mx-auto px-6">
          <RevealSection>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left — text */}
              <div>
                <span className="section-badge">Our Story</span>
                <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mt-2 mb-6">
                  Built with purpose,{' '}
                  <span className="gradient-text">grown with passion</span>
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-[1.05rem]">
                  <p>
                    DigiTalk was founded in 2019 with a simple but bold idea: every business, regardless
                    of size or budget, deserves world-class digital solutions. What started as a tight-knit
                    team of five passionate technologists has blossomed into a full-service agency of
                    50+ specialists spanning design, development, SEO, and digital marketing.
                  </p>
                  <p>
                    Over the years we have partnered with startups, scale-ups, and established enterprises
                    across three continents, delivering over 500 projects that have collectively generated
                    millions in new revenue for our clients.
                  </p>
                  <p>
                    Our mission remains unchanged: harness the full power of technology and creativity
                    to turn digital challenges into lasting competitive advantages for the brands that
                    trust us.
                  </p>
                </div>
                <div className="flex gap-6 mt-10">
                  <div className="text-center">
                    <p className="text-4xl font-extrabold gradient-text">50+</p>
                    <p className="text-sm text-gray-500 mt-1 font-medium">Team Members</p>
                  </div>
                  <div className="w-px bg-gray-200" />
                  <div className="text-center">
                    <p className="text-4xl font-extrabold gradient-text">500+</p>
                    <p className="text-sm text-gray-500 mt-1 font-medium">Projects</p>
                  </div>
                  <div className="w-px bg-gray-200" />
                  <div className="text-center">
                    <p className="text-4xl font-extrabold gradient-text">5+</p>
                    <p className="text-sm text-gray-500 mt-1 font-medium">Years</p>
                  </div>
                </div>
              </div>

              {/* Right — image */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85&fit=crop"
                    alt="DigiTalk team office"
                    className="w-full h-[460px] object-cover"
                  />
                </div>
                {/* Floating stat — top-left */}
                <div className="glass rounded-2xl p-5 absolute -top-6 -left-6 shadow-xl min-w-[130px] text-center">
                  <p className="text-3xl font-extrabold gradient-text">5+</p>
                  <p className="text-xs font-semibold text-gray-500 mt-0.5 uppercase tracking-wide">Years</p>
                </div>
                {/* Floating stat — bottom-right */}
                <div className="glass rounded-2xl p-5 absolute -bottom-6 -right-6 shadow-xl min-w-[140px] text-center">
                  <p className="text-3xl font-extrabold gradient-text">50+</p>
                  <p className="text-xs font-semibold text-gray-500 mt-0.5 uppercase tracking-wide">Experts</p>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── 3. VALUES ────────────────────────────────────────── */}
      <section className="bg-[#f8faff] py-24">
        <div className="max-w-[1440px] mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-14">
              <span className="section-badge">What We Stand For</span>
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mt-2">
                Our Core <span className="gradient-text">Values</span>
              </h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                Four principles that guide every decision, every project, and every relationship we build.
              </p>
            </div>
          </RevealSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {values.map((v, i) => (
              <RevealSection key={v.title}>
                <div
                  className="glass rounded-2xl p-7 card-hover h-full"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. TEAM ──────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1440px] mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-14">
              <span className="section-badge">The People</span>
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mt-2">
                Meet Our <span className="gradient-text">Team</span>
              </h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                Talented individuals united by a shared passion for building exceptional digital experiences.
              </p>
            </div>
          </RevealSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <RevealSection key={member.name}>
                <div
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm card-hover p-8 text-center"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-24 h-24 object-cover rounded-full mx-auto mb-5 ring-4 ring-blue-50"
                  />
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-500 text-sm font-semibold mt-1 mb-5">{member.role}</p>
                  {/* Social buttons */}
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-300 transition-colors duration-200"
                    >
                      <IconLinkedIn />
                    </a>
                    <a
                      href="#"
                      aria-label="Twitter / X"
                      className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-sky-500 hover:border-sky-300 transition-colors duration-200"
                    >
                      <IconTwitter />
                    </a>
                    <a
                      href="#"
                      aria-label="GitHub"
                      className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-400 transition-colors duration-200"
                    >
                      <IconGitHub />
                    </a>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. MILESTONES ────────────────────────────────────── */}
      <section className="bg-[#f8faff] py-24">
        <div className="max-w-[1440px] mx-auto px-6">
          <RevealSection>
            <div className="text-center mb-16">
              <span className="section-badge">Our Journey</span>
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mt-2">
                Key <span className="gradient-text">Milestones</span>
              </h2>
            </div>
          </RevealSection>

          {/* Desktop: horizontal timeline */}
          <div className="hidden lg:block">
            <RevealSection>
              {/* Connecting line */}
              <div className="relative flex items-start justify-between gap-0">
                <div
                  className="absolute top-5 left-[12.5%] right-[12.5%] h-0.5"
                  style={{ background: 'linear-gradient(90deg,#3b82f6,#6366f1)' }}
                />
                {milestones.map((m, i) => (
                  <div key={m.year} className="relative flex flex-col items-center flex-1 px-4">
                    {/* Dot */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold z-10 ring-4 ring-white shadow-lg"
                      style={{ background: 'linear-gradient(135deg,#3b82f6,#2563eb)' }}
                    >
                      {i + 1}
                    </div>
                    <div className="glass rounded-2xl p-6 mt-6 text-center w-full">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3"
                        style={{ background: 'linear-gradient(135deg,#3b82f6,#2563eb)' }}
                      >
                        {m.year}
                      </span>
                      <h3 className="font-bold text-gray-900 text-base mb-2">{m.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="lg:hidden space-y-0">
            {milestones.map((m, i) => (
              <RevealSection key={m.year}>
                <div className="flex gap-5">
                  {/* Line + dot */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-lg"
                      style={{ background: 'linear-gradient(135deg,#3b82f6,#2563eb)' }}
                    >
                      {i + 1}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-0.5 flex-1 my-2" style={{ background: 'linear-gradient(180deg,#3b82f6,#e5e7eb)' }} />
                    )}
                  </div>
                  {/* Content */}
                  <div className="glass rounded-2xl p-6 mb-6 flex-1">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3"
                      style={{ background: 'linear-gradient(135deg,#3b82f6,#2563eb)' }}
                    >
                      {m.year}
                    </span>
                    <h3 className="font-bold text-gray-900 text-base mb-2">{m.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA ───────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-24"
        style={{ background: 'linear-gradient(135deg,#0a0f1e 0%,#0f172a 50%,#1e1b4b 100%)' }}
      >
        <div className="orb w-80 h-80 top-[-60px] right-[-60px] opacity-20" style={{ background: '#3b82f6' }} />
        <div className="orb w-64 h-64 bottom-[-40px] left-[-40px] opacity-15" style={{ background: '#6366f1' }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 text-center">
          <RevealSection>
            <span className="section-badge-light">Let's Collaborate</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-4 mb-5">
              Ready to Build Something{' '}
              <span className="gradient-text-light">Great?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              Tell us about your project and let's craft a digital strategy that delivers real, lasting results.
            </p>
            <a href="/contact" className="btn-primary text-base px-10 py-4">
              Start a Conversation →
            </a>
          </RevealSection>
        </div>
      </section>

    </main>
  )
}
