import exp from 'constants';
import mongoose from 'mongoose';

const deliverySchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    orderid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
      required: true,
    },
    carrierid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Carrier',
      required: true,
    },
    AWB: { type: String, required: true },
    date: { type: Date, default: Date.now },
    status: { type: String },
    trackingLink: { type: String },
    poddoc: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PodDocu',
    },
  },
  { timestamps: true }
);

export const shipment = mongoose.model('shipment', deliverySchema);
