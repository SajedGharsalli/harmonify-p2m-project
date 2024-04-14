// userModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  phone : Number,
  age: Number,
  weight: Number,
  height: Number,
  sex: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
