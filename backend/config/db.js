const mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() =>
    console.log("connected")
).catch((err) =>
    console.log(err))