import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Home } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Image de fond avec animation de zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenu */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-6">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif font-bold text-white mb-4"
        >
          Bianca Immobilier
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-white/80 max-w-xl mb-8"
        >
          Votre partenaire en immobilier, construction et décoration d’intérieur.
        </motion.p>

        {/* Widget "Biens disponibles" */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
        >
          <div className="flex items-center gap-2 text-gold mb-2">
            <Home className="w-5 h-5" />
            <span className="font-medium">Biens disponibles</span>
          </div>
          <p className="text-white text-2xl font-bold">+120 annonces</p>
          <Link
            to="/recherche"
            className="mt-3 inline-flex items-center gap-2 text-white hover:text-gold transition-colors text-sm"
          >
            Voir tout <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection