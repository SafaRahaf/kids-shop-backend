const express = require('express');
const User = require('./Models/UserModel');
const users = require('./data/users');

const ImportData = express.Router();

Importdata.post('/user', async (req, res) => {
  await User.Remove({});
  const importUser = await User.insertMany(users);
  res.send({ importUser });
});

export default ImportData;
