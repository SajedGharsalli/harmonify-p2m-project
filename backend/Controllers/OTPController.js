const OTP = require('../models/otpModel')
const User = require('../models/UserModel');
const { generateOTP } = require('../util/generateOTP')
const sendEmail = require('../util/sendEmail')


const { AUTH_EMAIL } = process.env


const verifyOTP = async ({ email, otp }) => {
    try {
        if (!(email && otp)) {
            return "Email and OTP are missing"
        }
        const storedOTP = await OTP.findOne({ email });
        if (!storedOTP) {
            return 'No OTP stored for this email'
        }
        const { expiredAt, otp: otpStored } = storedOTP;
        const currentTimestamp = new Date();
        if (expiredAt < currentTimestamp) {
            await OTP.deleteOne({ email });
            return "The code has expired. Please request a new one";
        }
        if (otp !== otpStored) {
            return "Invalid OTP"
        }
        const existingUser = await User.findOne({email})
        existingUser.verified = true;
        existingUser.save();
        return true;
    } catch (err) {
        throw err;
    }
};

const deleteOTP = (email) => {
    try {
        OTP.deleteOne({ email })
    } catch (err) { throw err }
}

const sendOTP = async ({ email }) => {
    try {
        if (!email) {return "Provide value for email "}
        const existingUser = await User.findOne({email})
        if (!existingUser){return "There is no account for this email"}
        //clear old records
        await OTP.deleteOne({ email })
        //generate Pin
        const generatedOTP = generateOTP()
        //send email
        const mailOptions = {
            from: AUTH_EMAIL,
            to: email,
            subject: "Email verification",
            html:
                `
            <p>verify your email with the code below : </p>
                <p>Your OTP is: <strong>${generatedOTP}</strong></p>
                <p>This OTP will expire in 1 hour.</p>
            `
        }
        await sendEmail(mailOptions)
        //save OTP IN DATABSE
        const newOTP = new OTP({
            email,
            otp: generatedOTP,
            createdAt: Date.now(),
            expiredAt: Date.now() + 3600000,
        })
        const createdOTPRecord = await newOTP.save()
        return createdOTPRecord
    } catch (error) {
        throw error
    }
}
module.exports = { sendOTP, verifyOTP, deleteOTP }