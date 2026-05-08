import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard'
import PropertyFilters from '../components/PropertyFilters'

// Type pour un bien
interface Property {
  id: number
  title: string
  type: string
  transaction_type: string
  price: number
  surface?: number
  rooms?: number
  city: string
  image: string // temporairement en dur, ensuite on utilisera images[0]
}

// Données mockées pour tester (à supprimer une fois Supabase branchée)
const MOCK_PROPERTIES: Property[] = [
  {
    id: 1, title: 'Villa moderne Cocody', type: 'villa', transaction_type: 'vente', price: 450000, surface: 280, rooms: 5, city: 'Abidjan', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2, title: 'Parcelle Bingerville', type: 'parcelle', transaction_type: 'vente', price: 85000, surface: 1200, rooms: 0, city: 'Bingerville', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3, title: 'Appartement Plateau', type: 'appartement', transaction_type: 'location', price: 2500, surface: 110, rooms: 3, city: 'Abidjan', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4, title: 'Villa locative Riviera', type: 'villa', transaction_type: 'location', price: 3500, surface: 200, rooms: 4, city: 'Abidjan', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
]

export default function Search() {
  const [searchParams] = useSearchParams()
  const typeParam = searchParams.get('type') || ''
  const [filters, setFilters] = useState({
    transaction: searchParams.get('transaction') || '',
    type: typeParam,
    city: '',
    minPrice: '',
    maxPrice: '',
    minSurface: '',
  })
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(false)

  // Appel à Supabase (ou mock pour l’instant)
  useEffect(() => {
    fetchProperties()
  }, [filters])

  const fetchProperties = async () => {
    setLoading(true)
    // Pour l'instant, on filtre les données mockées (simule la future requête Supabase)
    let filtered = [...MOCK_PROPERTIES]
    if (filters.transaction) {
      filtered = filtered.filter(p => p.transaction_type === filters.transaction)
    }
    if (filters.type) {
      filtered = filtered.filter(p => p.type === filters.type)
    }
    if (filters.city) {
      filtered = filtered.filter(p => p.city.toLowerCase().includes(filters.city.toLowerCase()))
    }
    if (filters.minPrice) {
      filtered = filtered.filter(p => p.price >= Number(filters.minPrice))
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(p => p.price <= Number(filters.maxPrice))
    }
    if (filters.minSurface) {
      filtered = filtered.filter(p => (p.surface || 0) >= Number(filters.minSurface))
    }
    // Simuler un délai
    setTimeout(() => {
      setProperties(filtered)
      setLoading(false)
    }, 300)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filtres */}
        <div className="w-full lg:w-64 shrink-0">
          <PropertyFilters filters={filters} setFilters={setFilters} />
        </div>

        {/* Résultats */}
        <div className="flex-1">
          <h1 className="text-3xl font-serif font-bold text-dark mb-2">
            {filters.transaction === 'location' ? 'À louer' : filters.transaction === 'vente' ? 'À vendre' : 'Tous les biens'}
            {filters.type && ` - ${filters.type.charAt(0).toUpperCase() + filters.type.slice(1)}s`}
          </h1>
          <p className="text-gray-600 mb-8">{properties.length} bien(s) trouvé(s)</p>

          {loading ? (
            <div className="text-center py-20 text-gray-400">Chargement...</div>
          ) : properties.length === 0 ? (
            <div className="text-center py-20 text-gray-400">Aucun bien ne correspond à vos critères.</div>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  id={property.id}
                  title={property.title}
                  type={property.type}
                  price={`${property.price.toLocaleString('fr-FR')} ${property.transaction_type === 'location' ? '€/mois' : '€'}`}
                  image={property.image}
                  city={property.city}
                  rooms={property.rooms}
                  surface={property.surface}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}