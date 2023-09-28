// const mongoose = require('mongoose');

// const connectToDatabase = async () => {
//   try {
//     const connection = await mongoose.connect(process.env.MONGOURI, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//       serverSelectionTimeoutMS: 10000
//     });
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.log('Error:', error.message);
//     process.exit(1);
//   }
// };

// // Export the function without invoking it
// module.exports = connectToDatabase;

const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
