const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const connectToDatabase = require('./config/MongoDB.js');

const ImportData = require('./DataImport.js');
const productRoutes = require('./routes/ProductRoutes.js');
const userRouter = require('./routes/UserRoutes.js');

dotenv.config();
connectToDatabase();

const cors = require('cors');
const { NotFound } = require('./middleweres/Error.js');
const { ErrorHandler } = require('./middleweres/Error.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/import', ImportData);
app.use('/products', productRoutes);
app.use('/users', userRouter);

app.use(NotFound);
app.use(ErrorHandler);

// app.get('/', (req, res) => {
//   res.send('App is running....');
// });

// app.get('/products', (req, res) => {
//   res.json(Products);
// });

// app.get('/products/:id', (req, res) => {
//   const product = Products.find((p) => p._id === req.params.id);
//   res.json(product);
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
