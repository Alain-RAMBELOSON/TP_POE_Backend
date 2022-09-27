const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    type: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports.VehicleModel = mongoose.model("Vehicle", vehicleSchema);
