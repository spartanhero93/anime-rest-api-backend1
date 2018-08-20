const express = require('express')
const router = express.Router()

/* GET all waifus */
router.get('/waifus', (req, res) => {
  res.send({ waifus: 'Waifus homepage!' })
})
/* Post a new waifu */
router.post('/waifus', (req, res) => {
  res.send({ waifus: 'Waifu has been added' })
})
/* Update a waifu */
router.put('/waifus/:name', (req, res) => {
  res.send({ waifus: req.params.name })
})
/* DELETE a waifu */
router.delete('/waifus/:name', (req, res) => {
  res.send({ waifus: req.params.name + ' has been deleted :(' })
})

module.exports = router
