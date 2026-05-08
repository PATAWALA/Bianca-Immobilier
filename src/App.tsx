import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Search from './pages/Search'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ServicePage from './pages/ServicePage'
import ServicesList from './pages/ServicesList'   // 👈 ajout
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/louer" element={<Navigate to="/recherche?transaction=location" replace />} />
          <Route path="/vendre" element={<Navigate to="/recherche?transaction=vente" replace />} />
          <Route path="/recherche" element={<Search />} />
          <Route path="/services" element={<ServicesList />} />          {/* 👈 nouvelle route */}
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}