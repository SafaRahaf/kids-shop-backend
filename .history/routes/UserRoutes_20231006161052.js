const express = require('express');
const asyncHadler = require('express-async-handler');
const User = require('../Models/UserModel');
const generateToken = require('../utils/generateToken');
const protect = require('../middleweres/AuthMiddlewere');

// Route definitions...

const userRouter = express.Router();

userRouter.post(
  '/login',
  asyncHadler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
        createdAt: user.createdAt
      });
    } else {
      res.status(401);
      throw new Error('Invalid Email or password');
    }
  })
);

//Register
userRouter.post(
  '/',
  asyncHadler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error('User Alredy Exists');
    }

    const user = await User.create({
      name,
      email,
      password
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id)
      });
    } else {
      res.status(400);
      throw new Error('Invalid User Data');
    }
  })
);

userSchema.pre('save', async function (next) {
  if (!this.ismModified('password')) {
    next();
  }

  const salt = await bcrypt.getSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//Profile
userRouter.get(
  '/profile',
  protect,
  asyncHadler(async (req, res) => {
    // res.send('User Profile');
    const user = await User.findById(req.user._id);

    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt
      });
    } else {
      res.status(404);
      throw new Error('user not found');
    }
  })
);

module.exports = userRouter;
