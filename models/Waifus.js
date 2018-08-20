const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WaifuSchema = new Schema({
  name: {
    required: [true, 'Name field is required'],
    type: String
  },
  hairColor: {
    required: [true, 'hair color field is required'],
    type: String
  },
  anime: {
    required: [true, 'Anime from field is required'],
    type: String
  },
  age: {
    required: false,
    type: Number
  }
})

const Waifu = mongoose.model('Waifu', WaifuSchema)

module.exports = Waifu
