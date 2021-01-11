require('dotenv').config()
const express = require('express')
const morgan = require('morgan')

console.log(process.env.API_TOKEN)

const app = express()

app.use(morgan('dev'))

const validGenres = [`Animation`, `Drama`, `Romantic`, `Comedy`, `Spy`, `Crime`, `Thriller`, `Adventure`, `Documentary`, `Horror`, `Action`, `Western`, `History`, `Biography`, `Musical`, `Fantasy`, `War`, `Grotesque`]
//const validCountry = [`United States`, `Italy`, `Germany`, `Israel`, `Great Britain`, `France`, `Hungary`, `China`, `Canada`, `Spain`, `Japan`]

app.use(function validateBearerToken(req, res, next) {
  console.log('validate bearer token middleware')
  // move to the next middleware
  next()
})

function handleGetMovies(req, res) {
  console.log('app.get movies was called and handleGetMovies was run')
  res.json(validGenres)
}
  
app.get('/movies', handleGetMovies)

const PORT = 8000

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})