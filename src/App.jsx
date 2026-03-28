import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import AnnouncementBar from './components/AnnouncementBar'
import Navbar          from './components/Navbar'
import Footer          from './components/Footer'
import ScrollTop       from './components/ScrollTop'
import ChatBot         from './components/ChatBot'
import SocialSidebar   from './components/SocialSidebar'

import HomePage      from './pages/HomePage'
import ServicesPage  from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import AboutPage     from './pages/AboutPage'
import BlogPage      from './pages/BlogPage'
import ContactPage   from './pages/ContactPage'

import WebDevPage    from './pages/services/WebDevPage'
import SeoPage       from './pages/services/SeoPage'
import MarketingPage from './pages/services/MarketingPage'
import AppDevPage    from './pages/services/AppDevPage'
import ConsultingPage from './pages/services/ConsultingPage'
import UiUxPage      from './pages/services/UiUxPage'

/* scroll to top on route change */
function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <ScrollReset />
      <main>
        <Routes>
          <Route path="/"          element={<HomePage />} />
          <Route path="/services"                 element={<ServicesPage />} />
          <Route path="/services/web-development" element={<WebDevPage />} />
          <Route path="/services/seo"             element={<SeoPage />} />
          <Route path="/services/digital-marketing" element={<MarketingPage />} />
          <Route path="/services/app-development" element={<AppDevPage />} />
          <Route path="/services/it-consulting"   element={<ConsultingPage />} />
          <Route path="/services/ui-ux-design"    element={<UiUxPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about"     element={<AboutPage />} />
          <Route path="/blog"      element={<BlogPage />} />
          <Route path="/contact"   element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollTop />
      <SocialSidebar />
      <ChatBot />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
