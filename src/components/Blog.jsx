import { useReveal } from '../hooks/useReveal'

const posts = [
  { gradient: 'linear-gradient(135deg,#1e40af,#3b82f6)', tag: 'Web Dev',   date: 'Mar 15, 2025', read: '5 min', title: '10 Website Trends That Will Dominate 2025',         desc: 'From AI-powered personalization to glassmorphism and micro-interactions — here\'s what\'s shaping the web.' },
  { gradient: 'linear-gradient(135deg,#065f46,#10b981)', tag: 'SEO',       date: 'Mar 8, 2025',  read: '7 min', title: 'The Ultimate Guide to Technical SEO in 2025',       desc: 'Core Web Vitals, structured data, and AI-driven search — master the technical signals that matter most.' },
  { gradient: 'linear-gradient(135deg,#7c2d12,#f97316)', tag: 'Marketing', date: 'Feb 28, 2025', read: '6 min', title: 'How to 4x Your ROAS with Smarter Ad Targeting',     desc: 'Advanced audience segmentation, creative testing, and bid strategies that consistently deliver 4x+ returns.' },
]

function BlogCard({ gradient, tag, date, read, title, desc, delay }) {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref}
      className={`bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: delay, boxShadow: '0 4px 20px rgba(59,130,246,0.06)' }}>
      <div className="h-48 relative" style={{ background: gradient }}>
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white border border-white/30 bg-white/15 uppercase tracking-wide">{tag}</span>
      </div>
      <div className="p-6">
        <div className="flex gap-2 text-xs text-gray-400 mb-2.5">
          <span>{date}</span><span>·</span><span>{read} read</span>
        </div>
        <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">{desc}</p>
        <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:gap-3 transition-all duration-200">
          Read More
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  )
}

export default function Blog() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-badge">Insights</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            Latest from Our <span className="gradient-text">Knowledge Hub</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {posts.map((p, i) => <BlogCard key={i} {...p} delay={`${i * 100}ms`} />)}
        </div>
      </div>
    </section>
  )
}
