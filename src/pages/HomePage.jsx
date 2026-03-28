import Hero         from '../components/Hero'
import Stats        from '../components/Stats'
import About        from '../components/About'
import Services     from '../components/Services'
import WhyUs        from '../components/WhyUs'
import Process      from '../components/Process'
import Portfolio    from '../components/Portfolio'
import ImpactStats  from '../components/ImpactStats'
import Testimonials from '../components/Testimonials'
import Blog         from '../components/Blog'
import CTA          from '../components/CTA'
import Contact      from '../components/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyUs />
      <Process />
      <Portfolio />
      <ImpactStats />
      <Testimonials />
      <Blog />
      <CTA />
      <Contact />
    </>
  )
}
