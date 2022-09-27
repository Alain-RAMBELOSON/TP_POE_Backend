const mongoose = require("mongoose");

const rentSchema = new mongoose.Schema(
  {
    clientID: {
      type: String,
    },
    vehicleID: {
      type: String,
    },
    start: {
      type: String,
    },
    end: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const rentModel = mongoose.model("Rent", rentSchema);
module.exports = rentModel;

export { };
