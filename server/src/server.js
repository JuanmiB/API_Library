import express, { json } from 'express'
import 'dotenv/config'
import cors from 'cors'
import { bookRouter } from './router/book.js'

const app = express()
app.disable('x-powered-by')

app.use(json())
app.use(cors())
// routes
app.use('/api/books', bookRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
