const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const residentUserRoute = require('./routes/residentUserRoute')
const question = require('./routes/questionRoute')
const sniNumber = require('./routes/SNIRoute')

mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('Error', (err)=>{
    console.log(err)
})

db.once('open', ()=>{
    console.log("Database connected !!!")
})

const app = express()

app.use(cors({
    origin: "http://localhost:4200"
}))
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api/residentUser', residentUserRoute)
app.use('/api/counsilOfficer',question)
app.use('/api/sni',sniNumber)

