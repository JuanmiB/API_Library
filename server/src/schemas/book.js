import z from 'zod'

const bookSchema = z.object({
  title: z.string().min(1).max(55),
  author: z.string().min(1).max(55),
  read: z.boolean(),
  img: z.string().url(),
  category: z.string().min(1).max(55),
  lang: z.string().min(1).max(55),
  year: z.number().int().min(0).max(2022),
  description: z.string().min(1).max(1000)
})

export const validateBook = async (book) => {
  return bookSchema.safeParse(book)
}

export function validateBookPartial (book) {
  return bookSchema.partial().safeParse(book)
}
