const mongoose = require('mongoose')

const pointSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  x: {
    type: Number,
    required: true,
    default: 0
  },
  y: {
    type: Number,
    required: true,
    default: 0
  },
  capacity: {
    type: Number,
    required: true,
    default: -1
  },
  zoom: {
    type: String,
    required: true,
    default: 'none'
  },
  floor: {
    type: String,
    required: true,
    default: 'First FLoor'
  }
})

module.exports = mongoose.model('Point', pointSchema)