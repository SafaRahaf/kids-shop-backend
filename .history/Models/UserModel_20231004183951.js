// name: String,
// role: String,

// email: { type: String, unique: true },
// photoUrl: String,
// password: String,
// selectedCourses: {
//   type: Array,
//   default: []
// }

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true // fix typo here
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },

    isAdmin: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  {
    timestamps: true
  }
);

UserSchema.methods.matchPasswords = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

const User = mongoose.model('User', UserSchema);
module.exports = User;
