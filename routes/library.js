const express = require('express')
const router = express.Router()
const mongoose = express('mongoose')
const Library = require('../models/library')

router.get('/', (req, res, next) => {
  Library.find()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
})

router.get('/:title', (req, res) => {
  Library.findById('627543d1a4d1bc300abe34b9')
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
})

router.post('/', function (req, res) {
  Library.create(req.body).then(function (library) {
    res.send(library)
  })
})

router.put('/:libraryID', async (req, res) => {
  Library.findOne({ id: req.params.id }, req.body, (err, Library) => {
    console.log(req.body.id)
    if (err) {
      console.log(error)
      res.send({ error: error })
    } else {
      if (Library) {
        console.log(Library)
        res.json({ cardupdateSuccess: true, message: 'card updated' })
      } else {
        console.log('fail')
        res.json({ cardupdateSuccess: false, message: 'card update failed' })
      }
    }
  })
})
router.delete('/:libraryID', async (req, res) => {
  console.log(req.params.libraryID)

  Library.findByIdAndDelete(
    { id: req.params.libraryID },
    req.body,
    (error, Library) => {
      if (error) {
        console.log(error)
        res.json({ error: 'error' })
      } else {
        if (Library) {
          console.log(Library)
          res.json({
            deleteSucess: true,
            message: 'Library deleted successfully',
          })
        } else {
          console.log(delete failed)
          res.json({ deleteSucess: false, message: 'Library deleted failed' })
        }
      }
    }
  )
})

module.exports = router
