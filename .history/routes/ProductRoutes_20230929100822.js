const express = require('express');
const asyncHadler = require('express-async-handler');
const Product = require('../Models/ProductModel');

const productRoutes = express.Router();

productRoutes.get(
  '/',
  asyncHadler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);
