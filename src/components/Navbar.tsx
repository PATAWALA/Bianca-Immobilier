import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '../lib/utils'

const mainLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'À louer', href: '/louer?transaction=location' },
  { label: 'À vendre', href: '/vendre?transaction=vente' },
  { label: 'Villa', href: '/recherche?type=villa' },
  { label: 'Parcelle', href: '/recherche?type=parcelle' },
]

const servicesLinks = [
  { label: 'Décoration d’intérieur', href: '/services/decoration' },
  { label: 'Construction', href: '/services/construction' },
  { label: 'Gestion de biens', href: '/services/gestion' },
  { label: 'Aménagement', href: '/services/amenagement' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Ferme le dropdown quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }
    if (servicesOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [servicesOpen])

  // Détection lien actif : pour les routes avec query params, on vérifie le path + search
  const isActive = (href: string) => {
    const [path, search] = href.split('?')
    if (path === '/louer' || path === '/vendre') {
      // Ces routes redirigent, on ne les matérialise pas dans l'URL – toujours non actif
      return false
    }
    if (location.pathname === '/' && href === '/') return true
    if (location.pathname === '/recherche' && search) {
      const params = new URLSearchParams(search)
      const current = new URLSearchParams(location.search)
      if (params.get('type') && params.get('type') === current.get('type')) return true
      if (params.get('transaction') && params.get('transaction') === current.get('transaction')) return true
    }
    return location.pathname === path && !search
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

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gold transition-colors"
              >
                Nos Services
                <ChevronDown className={cn("w-4 h-4 transition-transform", servicesOpen && "rotate-180")} />
              </button>
              {servicesOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 border border-gray-100">
                  {servicesLinks.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gold/10 hover:text-gold"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="bg-gold text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-gold/90 transition"
            >
              Nous Contacter
            </Link>
          </div>

          <button className="lg:hidden p-2 text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white px-4 py-4 space-y-3">
          {mainLinks.map((link) => (
            <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)}
               className="block text-base font-medium text-gray-700 hover:text-gold">
              {link.label}
            </Link>
          ))}
          <p className="text-sm font-semibold text-gold pt-2">Nos Services</p>
          {servicesLinks.map((service) => (
            <Link key={service.href} to={service.href} onClick={() => setIsOpen(false)}
               className="block pl-3 text-sm text-gray-600 hover:text-gold">
              {service.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)}
             className="block w-full text-center bg-gold text-white py-2.5 rounded-md mt-3 font-medium">
            Nous Contacter
          </Link>
        </div>
      )}
    </nav>
  )
}