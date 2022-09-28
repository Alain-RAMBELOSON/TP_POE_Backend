const mongoose = require("mongoose");
const { isEmail } = require("validator");

const clientSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 50,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
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

const clientModel = mongoose.model("Client", clientSchema);
module.exports = clientModel;

export { };
