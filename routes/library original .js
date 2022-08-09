const express = require('express')
const router = express.Router()
const mongoose = express('mongoose')
const Library = require('../models/library')

router.get('/', (req, res, next) => {
  console.log('get')
  res.status(200).json({ message: 'Books found' })
})
router.post('/', (req, res) => {
  const library = new Library({
    name: req.body.name,
  })
  library
    .save()
    .then((result) => {
      res.status(201).json({
        message: 'Created libary succesfully',
        libray: library,
      })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ error: err })
    })

  router.post('/', async (req, res) => {
    try {
      console.log(req.body)
      const name = req.body.name
      users.name = name
      console.log(users)
      await res.json({
        message: 'library updated',
      })
    } catch (error) {
      console.log(error)
      res.json({ message: 'success' })
    }
  })
})

module.exports = router
