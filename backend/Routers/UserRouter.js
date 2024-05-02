const express = require('express')
const router = express.Router()
const User = require('./../models/UserModel')
const bcrypt = require('bcrypt')

const {registerUser,loginUser,updateUser} = require("../Controllers/userController")

//register
router.post('/register', async (req,res)=>{
    let { name, email, password } = req.body
    name = name.trim()
    email = email.trim()
    password = password.trim()

    const register= await registerUser({ name, email, password })
    res.status(200).json({ message: register })
})

//login
router.post('/login', async (req,res)=>{
    let { email, password } = req.body;
    email = email.trim();
    password = password.trim();

    const login =await loginUser({ email, password })
    res.json(200).json({message : login})
}
)

//update
router.put('/update', async (req, res) => {
    let { email, age, weight, height, sex } = req.body;
    email = email.trim();
    try {
        const update = await updateUser({ email, age, weight, height, sex });
        res.status(200).json({ message: update });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" }); 
    }
});



module.exports = router