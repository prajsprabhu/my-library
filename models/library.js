const mongoose = require('mongoose')
const librarySchema = mongoose.Schema({
  name: { type: String, required: true },
})
const Library = mongoose.model('library', librarySchema)
module.exports = Library
