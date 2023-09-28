import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGOURI);
  } catch (error) {
    console.log('Error:' + error.message);
    process.exit(1);
  }
};
