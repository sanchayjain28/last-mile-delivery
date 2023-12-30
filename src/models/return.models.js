import mongoose from 'mongoose';

const returnSchema = new mongoose.Schema(
  {
    return_id: { type: String, required: true },
    order_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
      required: true,
    },
    return_date: { type: Date, default: Date.now },
    status: { type: String, required: true },
    return_link: { type: String },
  },
  {
    timestamps: true,
  }
);
export const returns = mongoose.model('returns', returnSchema);
