const express = require('express');
const User = require('./Models/UserModel.js');
const users = require('./data/users.js');

const ImportData = express.Router();

ImportData.post('/user', async (req, res) => {
  await User.remove({}); // Change Remove to remove
  const importUser = await User.insertMany(users);
  res.send({ importUser });
});

module.exports = ImportData;
