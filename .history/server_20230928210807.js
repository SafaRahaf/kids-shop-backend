// const express = require('express');
// // const Products = require('./data/Products.json');
// const dotenv = require('dotenv');
// const connectToDatabase = require('./config/MongoDB.js');
// const ImportData = require('./seed');
// // const {useParams} = require('react-router-dom')
// dotenv.config();
// connectToDatabase();
// const cors = require('cors');

// const app = express();

// app.use(cors());

// // app.get('/products', (req, res) => {
// //   res.json(Products);
// // });

// // app.get('/products/:id', (req, res) => {
// //   const product = Products.find((p) => p._id === req.params.id);
// //   res.json(product);
// // });

// app.use('/import', ImportData());

// app.get('/', (req, res) => {
//   res.send('App is running....');
// });

// const PORT = process.env.PORT;

// app.listen(5000, () => {
//   console.log(`server is running on port ${PORT}`);
// });

// server.js

const express = require('express');
const dotenv = require('dotenv');
const connectToDatabase = require('./config/MongoDB.js');
const ImportData = require('./seed');
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
