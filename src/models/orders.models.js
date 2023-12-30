import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    id: { type: String },
    organ_det: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization' },
    date: { type: Date, default: Date.now },
    Cost: {
      shipCost: { type: Number, default:0 },
      shipTax: { type: Number, default:0 },
      productCost: { type: Number, default:0 },
      Total_Cost: { type: Number, default:0 },
    },
    status: {
      type: String,
      enum: ['cancelled', 'delivered', 'inprogress'],

    },
    trackingLink: { type: String, default: '' },
    paymentMethod: {
      type:String,
      enum:['COD','Prepaid'],
      required:true,
    },
    recAddress: {
      recAddress: { type: String, required: true },
      pincode: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
      recName: { type: String, required: true },
      recMob: { type: String, required: true },
      recEmail: { type: String },
    },
    billAddress: {
      BillAddress: { type: String  },
      pincode: { type: String  },
      city: { type: String },
      state: { type: String  },
      country: { type: String  },
      BillName: { type: String  },
      BillMob: { type: String },
      BillEmail: { type: String },
    },
    estimate_date: { type: Date },
  },
  { timestamps: true ,
    default: function () {
      return {
        billAddress: {
          BillAddress: this.recAddress.recAddress,
          pincode: this.recAddress.pincode,
          city: this.recAddress.city,
          state: this.recAddress.state,
          country: this.recAddress.country,
          BillName: this.recAddress.recName,
          BillMob: this.recAddress.recMob,
          BillEmail: this.recAddress.recEmail
        }
      }
    }
  }
);

export const Orders = mongoose.model('Orders', orderSchema);
