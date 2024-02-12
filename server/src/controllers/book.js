import { BookModel } from '../models/book.js'
import { validateBook, validateBookPartial } from '../schemas/book.js'

export class BookController {
  static async getAll (req, res) {
    try {
      const allBooks = await BookModel.findAll()
      res.status(200).json(allBooks)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  static async getById (req, res) {
    try {
      const { id } = req.params
      const book = await BookModel.findById({ id })
      res.status(200).json(book)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  static async create (req, res) {
    try {
      const result = await validateBook(req.body)
      if (!result) {
        return res.status(422).json({
          success: false,
          error: req.body
        })
      }
      const newBook = await BookModel.create({ input: req.body })
      res.status(201).json(newBook)
    } catch (error) {
      res.status(500).json({
        success: false,
        error: [
          {
            field: 'server',
            message: 'internal server error'
          }
        ]
      })
    }
  }

  static async update (req, res) {
    try {
      const result = validateBookPartial(req.body)
      console.log(req.body)
      if (!result) {
        return res.status(422).json(req.body)
      }
      const { id } = req.params
      const updateBook = await BookModel.update({ id, input: req.body })
      res.status(200).json(updateBook)
    } catch (error) {
      res.status(500).json({
        success: false,
        error: [
          {
            field: 'server',
            message: 'internal server error'
          }
        ]
      })
    }
  }

  static async delete (req, res) {
    try {
      const { id } = req.params
      const deleteBook = await BookModel.delete({ id })
      if (!deleteBook) {
        return res.status(404).json({
          success: false,
          error: [
            {
              field: 'id',
              message: 'no existe el id'
            }
          ]
        })
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        error: [
          {
            field: 'server',
            message: 'internal server error'
          }
        ]
      })
    }
  }
}
