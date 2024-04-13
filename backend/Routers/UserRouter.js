const express = require('express')
const router = express.Router()

// mongodb user model
const User = require('./../models/UserModel')

const bcrypt = require('bcrypt')

//register
router.post('/register', (req, res) => {
    let { name, email, password } = req.body
    name = name.trim()
    email = email.trim()
    password = password.trim()

    if (name == '' || email == '' || password == '') {
        res.json({
            status: 'FAILED',
            message: 'empty input fields !'
        })
    }
    else if (!/^[a-zA-Z ]*$/.test(name)) {
        res.json({
            status: 'Failed',
            message: 'Invalid name entered'
        })
    }
    else if (!/^\S+@\S+\.\S+$/.test(email)) {
        res.json({
            status: 'Failed',
            message: 'Invalid email entered'
        })
    }
    else if (password.length < 8) {
        res.json({
            status: 'Failed',
            message: 'password too short'
        })
    }
    else {
        //check if exists
        User.find({ email }).then(result => {
            if (result.length) {
                res.json({
                    status: 'Failed',
                    message: 'user already exists'
                })
            }
            else {
                //create new User 
                //password handler
                const rounds = 10
                bcrypt.hash(password, rounds).then(handledPassword => {
                    const newUser = new User({
                        name, email, password: handledPassword
                    })
                    newUser.save().then(result => {
                        res.json({
                            status: 'SUCCESS',
                            message: 'register successful',
                            data: result
                        })
                    }).catch(err => {
                        console.log(err)
                        res.json({
                            status: 'Failed',
                            message: 'An error while registering'
                        })
                    })
                }).catch(err => {
                    console.log(err)
                    res.json({
                        status: 'Failed',
                        message: 'An error while hashing password'
                    })
                })
            }
        }).catch(err => {
            console.log(err)
            res.json({
                status: 'Failed',
                message: 'An error while cheching for existing user'
            })
        })
    }
})


//login
router.post('/login', (req, res) => {
    let { email, password } = req.body
    email = email.trim()
    password = password.trim()
    if (email == '' || password == '') {
        res.json({
            status: 'Failed',
            message: 'empty credentials'
        })
    }
    else {
        //check if user exists
        User.find({ email }).then(data => {
            if (data.length) {
                //user exists
                const hashedPassword = data[0].password
                bcrypt.compare(password, hashedPassword).then(result => {
                    if (result) {
                        //password match
                        res.json({
                            status: 'SUCCESS',
                            message: 'login successful',
                            data: data
                        })
                    }
                    else {
                        res.json({
                            status: 'Failed',
                            message: 'Invalid password entered!'
                        })
                    }
                }).catch(err => {
                    res.json({
                        status: 'Failed',
                        message: 'An error occured while²²  ²   ²    comparing passwords'
                    })
                })
            }
            else {
                res.json({
                    status: 'Failed',
                    message: 'Invalid credentials'
                })
            }
        }).catch(err => {
            console.log(err)
            res.json({
                status: 'Failed',
                message: 'An error occured while checking for user'
            })
        })
    }
})


router.put('/update', async (req, res) => {
  try {
      const { email, age, weight, height,sex } = req.body;

      const existingUser = await User.findOne({ email });

      if (!existingUser) {
          return res.json({
              status: "failed",
              message: "User not found",
          });
      }

      existingUser.age = age;
      existingUser.weight = weight;
      existingUser.height = height;
      existingUser.sex = sex

      const updatedUser = await existingUser.save();

      res.json({
          status: "success",
          message: "User data updated successfully",
          data: updatedUser,
      });
  } catch (err) {
      console.error(err);
      res.status(500).json({
          status: "failed",
          message: "Internal server error",
      });
  }
});


module.exports = router