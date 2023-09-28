// const mongoose = require('mongoose');
// const UserSchema = new mongoose.Schema(
//   {
//     // name: String,
//     // role: String,

//     // email: { type: String, unique: true },
//     // photoUrl: String,
//     // password: String,
//     // selectedCourses: {
//     //   type: Array,
//     //   default: []
//     // }

//     name: {
//       type: String,
//       require: true
//     },

//     email: {
//       type: String,
//       require: true,
//       unique: true
//     },

//     password: {
//       type: String,
//       require: true
//     },

//     isAdmin: {
//       type: Boolean,
//       require: true,
//       default: false
//     }
//   },
//   {
//     timestamps: true
//   }
// );

// const User = mongoose.model('User', UserSchema);
// module.exports = User;

// user.js
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

const User = mongoose.model('User', UserSchema);
module.exports = User;
