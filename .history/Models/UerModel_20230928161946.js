const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  //   name: String,
  //   role: String,

  //   email: { type: String, unique: true },
  //   photoUrl: String,
  //   password: String,
  //   selectedCourses: {
  //     type: Array,
  //     default: []
  //   }

  name: {
    type: String,
    require: true
  },

  email: {
    type: String,
    require: true,
    unique: true
  },

  password: {
    type: String,
    require: true
  },

  isAdmin: {
    type: Boolean,
    require: true,
    default: false
  }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
