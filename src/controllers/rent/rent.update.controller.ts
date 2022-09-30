import { Request, Response } from "express";

const Rent = require("../../models/rent.model");

module.exports.updateRentByID = async (
  request: Request,
  response: Response
) => {
  try {
    const rentID = request.params.id;

    const update = {
      customerID: request.body.customerID,
      vehicleID: request.body.vehicleID,
      start: request.body.start,
      end: request.body.end,
      price: request.body.price,
    };

    await Rent.findByIdAndUpdate(rentID, update, { new: true });
  } catch (error) {
    response.status(500).send(error);
  }
};
