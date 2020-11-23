const express = require("express")
// const graphqlHTTP = require('express-graphql')
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

const mongodb = 'mongodb+srv://'
+ process.env.MONGODB_USER + ':'
+ process.env.MONGODB_PASSWORD + '@'
+ process.env.MONGODB_HOST + '/'
+ process.env.MONGODB_DATABASE + '?retryWrites=true&w=majority'

// Connect MongoDB
mongoose.connect( mongodb )
mongoose.connection.once('open', () => {
    console.log('db connected')
})

// Rooting
app.use('/graphql', graphqlHTTP({

}))

// Listen Port
app.listen(4000, () => {
    console.log('listening port 4000')
})