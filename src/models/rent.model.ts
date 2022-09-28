const mongoose = require("mongoose");

const rentSchema = new mongoose.Schema(
  {
    clientID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
    },
    vehicleID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
    },
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const rentModel = mongoose.model("Rent", rentSchema);
module.exports = rentModel;

export { };
