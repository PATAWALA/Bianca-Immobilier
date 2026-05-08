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
    if (path === '/louer' || path === '/vendre') return false // redirections
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
    <nav className="bg-white/90 backdrop-blur shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="text-2xl font-serif font-bold text-dark">
            Bianca <span className="text-gold">Immobilier</span>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gold",
                  isActive(link.href) ? "text-gold" : "text-gray-700"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gold text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-gold/90 transition"
            >
              Nous Contacter
            </Link>
          </div>

          {/* Mobile */}
          <button className="lg:hidden p-2 text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white px-4 py-4 space-y-3">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-gray-700 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-gold text-white py-2.5 rounded-md mt-3 font-medium"
          >
            Nous Contacter
          </Link>
        </div>
      )}
    </nav>
  )
}