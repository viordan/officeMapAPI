require('dotenv').config()
// const Point = require('./models/point')

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => {
    console.log('Connected to Database');

})

app.use(express.json())

const pointsRouter = require('./routes/points')
app.use('/points', pointsRouter)

app.listen(3000, () => console.log('Server Started'))
