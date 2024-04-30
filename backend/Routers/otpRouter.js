const express = require('express')
const router = express.Router()
const {sendOTP,verifyOTP}= require ('../Controllers/OTPController')

router.post("/", async (req,res)=>{
    try {
        const {email,subject,message,duration}=req.body
        const createdOTP = await sendOTP({email,subject,message,duration})
        res.status(200).json(createdOTP)
    } catch (err){
        res.status(400).send(err.message)
    }
})
router.post("/verify", async (req,res)=>{
    try{
        let {email,otp}=req.body;
        const verification = await verifyOTP({email,otp})
        res.status(200).json({valid : verification})
    } catch(err){
        throw err
    }
})
module.exports= router