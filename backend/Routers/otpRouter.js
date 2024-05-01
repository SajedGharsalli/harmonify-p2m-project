const express = require('express')
const router = express.Router()
const { sendOTP, verifyOTP } = require('../Controllers/OTPController')

router.post("/", async (req, res) => {
    try {
        let { email } = req.body
        email = email.trim()
        const createdOTP = await sendOTP({ email })
        res.status(200).json(createdOTP)
    } catch (err) {
        res.status(400).send(err.message)
    }
})

router.post("/verify", async (req, res) => {
    try {
        let { email, otp } = req.body;
        email = email.trim()
        const verification = await verifyOTP({ email, otp })
        res.status(200).json({ message: verification })
    } catch (err) {
        throw err
    }
})
module.exports = router