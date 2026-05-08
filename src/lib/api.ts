// src/lib/api.ts
import { supabase } from './supabase'

// Type Property aligné sur la table Supabase
export interface Property {
  id: string
  ref: string
  title: string
  type: 'villa' | 'parcelle' | 'appartement' | 'studio' | 'local'
  transaction_type: 'vente' | 'location'
  price: number
  surface: number | null
  rooms: number | null
  description: string | null
  address: string | null
  city: string | null
  images: string[]
  created_at: string
}

export interface PropertyFilters {
  transaction?: string
  type?: string
  city?: string
  minPrice?: number
  maxPrice?: number
  minSurface?: number
}

export async function fetchProperties(filters: PropertyFilters = {}): Promise<Property[]> {
  let query = supabase.from('properties').select('*')

  if (filters.transaction) {
    query = query.eq('transaction_type', filters.transaction)
  }
  if (filters.type) {
    query = query.eq('type', filters.type)
  }
  if (filters.city) {
    query = query.ilike('city', `%${filters.city}%`)
  }
  if (filters.minPrice) {
    query = query.gte('price', filters.minPrice)
  }
  if (filters.maxPrice) {
    query = query.lte('price', filters.maxPrice)
  }
  if (filters.minSurface) {
    query = query.gte('surface', filters.minSurface)
  }

  // Ordonner par date de création décroissante
  query = query.order('created_at', { ascending: false })

  const { data, error } = await query
  if (error) throw error
  return data as Property[]
}

export async function fetchPropertyById(id: string): Promise<Property> {
  const { data, error } = await supabase.from('properties').select('*').eq('id', id).single()
  if (error) throw error
  return data as Property
}

// Type pour la page services
export interface Service {
  id: string
  name: string
  slug: string
  description: string | null
  icon: string | null
  images: string[]
  active: boolean
}

export async function fetchServiceBySlug(slug: string): Promise<Service | null> {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('slug', slug)
    .eq('active', true)
    .single()
  if (error) {
    if (error.code === 'PGRST116') return null // Pas trouvé
    throw error
  }
  return data as Service
}

// Insertion d'un contact
export async function submitContact(formData: {
  full_name: string
  email: string
  phone?: string
  message: string
  subject?: string
}): Promise<void> {
  const { error } = await supabase.from('contacts').insert([formData])
  if (error) throw error
}