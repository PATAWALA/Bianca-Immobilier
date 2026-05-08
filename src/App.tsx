import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Search from './pages/Search'
import ServicePage from './pages/ServicePage'
import ServicesList from './pages/ServicesList'
import Contact from './pages/Contact'
import PropertyDetail from './pages/PropertyDetail'   // 👈 ajout

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
          <Route path="/property/:id" element={<PropertyDetail />} />   {/* 👈 nouvelle route */}
          <Route path="/services" element={<ServicesList />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}