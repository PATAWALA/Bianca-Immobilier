import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchServiceBySlug,type  Service } from '../lib/api'
import { servicesData,type ServiceData } from '../data/services'
import * as LucideIcons from 'lucide-react'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const iconMap: Record<string, React.FC<any>> = {
  PaintBucket: LucideIcons.PaintBucket,
  Building: LucideIcons.Building,
  Home: LucideIcons.Home,
  Wrench: LucideIcons.Wrench,
}

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const [service, setService] = useState<Service | null>(null)
  const [extra, setExtra] = useState<ServiceData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return
    setLoading(true)

    // Chargement depuis Supabase
    fetchServiceBySlug(slug)
      .then((data) => setService(data))
      .catch(() => setService(null))
      .finally(() => setLoading(false))

    // Données supplémentaires statiques
    setExtra(servicesData[slug] || null)
  }, [slug])

  if (loading) {
    return <div className="max-w-4xl mx-auto py-20 text-center text-gray-400">Chargement...</div>
  }

  if (!service) {
    return <div className="max-w-4xl mx-auto py-20 text-center text-gray-400">Service introuvable.</div>
  }

  const IconComponent = service.icon ? iconMap[service.icon] : null
  const heroImage = extra?.heroImage || service.images?.[0] || 'https://via.placeholder.com/1200x600'
  const allImages = service.images && service.images.length > 0 ? service.images : [heroImage]
  const features = extra?.features || []
  const process = extra?.process || []

  return (
    <div className="bg-white">
      {/* Hero section avec image de fond et superposition */}
      <section
        className="relative h-[60vh] min-h-[400px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          {IconComponent && <IconComponent className="w-16 h-16 mx-auto mb-4 text-gold" />}
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{service.name}</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">{service.description}</p>
        </div>
      </section>

      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Description détaillée (si elle existe) */}
        {service.description && (
          <div>
            <h2 className="text-3xl font-serif font-bold text-dark mb-6">À propos</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
          </div>
        )}

        {/* Prestations */}
        {features.length > 0 && (
          <div>
            <h2 className="text-3xl font-serif font-bold text-dark mb-8">Nos prestations</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-light rounded-lg">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Processus */}
        {process.length > 0 && (
          <div>
            <h2 className="text-3xl font-serif font-bold text-dark mb-8">Notre processus</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {process.map((step, idx) => (
                <div key={idx} className="relative text-center p-6">
                  <div className="w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                    {idx + 1}
                  </div>
                  <h3 className="font-semibold text-dark mb-1">{step.title.replace(/^\d+\.\s*/, '')}</h3>
                  <p className="text-sm text-gray-500">{step.description}</p>
                  {idx < process.length - 1 && (
                    <div className="hidden md:block absolute top-12 right-0 transform translate-x-1/2 text-gray-300">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Galerie d'images */}
        {allImages.length > 1 && (
          <div>
            <h2 className="text-3xl font-serif font-bold text-dark mb-8">Galerie</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {allImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${service.name} ${idx + 1}`}
                  className="rounded-lg w-full h-48 object-cover hover:opacity-90 transition"
                />
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center bg-dark text-white rounded-2xl p-12">
          <h2 className="text-3xl font-serif font-bold mb-4">Prêt à démarrer votre projet ?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Contactez-nous pour obtenir un devis personnalisé et bénéficier de notre expertise.
          </p>
          <Link
            to={`/contact?subject=${encodeURIComponent('Demande de devis - ' + service.name)}`}
            className="inline-flex items-center gap-2 bg-gold text-dark px-8 py-3 rounded-md font-semibold hover:bg-gold/90 transition"
          >
            Demander un devis <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}