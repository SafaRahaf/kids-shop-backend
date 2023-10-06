const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../Models/UserModel');

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorizetion &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    console.log('Token found');
  }
  if (!token) {
    res.status(401);
    throw new Error('not authorized, no token ');
  }
});

module.exports = protect;
