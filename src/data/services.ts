export interface ServiceData {
  slug: string
  heroImage?: string         // image de fond du hero (sinon première image)
  features: string[]          // liste des prestations
  process: { title: string; description: string }[] // étapes
}

export const servicesData: Record<string, ServiceData> = {
  decoration: {
    slug: 'decoration',
    heroImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      'Conseil en agencement d’intérieur',
      'Choix des matériaux et couleurs',
      'Création de meubles sur mesure',
      'Home staging pour la vente',
      'Rénovation complète clé en main',
    ],
    process: [
      { title: '1. Consultation', description: 'Nous analysons vos besoins et votre espace.' },
      { title: '2. Conception', description: 'Nous créons des visuels 3D et un plan détaillé.' },
      { title: '3. Réalisation', description: 'Nos artisans mettent en œuvre le projet.' },
      { title: '4. Finalisation', description: 'Nous peaufinons chaque détail et livrons.' },
    ],
  },
  construction: {
    slug: 'construction',
    heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      'Construction de villas modernes',
      'Surélévation et extension',
      'Gros œuvre et second œuvre',
      'Suivi de chantier personnalisé',
      'Garantie décennale incluse',
    ],
    process: [
      { title: '1. Étude de sol', description: 'Analyse du terrain et des contraintes.' },
      { title: '2. Plans architecturaux', description: 'Conception sur mesure avec architecte.' },
      { title: '3. Construction', description: 'Gros œuvre, hors d’eau, hors d’air.' },
      { title: '4. Finitions', description: 'Peinture, sols, sanitaires, remise des clés.' },
    ],
  },
  gestion: {
    slug: 'gestion',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      'Gestion locative complète',
      'Recherche et sélection de locataires',
      'Rédaction des baux et états des lieux',
      'Perception des loyers et régularisation des charges',
      'Maintenance et travaux',
    ],
    process: [
      { title: '1. Mise en location', description: 'Annonce, visites, sélection du locataire.' },
      { title: '2. Gestion quotidienne', description: 'Encaissement, charges, relations locataires.' },
      { title: '3. Entretien', description: 'Suivi des réparations et maintenance.' },
      { title: '4. Reporting', description: 'Bilan annuel et optimisation fiscale.' },
    ],
  },
  amenagement: {
    slug: 'amenagement',
    heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      'Aménagement paysager',
      'Création de terrasses et piscines',
      'Optimisation des combles et sous-sols',
      'Cloisons et faux plafonds',
      'Éclairage extérieur et intérieur',
    ],
    process: [
      { title: '1. Esquisse', description: 'Plan d’aménagement selon vos envies.' },
      { title: '2. Devis détaillé', description: 'Chiffrage précis et transparent.' },
      { title: '3. Travaux', description: 'Réalisation par des professionnels qualifiés.' },
      { title: '4. Réception', description: 'Vérification et ajustements finaux.' },
    ],
  },
}