const express = require('express');
const User = require('./Models/UserModel.js');
const Product = require('./Models/ProductModel.js');
const users = require('./data/users.js');
const products = require('./data/Products.js');

const ImportData = express.Router();

ImportData.post('/user', async (req, res) => {
  //   try {
  await User.deleteMany({});
  const importUser = await User.insertMany(users);
  res.send({ importUser });
  //   } catch (error) {
  //     console.error('Error importing data:', error.message);
  //     res.status(500).send({ error: 'Internal Server Error' });
  //   }
});

ImportData.post('/product', async (req, res) => {
  await Product.deleteMany({});
  const importProducts = await Product.insertMany(products);
  res.send({ importProducts });
});

module.exports = ImportData;
