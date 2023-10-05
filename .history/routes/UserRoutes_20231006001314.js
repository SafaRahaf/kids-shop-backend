const express = require('express');
const asyncHadler = require('express-async-handler');
const User = require('../Models/UserModel');
// const generateToken = require('../path-to-your/generateToken');
const generateToken = require('../utils/generateToken');

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

userRouter.post('/profile', res.send('User Profile'));

module.exports = userRouter;
