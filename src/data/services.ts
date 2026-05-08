export interface ServiceData {
  slug: string
  heroImage: string
  features: string[]
  process: { title: string; description: string }[]
}

export const servicesData: Record<string, ServiceData> = {
  decoration: {
    slug: 'decoration',
    heroImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'Conseil en agencement d’intérieur',
      'Choix des matériaux et couleurs',
      'Création de meubles sur mesure',
      'Home staging pour la vente',
      'Rénovation complète clé en main',
    ],
    process: [
      { title: 'Consultation', description: 'Nous analysons vos besoins et votre espace.' },
      { title: 'Conception', description: 'Nous créons des visuels 3D et un plan détaillé.' },
      { title: 'Réalisation', description: 'Nos artisans mettent en œuvre le projet.' },
      { title: 'Finalisation', description: 'Nous peaufinons chaque détail et livrons.' },
    ],
  },
  construction: {
    slug: 'construction',
    heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'Construction de villas modernes',
      'Surélévation et extension',
      'Gros œuvre et second œuvre',
      'Suivi de chantier personnalisé',
      'Garantie décennale incluse',
    ],
    process: [
      { title: 'Étude de sol', description: 'Analyse du terrain et des contraintes.' },
      { title: 'Plans architecturaux', description: 'Conception sur mesure avec architecte.' },
      { title: 'Construction', description: 'Gros œuvre, hors d’eau, hors d’air.' },
      { title: 'Finitions', description: 'Peinture, sols, sanitaires, remise des clés.' },
    ],
  },
  gestion: {
    slug: 'gestion',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'Gestion locative complète',
      'Recherche et sélection de locataires',
      'Rédaction des baux et états des lieux',
      'Perception des loyers et régularisation des charges',
      'Maintenance et travaux',
    ],
    process: [
      { title: 'Mise en location', description: 'Annonce, visites, sélection du locataire.' },
      { title: 'Gestion quotidienne', description: 'Encaissement, charges, relations locataires.' },
      { title: 'Entretien', description: 'Suivi des réparations et maintenance.' },
      { title: 'Reporting', description: 'Bilan annuel et optimisation fiscale.' },
    ],
  },
  amenagement: {
    slug: 'amenagement',
    heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'Aménagement paysager',
      'Création de terrasses et piscines',
      'Optimisation des combles et sous-sols',
      'Cloisons et faux plafonds',
      'Éclairage extérieur et intérieur',
    ],
    process: [
      { title: 'Esquisse', description: 'Plan d’aménagement selon vos envies.' },
      { title: 'Devis détaillé', description: 'Chiffrage précis et transparent.' },
      { title: 'Travaux', description: 'Réalisation par des professionnels qualifiés.' },
      { title: 'Réception', description: 'Vérification et ajustements finaux.' },
    ],
  },
}