const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  //name,rating,comment,user

  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, required: true }
});

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
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
