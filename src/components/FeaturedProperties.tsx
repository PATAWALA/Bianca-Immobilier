import { Link } from 'react-router-dom'
import PropertyCard from './PropertyCard'
import { ArrowRight } from 'lucide-react'

const featured = [
  {
    id: 1,
    title: 'Villa contemporaine piscine',
    type: 'Villa',
    price: '450 000 €',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    city: 'Abidjan',
    rooms: 5,
    surface: 280,
  },
  {
    id: 2,
    title: 'Parcelle boisée 12 ares',
    type: 'Parcelle',
    price: '85 000 €',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    city: 'Bingerville',
    surface: 1200,
  },
  {
    id: 3,
    title: 'Appartement moderne',
    type: 'Appartement',
    price: '220 000 €',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    city: 'Cocody',
    rooms: 3,
    surface: 110,
  },
]

const FeaturedProperties = () => {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-serif font-bold text-dark">Biens disponibles</h2>
            <p className="text-gray-600 mt-2">Découvrez nos dernières annonces</p>
          </div>
          <Link to="/recherche" className="hidden sm:inline-flex items-center gap-2 text-gold hover:text-dark transition-colors font-medium">
            Voir tous les biens <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

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