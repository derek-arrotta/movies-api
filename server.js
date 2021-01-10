const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

const validGenres = [`Animation`, `Drama`, `Romantic`, `Comedy`, `Spy`, `Crime`, `Thriller`, `Adventure`, `Documentary`, `Horror`, `Action`, `Western`, `History`, `Biography`, `Musical`, `Fantasy`, `War`, `Grotesque`]

function handleGetTypes(req, res) {
  res.json(validGenres)
}
  
app.get('/types', handleGetTypes)

const PORT = 8000

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})