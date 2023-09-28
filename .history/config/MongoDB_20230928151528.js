const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGOURI, {
      useunifiedtopology: true,
      useNewUrlParser: true
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.log('Error:' + error.message);
    process.exit(1);
  }
};

export default connectToDatabase();
