import mongoose from 'mongoose';
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import Action from './user_action.models.js'



const organizationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, trim: true, unique: true },
    phone: { type: String, required: true },
    address1: { type: String, required: true },
    address2: { type: String },
    postalCode: { type: String, required: true },
    state: { type: String, required: true },
    type: { type: String, enum: ['business', 'residential'], required: true },
    city: { type: String, required: true },
    industryType: { type: String },
    website: { type: String },
    status: {
      type: String,
      enum: ['deleted', 'enable', 'disable'],
      default: 'enable',
    },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    password: {
      type: String,
      minlength: [8, 'String must be at least 3 characters long'],
      maxlength: [14, 'String cannot exceed 50 characters'],
      required: [true, 'Password must be necessary'],
    },
    actions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Action,
      },
    ],
    orders: { type: Number, default: 0 },
    wallet: { type: Number, default: 0 },
    refresh_token: {
      type: String,
    },
  },
  { timestamps: true }
);

organizationSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

organizationSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

organizationSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      name: this.name,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};
organizationSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const Organization = mongoose.model('Organization', organizationSchema);
