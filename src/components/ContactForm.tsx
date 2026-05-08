import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from '../lib/validations'
import { submitContact } from '../lib/api'
import { useState } from 'react'

interface ContactFormProps {
  defaultSubject?: string
}

export default function ContactForm({ defaultSubject = '' }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { subject: defaultSubject },
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    try {
      await submitContact(data)
      setStatus('success')
      reset()
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
        <p className="font-semibold text-lg">Merci !</p>
        <p>Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.</p>
        <button onClick={() => setStatus('idle')} className="mt-4 text-gold underline">
          Envoyer un autre message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
        <input
          {...register('full_name')}
          className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
          placeholder="Jean Dupont"
        />
        {errors.full_name && <p className="text-red-500 text-sm mt-1">{errors.full_name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
        <input
          type="email"
          {...register('email')}
          className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
          placeholder="jean@exemple.com"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
        <input
          {...register('phone')}
          className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
          placeholder="+225 XX XX XX XX"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
        <input
          {...register('subject')}
          className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
          placeholder="Demande d'information"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
        <textarea
          {...register('message')}
          rows={5}
          className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
          placeholder="Votre message..."
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-gold text-white px-6 py-3 rounded-md font-medium hover:bg-gold/90 transition disabled:opacity-50"
      >
        {status === 'loading' ? 'Envoi...' : 'Envoyer'}
      </button>
      {status === 'error' && <p className="text-red-500 text-sm">Erreur lors de l'envoi. Veuillez réessayer.</p>}
    </form>
  )
}