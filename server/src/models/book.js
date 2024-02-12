import { firebaseAdmin } from '../../firebase/admin.js'
const db = firebaseAdmin.firestore()
const booksCollection = db.collection('library')

export class BookModel {
  static async findAll () {
    try {
      const document = await booksCollection.get()

      if (!document.empty) {
        const books = document.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }
        )
        console.log('books', books)
        return books
      } else {
        console.log('No hay documentos en la colección "bookStore".')
        return []
      }
    } catch (error) {
      console.error('Error al obtener libros:', error)
      throw error
    }
  }

  static async findById ({ id }) {
    try {
      const document = await booksCollection.doc(id).get()

      if (document.exists) {
        const book = {
          id: document.id,
          ...document.data()
        }
        console.log('book', book)
        return book
      } else {
        console.log(`No hay documento con el id: ${id}`)
        return null
      }
    } catch (error) {
      console.error('Error al obtener libro por id:', error)
      throw error
    }
  }

  static async create ({ input }) {
    try {
      const result = await booksCollection.add(input)
      console.log('resultado del libro creado', result)

      return result.id
    } catch (error) {
      console.error('Error al crear un nuevo libro:', error)
      throw error
    }
  }

  static async delete ({ id }) {
    try {
      await booksCollection.doc(id).delete()
      console.log('Libro eliminado con éxito.')
    } catch (error) {
      console.error('Error al eliminar libro:', error)
      throw error
    }
  }

  static async update ({ id, input }) {
    try {
      await booksCollection.doc(id).update(input)
      return 'Libro actualizado con éxito.'
    } catch (error) {
      console.error('Error al actualizar libro:', error)
      throw error
    }
  }
}
