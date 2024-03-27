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
    // Here, instead of checking for each one primitively
    // you might use a serialization library to assis you with this operation 
    // for JS ecosystem I suggest [zod](https://zod.dev/)
    if (name == '' || email == '' || password == '') {
        res.json({
            status: 'FAILED',
            message: 'empty input fields !'
        })
    }
    // here, this is uncessary, use a serialization library
    // also, if you use RegEx make you sure you don't risk a 
    // DDoS attack, regexes are a vulnerability if not implemented properly
    // you might cause alot of CPU overhead and cause the server to stall 
    // link: https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS
    else if (!/^[a-zA-Z ]*$/.test(name)) {
        res.json({
            status: 'Failed', // status codes should be numbers 
            // not string literals, for unprocessable entity we use 422 
            // if you feel lazy just send: 400 as in bad request 
            // review the official HTTP protoc [RFC](https://datatracker.ietf.org/doc/html/rfc2616) 
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
        

        // the code here seems messy and quite procederal, alot actually
        // howa bout you delegate this to functions like:
        // function checkIfExists(userEmail: string): boolean {}
        // another eason to use TypeScript 
        // as, Javascript is not typesafe, your program might
        // throw an exceptin anytime, do you want your app to stop ?
        //, also, I find that don't catch exceptions, the code you wrote here
        // is a landmine, it can blow off at any second, even tho u wrote 
        // off the frontend yourself, a tech savvy user might alter 
        // with the JS in their own browser to send bad requests to these 
        // endpoints 


        // also user 
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
    // again, lots of repetition, [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
    // always delegate repeated code to its own functions and 
    // re-use it (abstracted)
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
                // modern JS uses `async/await` instead of .then() with the 
                // old `Promises`.

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

module.exports = router