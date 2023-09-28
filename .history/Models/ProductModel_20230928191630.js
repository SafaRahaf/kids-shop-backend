const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({});

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true // fix typo here
    },

    image: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0
    },
    price: {
      type: Number,
      required: true,
      default: 0
    },
    numReviews: {
      type: String,
      required: true,
      default: 0
    },

    reviews: [reviewSchema],

    rating: {
      type: Number,
      required: true,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
