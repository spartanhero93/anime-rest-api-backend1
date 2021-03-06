const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost/waifuEmpire', { useNewUrlParser: true })
mongoose.Promise = global.Promise

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
/* Routes */
app.get('/', (req, res) => res.send({ data: 'Welcome to the homepage' }))

app.use('/api', require('./routes/API/api'))

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message })
})

const PORT = process.env.port || 9000

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))
