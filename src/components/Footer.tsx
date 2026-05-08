import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'À louer', href: '/louer?transaction=location' },
  { label: 'À vendre', href: '/vendre?transaction=vente' },
  { label: 'Villa', href: '/recherche?type=villa' },
  { label: 'Parcelle', href: '/recherche?type=parcelle' },
  { label: 'Nos Services', href: '/services' },
  { label: 'Nous Contacter', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Marque */}
          <div>
            <Link to="/" className="text-2xl font-serif font-bold text-white">
              Bianca <span className="text-gold">Immobilier</span>
            </Link>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Votre partenaire en immobilier, construction, décoration d’intérieur et gestion de biens.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Liens utiles</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-400 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" /> 123 Avenue des Champs-Élysées, Abidjan
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" /> +225 01 02 03 04 05
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold" /> contact@biancaimmobilier.ci
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Bianca Immobilier. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}