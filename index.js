const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const apiRoutes = require('./routes/API')
/* Routes */
app.get('/', (req, res) => res.send({ data: 'Welcome to the homepage' }))

app.use('/api', apiRoutes)

app.listen(process.env.port || 9000, () => console.log('server is running!'))
