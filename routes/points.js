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
    x: req.body.x,
    y: req.body.y,
    capacity: req.body.capacity,
    zoom: req.body.zoom,
    floor: req.body.floor,
    
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
  if (req.body.x != null) {
    res.point.x = req.body.x
  }
  if (req.body.y != null) {
    res.point.y = req.body.y
  }
  if (req.body.capacity != null) {
    res.point.capacity = req.body.capacity
  }
  if (req.body.zoom != null) {
    res.point.zoom = req.body.zoom
  }
  if (req.body.floor != null) {
    res.point.floor = req.body.floor
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
    res.json({ message: 'Deleted Point' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getPoint(req, res, next) {
  let point
  try {
    point = await Point.findById(req.params.id)
    if (point == null) {
      return res.status(404).json({ message: 'Cannot find point' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.point = point
  next()
}

module.exports = router