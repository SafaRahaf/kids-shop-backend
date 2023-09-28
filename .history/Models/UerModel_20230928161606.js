const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: String,
  role: String,

  email: { type: String, unique: true },
  photoUrl: String,
  password: String,
  selectedCourses: {
    type: Array,
    default: []
  }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
