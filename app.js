const http = require('http')
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const libraryRoutes = require('./routes/library')
const port = 4009
console.log('test')
app.use(morgan('combined'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/library', libraryRoutes)

mongoose.connect(
  'mongodb+srv://Prajna:test123@cluster0.alylc.mongodb.net/My-Library?retryWrites=true&w=majority'
)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', (err, res) => {
  console.log('succesful connection')
})
const server = http.createServer(app)
server.listen(port)
console.log('server listening to port', port)
console.log('library')

module.exports = app
