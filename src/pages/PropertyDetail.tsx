import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { MapPin, Bed, Maximize } from 'lucide-react'
import { fetchPropertyById, type  Property } from '../lib/api'

export default function PropertyDetail() {
  const { id } = useParams<{ id: string }>()
  const [property, setProperty] = useState<Property | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    fetchPropertyById(id)
      .then((data) => setProperty(data))
      .catch(() => setProperty(null))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return <div className="max-w-6xl mx-auto py-20 text-center text-gray-400">Chargement...</div>
  }

  if (!property) {
    return <div className="max-w-6xl mx-auto py-20 text-center text-gray-400">Bien introuvable.</div>
  }

  const firstImage = property.images?.[0] || 'https://via.placeholder.com/1200x800'
  const otherImages = property.images?.slice(1, 3) || []

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Galerie d'images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8 rounded-xl overflow-hidden">
        <img src={firstImage} alt={property.title} className="h-80 w-full object-cover" />
        {otherImages.length > 0 && (
          <div className="grid grid-cols-2 gap-2">
            {otherImages.map((img, idx) => (
              <img key={idx} src={img} alt="" className="h-39 w-full object-cover" />
            ))}
          </div>
        )}
      </div>

      {/* En-tête */}
      <div className="flex flex-wrap justify-between items-start gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-gold font-semibold mb-1">
            <span className="bg-gold/10 px-2 py-0.5 rounded-full">{property.type}</span>
            <span className="bg-gold/10 px-2 py-0.5 rounded-full">{property.transaction_type}</span>
          </div>
          <h1 className="text-3xl font-serif font-bold text-dark">{property.title}</h1>
          {property.city && (
            <p className="flex items-center text-gray-500 mt-1">
              <MapPin className="w-4 h-4 mr-1" /> {property.city}
            </p>
          )}
        </div>
        <div className="text-3xl font-bold text-gold">
          {property.price.toLocaleString('fr-FR')} {property.transaction_type === 'location' ? '€/mois' : '€'}
        </div>
      </div>

      {/* Caractéristiques */}
      <div className="flex gap-6 mt-6 py-4 border-t border-b border-gray-100">
        {property.surface && (
          <div className="flex items-center gap-2">
            <Maximize className="w-5 h-5 text-gold" />
            <span className="text-dark font-medium">{property.surface} m²</span>
          </div>
        )}
        {property.rooms && (
          <div className="flex items-center gap-2">
            <Bed className="w-5 h-5 text-gold" />
            <span className="text-dark font-medium">{property.rooms} chambres</span>
          </div>
        )}
      </div>

      {/* Description */}
      {property.description && (
        <div className="mt-8">
          <h2 className="text-xl font-serif font-bold text-dark mb-4">Description</h2>
          <p className="text-gray-600 leading-relaxed">{property.description}</p>
        </div>
      )}

      {/* Adresse */}
      {property.address && (
        <div className="mt-6 text-gray-500">
          <strong>Adresse :</strong> {property.address}
        </div>
      )}

      {/* Bouton contact */}
      <div className="mt-10">
        <a
          href={`/contact?subject=Intéressé par ${encodeURIComponent(property.title)}`}
          className="inline-block bg-gold text-white px-8 py-3 rounded-md font-medium hover:bg-gold/90 transition"
        >
          Contacter l'agence
        </a>
      </div>
    </div>
  )
}