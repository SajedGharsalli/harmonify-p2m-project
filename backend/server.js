require('./config/db')
const express = require('express')
const app = express()
const port = 3000 // By convention, constatnts should be all uppercase 
// other than that, zabbour 

UserRouter = require('./Routers/UserRouter')


app.use(express.json())

app.use('/user', UserRouter)

app.listen(port, () => {
    console.log(`server running on  ${port}`)
})