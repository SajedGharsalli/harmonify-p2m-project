const mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() =>
    // here there are no errors, either the MONGODB_CONNECTION_STRING exists 
    // or it doesnt meaning it's either `undefined` or `null`, you should 
    // handle the case when it's null not when it throws errors, since it will
    // not throw in this case
    console.log("connected")
).catch((err) =>
    console.log(err))