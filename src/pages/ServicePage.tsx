import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchServiceBySlug, type Service } from '../lib/api'
// Import possible d'une icône dynamique si besoin
import * as LucideIcons from 'lucide-react'

const iconMap: Record<string, React.FC<any>> = {
  PaintBucket: LucideIcons.PaintBucket,
  Building: LucideIcons.Building,
  Home: LucideIcons.Home,
  Wrench: LucideIcons.Wrench,
  // Ajoute d'autres correspondances si nécessaire
}

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const [service, setService] = useState<Service | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return
    setLoading(true)
    fetchServiceBySlug(slug)
      .then((data) => setService(data))
      .catch(() => setService(null))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) {
    return <div className="max-w-4xl mx-auto py-20 text-center text-gray-400">Chargement...</div>
  }

  if (!service) {
    return <div className="max-w-4xl mx-auto py-20 text-center text-gray-400">Service introuvable.</div>
  }

  const IconComponent = service.icon ? iconMap[service.icon] : null

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-3 mb-6">
        {IconComponent && <IconComponent className="w-10 h-10 text-gold" />}
        <h1 className="text-3xl font-serif font-bold text-dark">{service.name}</h1>
      </div>
      {service.description && <p className="text-gray-600 mb-8">{service.description}</p>}
      {service.images && service.images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.images.map((img, idx) => (
            <img key={idx} src={img} alt={`${service.name} ${idx + 1}`} className="rounded-lg w-full h-64 object-cover" />
          ))}
        </div>
      )}
      {/* Bouton contact */}
      <div className="mt-10">
        <a
          href={`/contact?subject=${encodeURIComponent('Demande concernant ' + service.name)}`}
          className="inline-block bg-gold text-white px-8 py-3 rounded-md font-medium hover:bg-gold/90 transition"
        >
          Demander un devis
        </a>
      </div>
    </div>
  )
}