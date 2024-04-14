const nodemailer = require('nodemailer')

const {AUTH_EMAIL,AUTH_PASS}=process.env
let transporter = nodemailer.createTransport({
    host : "smtp-mail.outlook.com",
    auth :{
        user : AUTH_EMAIL,
        pass : AUTH_PASS
    }
})

transporter.verify((err,succes)=>{
    if (err){
        console.log(err)
    } else{
        console.log('ready for messages')
        console.log(succes)
    }
})

const sendEmail = async (mailOptions)=>{
    try {
        await transporter.sendMail(mailOptions)
        return
    } catch (error) {
        throw error
    }
}

module.exports = sendEmail