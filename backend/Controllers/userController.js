const bcrypt = require('bcrypt');
const User = require('../models/UserModel');

const registerUser = async ({ name, email, password }) => {
    try {
        if (name == '' || email == '' || password == '') {
            return 'Empty input fields!';
        } else if (!/^[a-zA-Z ]*$/.test(name)) {
            return 'Invalid name entered';
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            return 'Invalid email entered';
        } else if (password.length < 8) {
            return 'Password too short';
        } else {
            const user = await User.findOne({ email });
            if (user) {
                return 'User already exists';
            } else {
                const rounds = 10;
                const handledPassword = await bcrypt.hash(password, rounds);
                const newUser = new User({
                    name,
                    email,
                    password: handledPassword,
                    verified: false
                });
                await newUser.save();
                return 'Registration successful';
            }
        }
    } catch (err) {
        console.error(err);
        return 'An error occurred while registering';
    }
};

const loginUser = async ({ email, password } ) => {
    
    if (email == '' || password == '') {
        return 'Empty credentials'
    } else {
        User.findOne({ email })
            .then(user => {
                if (!user) {
                    return 'Invalid credentials'
                } else {
                    bcrypt.compare(password, user.password)
                        .then(result => {
                            if (result) {
                                return 'Login successful'
                            } else {
                                return 'Invalid password entered!'
                            }
                        })
                        .catch(() => {
                            return 'An error occurred while comparing passwords'
                        });
                }
            })
            .catch(() => {
                return 'An error occurred while checking for user'
            });
    }
};

const updateUser = async ({ email, age, weight, height, sex }) => {
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {return "User not found"}
        existingUser.age = age;
        existingUser.weight = weight;
        existingUser.height = height;
        existingUser.sex = sex
        existingUser.save();
        return "User data updated successfully"
    } catch {
        return "Internal server error"
    }
};

module.exports = {registerUser,loginUser,updateUser};
