export interface Testimonial {
  id: number
  name: string
  role: string        // ex: "Vendeur", "Propriétaire", "Locataire", "Investisseur"
  content: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'M. Koné',
    role: 'Vendeur',
    content: 'Grâce à Bianca Immobilier, j’ai vendu ma villa en moins de deux mois, au prix que j’espérais. Leur équipe a su mettre en valeur le bien et trouver un acquéreur sérieux.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 2,
    name: 'Aminata D.',
    role: 'Locataire',
    content: 'Je cherchais un appartement à louer depuis des semaines. Bianca Immobilier m’a aidée à trouver le logement idéal en plein centre-ville. Processus rapide et professionnel.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 3,
    name: 'La Famille Bamba',
    role: 'Propriétaires',
    content: 'Nous avons fait construire notre villa avec Bianca. Du permis de construire jusqu’à la remise des clés, tout a été parfaitement géré. Un travail d’orfèvre !',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 4,
    name: 'Marc A.',
    role: 'Investisseur',
    content: 'Je leur ai confié la gestion de mon parc locatif. Depuis, je n’ai plus de soucis : loyers perçus à temps, locataires sérieux, travaux bien suivis.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 5,
    name: 'Sophie K.',
    role: 'Propriétaire décoratrice',
    content: 'Bianca Immobilier a transformé notre maison en un véritable cocon. Leur équipe de décoration a su comprendre nos envies et le résultat est au-delà de nos espérances.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 6,
    name: 'Jean-Louis T.',
    role: 'Propriétaire bailleur',
    content: 'Je voulais mettre en location ma chambre sur Abidjan. L’agence a géré toute la procédure : annonce, visites, bail. J’ai trouvé un locataire fiable en une semaine.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
]