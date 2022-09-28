const mongoose = require("mongoose");
const { isEmail } = require("validator");

const customerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
    birthDate: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: [isEmail],
    },
    telephone: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const customerModel = mongoose.model("Customer", customerSchema);
module.exports = customerModel;

export {};
