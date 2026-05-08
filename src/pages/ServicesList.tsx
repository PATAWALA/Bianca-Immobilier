import { useState } from 'react'
import { Link } from 'react-router-dom'
import { servicesData } from '../data/services'
import { ArrowRight} from 'lucide-react'
import TestimonialsSection from '../components/TestimonialsSection'

// Service de base commun (venant de Supabase ou statique)
const serviceList = [
  { name: 'Décoration d’intérieur', slug: 'decoration', description: 'Sublimez votre espace avec notre équipe de décorateurs.' },
  { name: 'Construction', slug: 'construction', description: 'Des constructions neuves de qualité.' },
  { name: 'Gestion de biens', slug: 'gestion', description: 'Nous gérons votre patrimoine immobilier.' },
  { name: 'Aménagement', slug: 'amenagement', description: 'Optimisez vos espaces intérieurs et extérieurs.' },
]

export default function ServicesList() {
  const [filter, setFilter] = useState('tous')

  const filteredServices = filter === 'tous'
    ? serviceList
    : serviceList.filter(s => s.slug === filter)

  return (
    <>
      {/* Hero */}
      <section className="bg-dark text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Nos Services</h1>
          <p className="text-lg text-gray-300">
            De la décoration à la construction, en passant par la gestion locative, Bianca Immobilier vous accompagne à chaque étape.
          </p>
        </div>
      </section>

      {/* Filtres */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['tous', 'decoration', 'construction', 'gestion', 'amenagement'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                filter === cat ? 'bg-gold text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat === 'tous' ? 'Tous' : cat === 'decoration' ? 'Décoration' : cat === 'construction' ? 'Construction' : cat === 'gestion' ? 'Gestion' : 'Aménagement'}
            </button>
          ))}
        </div>

        {/* Grille des services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((svc) => {
            const data = servicesData[svc.slug]
            return (
              <div key={svc.slug} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition group">
                <img src={data?.heroImage || 'https://via.placeholder.com/800x500'} alt={svc.name} className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" />
                <div className="p-5">
                  <h3 className="font-serif font-bold text-xl text-dark mb-2">{svc.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{svc.description}</p>
                  <Link
                    to={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-1 text-gold font-medium text-sm hover:text-dark transition"
                  >
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Témoignages */}
      <TestimonialsSection />
    </>
  )
}