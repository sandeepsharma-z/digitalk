export default function AnnouncementBar() {
  return (
    <div
      className="flex items-center justify-center gap-4 px-4 py-2.5 text-white text-sm font-medium relative z-50"
      style={{
        background: 'linear-gradient(135deg,#1e40af,#2563eb,#1d4ed8)',
        backgroundSize: '200% 200%',
        animation: 'gradShift 4s ease infinite',
      }}
    >
      <span>🚀 Smart IT Solutions for Modern Businesses</span>
      <a
        href="#contact"
        className="flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold border border-white/30 bg-white/15 hover:bg-white/25 transition-all duration-200 whitespace-nowrap"
      >
        Get Free Consultation
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  )
}
