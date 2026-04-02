import { useState, useEffect, useRef } from 'react'

/* ── conversation tree ───────────────────────────────────── */
const BOT_NAME  = 'Digi'
const BOT_DELAY = 900   // ms typing delay

const FLOWS = {
  start: {
    msg: "Hi there! 👋 I'm **Digi**, DigiTalk's virtual assistant. How can I help you today?",
    chips: [
      { label: '🌐 Website Development', next: 'webdev' },
      { label: '🔍 SEO & Rankings',       next: 'seo' },
      { label: '📱 App Development',      next: 'app' },
      { label: '📣 Digital Marketing',    next: 'marketing' },
      { label: '💰 Pricing & Packages',   next: 'pricing' },
      { label: '📞 Talk to a Human',      next: 'human' },
    ],
  },
  webdev: {
    msg: "Great choice! 🌐 We build **blazing-fast, SEO-optimized websites** using React, Next.js, WordPress & Shopify.\n\n✅ Custom Design\n✅ CMS Integration\n✅ 99 PageSpeed Score\n✅ Mobile-first\n\nMost websites are ready in **3–6 weeks**. Want to get started?",
    chips: [
      { label: '💬 Get a Free Quote', next: 'quote' },
      { label: '🔙 Back to Menu',     next: 'start' },
    ],
  },
  seo: {
    msg: "We love SEO! 🔍 Our data-driven approach has helped clients go from **Page 5 → Page 1** in under 4 months.\n\n📈 380% avg traffic growth\n🔑 1,200+ keywords ranked\n🔗 White-hat link building\n📊 Monthly reports\n\nWant a **free SEO audit** of your site?",
    chips: [
      { label: '✅ Yes, Free Audit!',  next: 'quote' },
      { label: '🔙 Back to Menu',      next: 'start' },
    ],
  },
  app: {
    msg: "Let's build something amazing! 📱 We develop iOS, Android & cross-platform apps using Flutter & React Native.\n\n⭐ 4.9★ avg app rating\n📥 50k+ downloads\n🚀 QA tested & launch-ready\n\nTell us your idea and we'll make it real!",
    chips: [
      { label: '💬 Discuss My App Idea', next: 'quote' },
      { label: '🔙 Back to Menu',        next: 'start' },
    ],
  },
  marketing: {
    msg: "Let's grow your brand! 📣 Our full-funnel digital marketing drives **real, measurable results**:\n\n💰 4.8x avg ROAS on ad spend\n🎯 Google, Meta, TikTok Ads\n📧 Email & content marketing\n📊 Real-time analytics dashboard",
    chips: [
      { label: '🚀 Launch a Campaign',  next: 'quote' },
      { label: '🔙 Back to Menu',       next: 'start' },
    ],
  },
  pricing: {
    msg: "Here's a quick overview of our packages 💰:\n\n🟢 **Starter** — from $499/mo\nIdeal for small businesses & startups\n\n🔵 **Growth** — from $999/mo\nFull-stack digital presence (Most Popular)\n\n🟣 **Enterprise** — Custom\nDedicated team + priority support\n\nAll plans include free consultation!",
    chips: [
      { label: '💬 Get Custom Quote',  next: 'quote' },
      { label: '🔙 Back to Menu',      next: 'start' },
    ],
  },
  human: {
    msg: "Absolutely! Our team is available **Mon–Sat, 9AM–7PM IST** 🕐\n\n📧 digitalk9891@gmail.com\n📞 +91 96676 74425\n📞 +91 98914 55836\n\nOr fill out our contact form and we'll get back to you within **2–4 hours**!",
    chips: [
      { label: '📝 Contact Form', next: 'contact_redirect' },
      { label: '🔙 Back to Menu', next: 'start' },
    ],
  },
  quote: {
    msg: "Awesome! 🎉 To get your **free custom quote**, just head to our contact page and fill in a few details.\n\nWe'll respond with a detailed proposal within **24 hours** — no obligations, no hard sells!",
    chips: [
      { label: '📝 Go to Contact Page', next: 'contact_redirect' },
      { label: '🔙 Back to Menu',       next: 'start' },
    ],
  },
  contact_redirect: {
    msg: "Perfect! Redirecting you to our contact page... 🚀\n\nIf you have any more questions, I'm always here to help!",
    chips: [
      { label: '🔙 Back to Menu', next: 'start' },
    ],
    redirect: '/contact',
  },
}

/* ── parse bold markdown ─────────────────────────────────── */
function parseBold(text) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith('**') ? <strong key={i} className="font-bold text-gray-900">{part.slice(2, -2)}</strong> : part
  )
}

function MsgText({ text }) {
  return (
    <span className="whitespace-pre-line text-sm leading-relaxed">
      {text.split('\n').map((line, i) => (
        <span key={i}>{parseBold(line)}{i < text.split('\n').length - 1 && <br />}</span>
      ))}
    </span>
  )
}

/* ── typing dots ─────────────────────────────────────────── */
function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map(i => (
        <span key={i} className="w-2 h-2 rounded-full bg-blue-400 inline-block"
          style={{ animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }} />
      ))}
    </div>
  )
}

/* ── main chatbot ────────────────────────────────────────── */
export default function ChatBot() {
  const [open,     setOpen]     = useState(false)
  const [messages, setMessages] = useState([])
  const [chips,    setChips]    = useState([])
  const [typing,   setTyping]   = useState(false)
  const [notif,    setNotif]    = useState(false)
  const [pulse,    setPulse]    = useState(false)
  const bodyRef = useRef(null)

  /* auto-open after 6 seconds */
  useEffect(() => {
    const t1 = setTimeout(() => { setNotif(true); setPulse(true) }, 4000)
    const t2 = setTimeout(() => { setOpen(true); setNotif(false); setPulse(false); startFlow() }, 7000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  /* scroll to bottom on new message */
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [messages, typing])

  const startFlow = () => {
    setMessages([])
    setChips([])
    showBotMsg('start')
  }

  const showBotMsg = (flowKey) => {
    const flow = FLOWS[flowKey]
    if (!flow) return
    setTyping(true)
    setChips([])
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { from: 'bot', text: flow.msg, key: Date.now() }])
      setChips(flow.chips || [])
      if (flow.redirect) {
        setTimeout(() => { window.location.href = flow.redirect }, 1200)
      }
    }, BOT_DELAY)
  }

  const handleChip = (chip) => {
    setMessages(prev => [...prev, { from: 'user', text: chip.label, key: Date.now() }])
    setChips([])
    showBotMsg(chip.next)
  }

  const handleOpen = () => {
    setOpen(true)
    setNotif(false)
    setPulse(false)
    if (messages.length === 0) startFlow()
  }

  return (
    <>
      {/* bounce keyframes */}
      <style>{`
        @keyframes bounce {
          0%,80%,100% { transform: translateY(0); }
          40%          { transform: translateY(-6px); }
        }
        @keyframes chatSlideUp {
          from { opacity:0; transform:translateY(20px) scale(0.95); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes notifPop {
          0%   { transform:scale(0); }
          70%  { transform:scale(1.2); }
          100% { transform:scale(1); }
        }
      `}</style>

      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-24 left-5 z-[200] w-[360px] rounded-3xl overflow-hidden flex flex-col"
          style={{
            boxShadow: '0 24px 64px rgba(0,0,0,0.20), 0 0 0 1px rgba(59,130,246,0.12)',
            animation: 'chatSlideUp 0.35s cubic-bezier(0.22,1,0.36,1)',
            maxHeight: '520px',
            background: '#fff',
          }}>

          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 flex-shrink-0"
            style={{ background: 'linear-gradient(135deg,#1d4ed8,#3b82f6)' }}>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl font-extrabold text-white border-2 border-white/30">D</div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-600" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-white text-sm">{BOT_NAME} — DigiTalk Assistant</div>
              <div className="text-blue-200 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
                Online · Typically replies instantly
              </div>
            </div>
            <button onClick={() => setOpen(false)}
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors duration-200 text-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={bodyRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
            style={{ background: '#f8faff', minHeight: 0 }}>
            {messages.map((m) => (
              <div key={m.key} className={`flex gap-2.5 items-end ${m.from === 'user' ? 'flex-row-reverse' : ''}`}>
                {m.from === 'bot' && (
                  <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-extrabold text-white"
                    style={{ background: 'linear-gradient(135deg,#1d4ed8,#3b82f6)' }}>D</div>
                )}
                <div className={`max-w-[82%] px-4 py-2.5 rounded-2xl ${m.from === 'bot'
                  ? 'bg-white border border-gray-100 text-gray-700 rounded-bl-sm shadow-sm'
                  : 'text-white rounded-br-sm'}`}
                  style={m.from === 'user' ? { background: 'linear-gradient(135deg,#1d4ed8,#3b82f6)' } : {}}>
                  <MsgText text={m.text} />
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex gap-2.5 items-end">
                <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-extrabold text-white"
                  style={{ background: 'linear-gradient(135deg,#1d4ed8,#3b82f6)' }}>D</div>
                <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm shadow-sm">
                  <TypingDots />
                </div>
              </div>
            )}
          </div>

          {/* Quick chips */}
          {chips.length > 0 && (
            <div className="px-4 py-3 flex flex-wrap gap-2 border-t border-gray-100 bg-white flex-shrink-0">
              {chips.map(c => (
                <button key={c.label} onClick={() => handleChip(c)}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 whitespace-nowrap">
                  {c.label}
                </button>
              ))}
            </div>
          )}

          {/* Input bar (decorative) */}
          <div className="px-4 py-3 border-t border-gray-100 bg-white flex items-center gap-2 flex-shrink-0">
            <div className="flex-1 bg-gray-50 rounded-full px-4 py-2 text-xs text-gray-400 border border-gray-200">
              Choose an option above or type a message...
            </div>
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,#1d4ed8,#3b82f6)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            </button>
          </div>
        </div>
      )}

      {/* Notification bubble */}
      {notif && !open && (
        <div className="fixed bottom-28 left-6 z-[199] bg-white rounded-2xl px-4 py-2.5 shadow-xl border border-blue-100 text-sm font-medium text-gray-700 max-w-[220px]"
          style={{ animation: 'notifPop 0.3s ease forwards' }}>
          👋 Hi! Need help? Chat with us!
          <div className="absolute -bottom-2 left-5 w-4 h-4 bg-white border-b border-r border-blue-100 rotate-45" />
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={open ? () => setOpen(false) : handleOpen}
        className="fixed bottom-6 left-5 z-[200] w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-110"
        style={{ background: 'linear-gradient(135deg,#1d4ed8,#3b82f6)', boxShadow: '0 8px 32px rgba(59,130,246,0.45)' }}
        aria-label="Chat with us">
        {/* Pulse ring */}
        {pulse && (
          <span className="absolute inset-0 rounded-full animate-ping"
            style={{ background: 'rgba(59,130,246,0.35)' }} />
        )}
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
          </svg>
        )}
        {/* Unread dot */}
        {!open && messages.length === 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[9px] font-bold flex items-center justify-center border-2 border-white">1</span>
        )}
      </button>
    </>
  )
}
