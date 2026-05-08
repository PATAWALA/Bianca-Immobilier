export interface Testimonial {
  id: number
  name: string
  role: string        // ex: "Propriétaire", "Investisseur"
  content: string
  avatar: string      // image profil (Unsplash ou autre)
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sophie K.',
    role: 'Propriétaire',
    content: 'Bianca Immobilier a transformé notre maison en un véritable cocon. Leur équipe de décoration a su comprendre nos envies et le résultat est au-delà de nos espérances.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 2,
    name: 'Marc A.',
    role: 'Investisseur',
    content: 'Je leur ai confié la gestion de mon parc locatif. Depuis, je n’ai plus de soucis : loyers perçus à temps, locataires sérieux, travaux bien suivis.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 3,
    name: 'Claire M.',
    role: 'Propriétaire',
    content: 'La construction de notre villa a été un vrai succès. Délais respectés, finitions impeccables, et un accompagnement personnalisé du début à la fin.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
]