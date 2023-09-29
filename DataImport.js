const express = require('express');
const User = require('./Models/UserModel.js');
const Product = require('./Models/ProductModel.js');
const users = require('./data/users.js');
const products = require('./data/Products.js');

const asyncHadler = require('express-async-handler');

const ImportData = express.Router();

ImportData.post(
  '/user',
  asyncHadler(async (req, res) => {
    //   try {
    await User.deleteMany({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
    //   } catch (error) {
    //     console.error('Error importing data:', error.message);
    //     res.status(500).send({ error: 'Internal Server Error' });
    //   }
  })
);

ImportData.post('/products', async (req, res) => {
  await Product.deleteMany({});
  const importProducts = await Product.insertMany(products);
  res.send({ importProducts });
});

module.exports = ImportData;
