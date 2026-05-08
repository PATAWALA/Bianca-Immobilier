import { useSearchParams } from 'react-router-dom'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const subject = searchParams.get('subject') || ''

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-serif font-bold text-dark mb-2">Nous Contacter</h1>
      <p className="text-gray-600 mb-8">Une question, un projet ? Écrivez-nous.</p>
      <ContactForm defaultSubject={subject} />
      <div className="mt-10 text-gray-600">
        <p><strong>Adresse :</strong> 123 Avenue des Champs-Élysées, Abidjan</p>
        <p><strong>Téléphone :</strong> +225 01 02 03 04 05</p>
        <p><strong>Email :</strong> contact@biancaimmobilier.ci</p>
      </div>
    </div>
  )
}