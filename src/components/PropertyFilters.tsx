import { X } from 'lucide-react'

interface Filters {
  transaction: string
  type: string
  city: string
  minPrice: string
  maxPrice: string
  minSurface: string
}

interface Props {
  filters: Filters
  setFilters: (filters: Filters) => void
}

const PropertyFilters = ({ filters, setFilters }: Props) => {
  const handleChange = (field: keyof Filters, value: string) => {
    setFilters({ ...filters, [field]: value })
  }

  const clearFilters = () => {
    setFilters({
      transaction: '',
      type: '',
      city: '',
      minPrice: '',
      maxPrice: '',
      minSurface: '',
    })
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-dark">Filtres</h3>
        <button onClick={clearFilters} className="text-sm text-gray-400 hover:text-gold flex items-center gap-1">
          <X className="w-3 h-3" /> Réinitialiser
        </button>
      </div>

      {/* Transaction (location/vente) */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Transaction</label>
        <div className="flex gap-2">
          <button
            onClick={() => handleChange('transaction', filters.transaction === 'vente' ? '' : 'vente')}
            className={`flex-1 px-3 py-1.5 rounded-md text-sm transition ${
              filters.transaction === 'vente' ? 'bg-gold text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Vente
          </button>
          <button
            onClick={() => handleChange('transaction', filters.transaction === 'location' ? '' : 'location')}
            className={`flex-1 px-3 py-1.5 rounded-md text-sm transition ${
              filters.transaction === 'location' ? 'bg-gold text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Location
          </button>
        </div>
      </div>

      {/* Ville */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
        <input
          type="text"
          placeholder="Ex: Abidjan"
          value={filters.city}
          onChange={(e) => handleChange('city', e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>

      {/* Prix min/max */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Prix min</label>
        <input
          type="number"
          placeholder="0"
          value={filters.minPrice}
          onChange={(e) => handleChange('minPrice', e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Prix max</label>
        <input
          type="number"
          placeholder="999999"
          value={filters.maxPrice}
          onChange={(e) => handleChange('maxPrice', e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>

      {/* Surface min */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Surface min (m²)</label>
        <input
          type="number"
          placeholder="0"
          value={filters.minSurface}
          onChange={(e) => handleChange('minSurface', e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>
    </div>
  )
}

export default PropertyFilters