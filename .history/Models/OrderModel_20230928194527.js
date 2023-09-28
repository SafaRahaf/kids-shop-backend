const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },

    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product'
        }
      }
    ],
    shipingAddress: {
      //address,city,postCode,country
      aAddress: { type: String, required: true },
      city: { type: String, required: true },
      postCode: { type: String, required: true },
      country: { type: String, required: true }
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;
