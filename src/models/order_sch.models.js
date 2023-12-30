import mongoose from "mongoose";
const recipientSchema = new mongoose.Schema({
  contact: {
    personName: String,
    phoneNumber: Number,
    companyName: String,
  },
  address: {
    streetLines: [String],
    city: String,
    stateOrProvinceCode: String,
    postalCode: Number,
    countryCode: String,
  },
});

const shipmentSchema = new mongoose.Schema({
  shipper: {
    contact: {
      personName: String,
      phoneNumber: Number,
      companyName: String,
    },
    address: {
      streetLines: [String],
      city: String,
      stateOrProvinceCode: String,
      postalCode: Number,
      countryCode: String,
    },
  },
  recipients: [recipientSchema],
  shipDatestamp: String,
  serviceType: String,
  packagingType: String,
  pickupType: String,
  blockInsightVisibility: Boolean,
  shippingChargesPayment: {
    paymentType: String,
  },
  shipmentSpecialServices: {
    specialServiceTypes: [String],
  },
  labelSpecification: {
    imageType: String,
    labelStockType: String,
  },
  requestedPackageLineItems: [{}],
});

const labelRequestSchema = new mongoose.Schema({
  labelResponseOptions: String,
  requestedShipment: shipmentSchema,
  accountNumber: {
    value: String,
  },
});

export const LabelRequestModel = mongoose.model('LabelRequest', labelRequestSchema);

