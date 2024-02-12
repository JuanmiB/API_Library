import { createRequire } from 'node:module'
export const require = createRequire(import.meta.url)
const credentials = require('../../credential.json')

export const firebaseAdmin = require('firebase-admin')

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(credentials),
  databaseURL: 'https://librarybubbo.firebaseio.com',
  storageBucket: 'librarybubbo.appspot.com'
})
