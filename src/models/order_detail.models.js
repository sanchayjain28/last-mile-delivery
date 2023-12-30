import mongoose from 'mongoose';
const orderDetailsSchema = new mongoose.Schema(
  {
    orderDetId: { type: String},
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Orders',
      required: true,
    },
    prodArray: [
      {
        prodItem: { type: String, required: true },
        cost: { type: Number, required: true },
        quantity: { type: Number, required: true },
        category: { type: String, required: true },
      },
    ],
    carrier_name: { type: mongoose.Schema.Types.ObjectId, ref: 'carrier' },
    cost: { type: Number, required: true },
    tax: { type: Number, required: true },
  },
  { timestamps: true }
);

export const orderDetails = mongoose.model('orderDetails', orderDetailsSchema);
