const express = require('express')
const router = express.Router()
const Point = require('../models/point')

// Getting all
router.get('/', async (req, res) => {
  try {
    const points = await Point.find()
    res.json(points)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', getPoint, (req, res) => {
  res.json(res.point)
})

// Creating one
router.post('/', async (req, res) => {
  const point = new Point({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel
  })
  try {
    const newPoint = await point.save()
    res.status(201).json(newPoint)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.patch('/:id', getPoint, async (req, res) => {
  if (req.body.name != null) {
    res.point.name = req.body.name
  }
  if (req.body.subscribedToChannel != null) {
    res.point.subscribedToChannel = req.body.subscribedToChannel
  }
  try {
    const updatedPoint = await res.point.save()
    res.json(updatedPoint)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getPoint, async (req, res) => {
  try {
    await res.point.remove()
    res.json({ message: 'Deleted Subscriber' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getPoint(req, res, next) {
  let point
  try {
    point = await Point.findById(req.params.id)
    if (point == null) {
      return res.status(404).json({ message: 'Cannot find subscriber' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.point = point
  next()
}

module.exports = router