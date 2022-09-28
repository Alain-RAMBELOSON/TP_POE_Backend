const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      trim: true,
      maxLength: 50,
    },
    model: {
      type: String,
      trim: true,
      maxLength: 50,
    },
    plateNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxLength: 50,
    },
    condition: {
      type: String,
      maxLength: 1,
    },
    dailyRent: {
      type: Number,
    },
    available: {
      type: Boolean,
    },
    type: {
      type: String,
      trim: true,
      maxLength: 50,
    },
  },
  {
    timestamps: true,
  }
);

const vehicleModel = mongoose.model("Vehicle", vehicleSchema);
module.exports = vehicleModel;

export { };
