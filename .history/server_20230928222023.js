// app.get('/products', (req, res) => {
//   res.json(Products);
// });

// app.get('/products/:id', (req, res) => {
//   const product = Products.find((p) => p._id === req.params.id);
//   res.json(product);
// });
const express = require('express');
const dotenv = require('dotenv');
const connectToDatabase = require('./config/MongoDB.js');
const ImportData = require('./DataImport.js');
dotenv.config();
connectToDatabase();
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/import', ImportData);

app.get('/', (req, res) => {
  res.send('App is running....');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
