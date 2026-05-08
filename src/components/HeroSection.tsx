import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Home } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Image de fond avec zoom perceptible */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.15 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      {/* Overlay pour lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />

      {/* Contenu */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            Bianca
            <span className="text-gold"> Immobilier</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/95 max-w-2xl mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] leading-relaxed"
        >
          Votre partenaire de confiance en immobilier, construction et décoration d’intérieur.
          De la recherche du bien idéal à la remise des clés, nous vous accompagnons à chaque étape de votre projet.
        </motion.p>

        {/* Widget "Biens disponibles" */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/30 max-w-sm shadow-lg"
        >
          <div className="flex items-center gap-2 text-gold mb-2">
            <Home className="w-5 h-5" />
            <span className="font-semibold">Biens disponibles</span>
          </div>
          <p className="text-white text-3xl font-bold">+120 annonces</p>
          <Link
            to="/recherche"
            className="mt-4 inline-flex items-center gap-2 text-white hover:text-gold transition-colors text-sm font-medium"
          >
            Voir tout <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection