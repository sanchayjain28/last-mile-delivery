import mongoose from 'mongoose';

const carrierSchema = new mongoose.Schema(
  {
    carrier_id: { type: String, required: true },
    carrier_name: { type: String, required: true },
  },
  { timestamps: true }
);
export const carrier = mongoose.model('carrier', carrierSchema);
