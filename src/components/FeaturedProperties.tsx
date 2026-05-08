import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropertyCard from './PropertyCard'
import { ArrowRight } from 'lucide-react'
import { fetchProperties, type Property } from '../lib/api'

const FeaturedProperties = () => {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProperties({})
      .then((data) => {
        // On affiche uniquement les 3 derniers biens
        setProperties(data.slice(0, 3))
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-serif font-bold text-dark">Biens disponibles</h2>
            <p className="text-gray-600 mt-2">Découvrez nos dernières annonces</p>
          </div>
          <Link
            to="/recherche"
            className="hidden sm:inline-flex items-center gap-2 text-gold hover:text-dark transition-colors font-medium"
          >
            Voir tous les biens <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-400">Chargement...</div>
        ) : properties.length === 0 ? (
          <div className="text-center py-20 text-gray-400">Aucun bien pour le moment.</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                title={property.title}
                type={property.type}
                price={`${property.price.toLocaleString('fr-FR')} ${property.transaction_type === 'location' ? '€/mois' : '€'}`}
                image={property.images?.[0] || 'https://via.placeholder.com/800x600'}
                city={property.city || ''}
                rooms={property.rooms ?? undefined}
                surface={property.surface ?? undefined}
              />
            ))}
          </div>
        )}

        <div className="mt-8 text-center sm:hidden">
          <Link to="/recherche" className="inline-flex items-center gap-2 text-gold font-medium">
            Voir tous les biens <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProperties