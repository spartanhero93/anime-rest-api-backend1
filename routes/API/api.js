const express = require('express')
const router = express.Router()
const Waifu = require('../../models/Waifus')

/* GET all waifus */
router.get('/waifus', async (req, res, next) => {
  const waifu = await Waifu.find({})
  res.send(waifu)
})
/* Post a new waifu */
router.post('/waifus', async (req, res, next) => {
  try {
    const ninja = await Waifu.create(req.body)
    res.send(ninja)
  } catch (e) {
    next(e)
  }
})
/* Update a waifu */
router.put('/waifus/:id', async (req, res, next) => {
  try {
    const waifu = await Waifu.findByIdAndRemove({ _id: req.params.id })
  } catch (e) {}
})
/* DELETE a waifu */
router.delete('/waifus/:id', async (req, res, next) => {
  try {
    const waifu = await Waifu.findByIdAndRemove({ _id: req.params.id })
    res.send(waifu)
  } catch (e) {
    const error = typeof waifu
    error === 'string'
      ? console.log(e)
      : res.status(400).send({
        error: 'Please use a single String of 12 bytes or a string of 24 hex characters'
      })
  }
})

module.exports = router
