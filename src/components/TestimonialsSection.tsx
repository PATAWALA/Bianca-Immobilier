import { Star, Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials'

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-widest text-sm font-medium">Témoignages</span>
          <h2 className="text-4xl font-serif font-bold text-dark mt-2">Ils nous font confiance</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Nos clients parlent de leur expérience avec Bianca Immobilier, qu’il s’agisse de vente, location, construction ou décoration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col"
            >
              {/* Icône guillemet décorative */}
              <Quote className="absolute top-4 right-6 w-10 h-10 text-gold/10 group-hover:text-gold/20 transition-colors" />

              {/* Étoiles */}
              <div className="flex text-gold mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Contenu */}
              <p className="text-gray-700 italic leading-relaxed flex-1 mb-6">
                « {t.content} »
              </p>

              {/* Profil */}
              <div className="flex items-center gap-4 mt-auto pt-5 border-t border-gray-100">
                <div className="relative">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-gold/30"
                  />
                </div>
                <div>
                  <p className="font-semibold text-dark">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              {/* Décoration en coin (optionnel) */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold/40 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection