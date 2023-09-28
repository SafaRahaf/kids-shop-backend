// const mongoose = require('mongoose');

// const connectToDatabase = async () => {
//   try {
//     await mongoose.connect(process.env.MONGOURI, {
//       useUnifiedTopology: true
//       // useNewUrlParser: true
//     });
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('Error:', error.message);
//     process.exit(1);
//   }
// };

// module.exports = connectToDatabase;
// db.js

const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI, {
      useUnifiedTopology: true
      // useNewUrlParser: true
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
