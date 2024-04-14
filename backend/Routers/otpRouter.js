const express = require('express')
const router = express.Router()

router.post("/otp",(req,res)=>{
    const {email,subject,message,duration}=req.body
})