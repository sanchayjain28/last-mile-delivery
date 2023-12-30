import mongoose from 'mongoose';

const podschema = new mongoose.Schema(
  {
    ID: { type: String, required: true },
    Shipm: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Shipment',
      required: true,
    },
    Document_link: { type: String, required: true },
  },
  { timestamps: true }
);

export const pods = mongoose.model('pods', podschema);
