const OTP= require('../models/otpModel')
const generateOTP = require('../util/generateOTP')

const sendOTP = async ({email,subject,message,duration = 1})=>{
    try {
        if (!{email,subject,message,duration}){
            throw Error("Provide values for email ,subject,message")
        }
        //clear olld records
        await OTP.deleteOne({email})
        //generate Pin
        const generateOTP = generateOTP()
    } catch (error) {
        
    }
}