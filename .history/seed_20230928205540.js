import express from 'express';
import User from './Models/UserModel';
import users from './data/users';

const ImportData = express.Router();

Importdata.post('/user', async (req, res) => {
  await User.Remove({});
  const ImportUser = await User.insertMany(users);
});
