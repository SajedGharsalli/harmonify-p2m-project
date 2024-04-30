const OTP= require('../models/otpModel')
const {generateOTP} = require('../util/generateOTP')
const sendEmail = require('../util/sendEmail')

const {AUTH_EMAIL}=process.env

const sendOTP = async ({email,subject,message,duration = 1})=>{
    try {
        if (!{email,subject,message,duration}){
            throw Error("Provide values for email ,subject,message")
        }
        //clear old records
        await OTP.deleteOne({email})
        //generate Pin
        const generatedOTP = generateOTP()
        //send email
        const mailOptions = {
            from : AUTH_EMAIL,
            to : email,
            subject,
            html :
            `
            <p>${message}</p>
                <p>Your OTP is: <strong>${generatedOTP}</strong></p>
                <p>This OTP will expire in ${duration} ${duration===1 ? 'hour': 'hours'}.</p>
            `
        }
        await sendEmail(mailOptions)
        //save OTP IN DATABSE
        const newOTP =  new OTP({
            email,
            otp: generatedOTP,
            createdAt : Date.now(),
            expiredAt : Date.now() + 3600000 * +duration,
        })
        const createdOTPRecord = await newOTP.save()
        return createdOTPRecord
    } catch (error) {
        throw error
    }
}
module.exports = {sendOTP}