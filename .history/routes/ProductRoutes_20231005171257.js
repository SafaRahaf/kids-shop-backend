// const express = require('express');
const express = require('express');
const asyncHandler = require('express-async-handler');
const Product = require('../Models/ProductModel');

const productRoutes = express.Router();

productRoutes.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

productRoutes.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id });
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('sorry! product not found');
    }
  })
);

module.exports = productRoutes;
