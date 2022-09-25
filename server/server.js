const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const blogRoute = require('./route/blog')

const app = express()

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true, 
    useUnifiedTopology: false
})
.then(()=>console.log('Connect to database success'))
.catch((err)=> console.log(err))

//middle express
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//route
app.use('/api',blogRoute)

const port = process.env.PORT || 4400
app.listen(port,()=>console.log(`Start server in port ${port}`))