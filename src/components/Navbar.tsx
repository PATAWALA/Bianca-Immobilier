import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'

const mainLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'À louer', href: '/louer?transaction=location' },
  { label: 'À vendre', href: '/vendre?transaction=vente' },
  { label: 'Villa', href: '/recherche?type=villa' },
  { label: 'Parcelle', href: '/recherche?type=parcelle' },
  { label: 'Nos Services', href: '/services' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (href: string) => {
    const [path, search] = href.split('?')
    if (path === '/louer' || path === '/vendre') return false
    if (location.pathname === path) {
      if (search) {
        const params = new URLSearchParams(search)
        const current = new URLSearchParams(location.search)
        return current.toString() === params.toString()
      }
      return true
    }
    return false
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo + Nom */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo.jpg"
              alt="Bianca Immobilier"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-2xl font-serif font-bold text-dark">
              Bianca <span className="text-gold">Immobilier</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors rounded-lg",
                  isActive(link.href)
                    ? "text-gold bg-gold/10"
                    : "text-gray-700 hover:text-gold hover:bg-gray-50"
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gold rounded-full" />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2.5 bg-gold text-white rounded-lg text-sm font-medium hover:bg-gold/90 transition-all hover:shadow-md hover:shadow-gold/20"
            >
              Nous Contacter
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-gold transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-2">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2.5 rounded-lg text-base font-medium transition-colors",
                  isActive(link.href)
                    ? "text-gold bg-gold/10"
                    : "text-gray-700 hover:text-gold hover:bg-gray-50"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-gold text-white py-3 rounded-lg mt-3 font-medium hover:bg-gold/90 transition-all"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}