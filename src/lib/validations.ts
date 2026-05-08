import { z } from 'zod'

export const contactSchema = z.object({
  full_name: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message trop court (min 10 caractères)'),
})

export type ContactFormData = z.infer<typeof contactSchema>