import express from 'express'

require('dotenv').config()

const PORT = Number(process.env.PORT!)

const app = express()

app.get('/', (_, res) => {
  res.send('Ok')
})

export default function server() {
  app.listen(PORT, () => {
    console.log('Listening on Port:', PORT)
  })
}
