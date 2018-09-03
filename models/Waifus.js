const mongoose = require('mongoose')
const Schema = mongoose.Schema

location: {
  type: ('Array')
  coordinates: [243.4, 432.7]
}

const GeoSchema = new Schema({
  type: {
    type: String,
    default: 'Point'
  },
  coordinates: {
    type: [Number],
    index: '2dsphere'
  }
})

const WaifuSchema = new Schema({
  name: {
    required: [true, 'Name field is required'],
    type: String
  },
  age: {
    required: [true, 'Age field is required'],
    type: Number
  },
  hairColor: {
    required: [true, 'hair color field is required'],
    type: String
  },
  anime: {
    required: [true, 'Anime from field is required'],
    type: String
  },
  geometry: GeoSchema
})

module.exports = Waifu = mongoose.model('waifu', WaifuSchema)
