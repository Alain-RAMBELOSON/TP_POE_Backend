const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    birthDate: {
      type: String,
    },
    email: {
      type: String,
    },
    telephone: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const clientModel = mongoose.model("Client", clientSchema);
module.exports = clientModel;

export { };
