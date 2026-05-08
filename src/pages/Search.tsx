import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard'
import PropertyFilters from '../components/PropertyFilters'
import { fetchProperties, type Property, type PropertyFilters as ApiFiltersType } from '../lib/api'

// Type local pour les filtres de l'UI (compatible avec PropertyFilters)
interface UIFilters {
  transaction: string
  type: string
  city: string
  minPrice: string
  maxPrice: string
  minSurface: string
}

// Fonction utilitaire pour convertir UIFilters en ApiFiltersType
function convertFilters(ui: UIFilters): ApiFiltersType {
  return {
    transaction: ui.transaction || undefined,
    type: ui.type || undefined,
    city: ui.city || undefined,
    minPrice: ui.minPrice ? Number(ui.minPrice) : undefined,
    maxPrice: ui.maxPrice ? Number(ui.maxPrice) : undefined,
    minSurface: ui.minSurface ? Number(ui.minSurface) : undefined,
  }
}

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(false)

  const [filters, setFilters] = useState<UIFilters>({
    transaction: searchParams.get('transaction') || '',
    type: searchParams.get('type') || '',
    city: '',
    minPrice: '',
    maxPrice: '',
    minSurface: '',
  })

  // Synchronise les filtres avec l’URL
  useEffect(() => {
    const transaction = searchParams.get('transaction') || ''
    const type = searchParams.get('type') || ''
    setFilters(prev => ({ ...prev, transaction, type }))
  }, [searchParams])

  // Recharge les biens à chaque changement de filtre
  useEffect(() => {
    fetchData()
  }, [filters])

  const fetchData = async () => {
    setLoading(true)
    try {
      const apiFilters = convertFilters(filters)
      const data = await fetchProperties(apiFilters)
      setProperties(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  // Handler appelé par PropertyFilters, reçoit un objet UIFilters
  const handleFilterChange = (newFilters: UIFilters) => {
    setFilters(newFilters)
    // Met à jour l’URL
    const params = new URLSearchParams()
    if (newFilters.transaction) params.set('transaction', newFilters.transaction)
    if (newFilters.type) params.set('type', newFilters.type)
    if (newFilters.city) params.set('city', newFilters.city)
    if (newFilters.minPrice) params.set('minPrice', newFilters.minPrice)
    if (newFilters.maxPrice) params.set('maxPrice', newFilters.maxPrice)
    if (newFilters.minSurface) params.set('minSurface', newFilters.minSurface)
    setSearchParams(params, { replace: true })
  }

  const transactionLabel =
    filters.transaction === 'location' ? 'À louer' :
    filters.transaction === 'vente' ? 'À vendre' : 'Tous les biens'
  const typeLabel = filters.type
    ? ` - ${filters.type.charAt(0).toUpperCase() + filters.type.slice(1)}s`
    : ''

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-64 shrink-0">
          <PropertyFilters filters={filters} setFilters={handleFilterChange} />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-serif font-bold text-dark mb-2">
            {transactionLabel}{typeLabel}
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
                  image={property.images?.[0] || 'https://via.placeholder.com/800x600'}
                  city={property.city || ''}
                  rooms={property.rooms ?? undefined}
                  surface={property.surface ?? undefined}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}