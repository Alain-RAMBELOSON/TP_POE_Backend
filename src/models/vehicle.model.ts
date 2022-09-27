const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
    },
    model: {
      type: String,
    },
    plateNumber: {
      type: String,
    },
    condition: {
      type: String,
    },
    dailyPrice: {
      type: Number,
    },
    available: {
      type: Boolean,
    },
    type: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const vehicleModel = mongoose.model("Vehicle", vehicleSchema);
module.exports = vehicleModel;

export { };
