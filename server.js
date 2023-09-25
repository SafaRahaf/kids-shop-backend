const express = require('express');
const Products = require('./data/Products.json');
// import express from 'express';
// import Products from './data/Products.json';
// const {useParams} = require('react-router-dom')
const cors = require('cors');

//.//

const app = express();

app.use(cors());

app.get('/products', (req, res) => {
  res.json(Products);
});

app.get('/products/:id', (req, res) => {
  const product = Products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.get('/', (req, res) => {
  res.send('App is running....');
});

const PORT = 5000;

app.listen(5000, () => {
  console.log(`server is running on port ${PORT}`);
});
