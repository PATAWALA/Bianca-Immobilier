import { Link } from 'react-router-dom'
import { MapPin, Bed, Maximize } from 'lucide-react'

interface PropertyCardProps {
  id: number
  title: string
  type: string
  price: string
  image: string
  city?: string
  rooms?: number
  surface?: number
}

const PropertyCard = ({ id, title, type, price, image, city, rooms, surface }: PropertyCardProps) => {
  return (
    <Link to={`/property/${id}`} className="group block overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <span className="absolute top-3 left-3 bg-gold text-white text-xs px-2 py-1 rounded-full">{type}</span>
      </div>
      <div className="p-4">
        <h3 className="font-serif font-bold text-dark text-lg mb-1">{title}</h3>
        {city && (
          <p className="flex items-center text-gray-500 text-sm mb-2">
            <MapPin className="w-3.5 h-3.5 mr-1" /> {city}
          </p>
        )}
        <div className="flex justify-between text-sm text-gray-600">
          {rooms && <span className="flex items-center"><Bed className="w-4 h-4 mr-1" /> {rooms} ch.</span>}
          {surface && <span className="flex items-center"><Maximize className="w-4 h-4 mr-1" /> {surface} m²</span>}
        </div>
        <p className="mt-3 text-gold font-bold text-lg">{price}</p>
      </div>
    </Link>
  )
}

export default PropertyCard