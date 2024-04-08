const express = require('express')
require('dotenv').config()
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const userRoute = require('./routes/user')
const elevatorRoute = require('./routes/elevator')

const mongoDB = mongoose
  .connect(
    'mongodb+srv://begliaga:Kaka4012@elevators.cvetq0g.mongodb.net/?retryWrites=true&w=majority&appName=Elevators'
  )
  .then(() => {
    console.log('DB Connection Successful!')
    const PORT = process.env.PORT || 8080
    app.listen(PORT, () => {
      console.log(`The server is running on port: ${PORT}`)
    })
  })
  .catch(err => {
    console.error('Error connecting to database:', err.message)
  })

app.use(cors())
app.use(express.json())

app.use('/api/users', userRoute)
app.use('/api/elevators', elevatorRoute)

app.get('/', (req, res) => {
  res.send('Hello to Elevators API')
})

module.exports = mongoDB
