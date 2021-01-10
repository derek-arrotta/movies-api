const express = require('express')
const morgan = require('morgan')

console.log(process.env.API_TOKEN)

const app = express()

app.use(morgan('dev'))

const validGenres = [`Animation`, `Drama`, `Romantic`, `Comedy`, `Spy`, `Crime`, `Thriller`, `Adventure`, `Documentary`, `Horror`, `Action`, `Western`, `History`, `Biography`, `Musical`, `Fantasy`, `War`, `Grotesque`]
const validCountry = [`United States`, `Italy`, `Germany`, `Israel`, `Great Britain`, `France`, `Hungary`, `China`, `Canada`, `Spain`, `Japan`]

function handleGetTypes(req, res) {
  res.json(validGenres)
  res.json(validCountry)
}
  
app.get('/movies', handleGetTypes)

const PORT = 8000

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})