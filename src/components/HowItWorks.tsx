import { Search, Home, Key } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Cherchez',
    description: 'Parcourez nos annonces en ligne ou contactez-nous pour un accompagnement personnalisé.',
  },
  {
    icon: Home,
    title: 'Visitez',
    description: 'Nous organisons des visites et vous guidons dans votre projet immobilier.',
  },
  {
    icon: Key,
    title: 'Concrétisez',
    description: 'Signature, financement, aménagement : nous restons à vos côtés jusqu’à la remise des clés.',
  },
]

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif font-bold text-dark mb-4">Comment ça marche</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">Un processus simple et transparent en trois étapes.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="p-6">
              <div className="w-14 h-14 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif font-bold text-xl text-dark mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks