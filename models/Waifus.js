const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
  }
})

module.exports = Waifu = mongoose.model('waifu', WaifuSchema)
