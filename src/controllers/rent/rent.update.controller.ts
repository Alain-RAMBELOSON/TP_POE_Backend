import { Request, Response } from "express";

const Rent = require("../../models/rent.model");

module.exports.updateRentByID = async (request: Request, response: Response) => {

  const rentID = request.params.id

  const update = {
    customerID: request.body.customerID,
    vehicleID: request.body.vehicleID,
    start: request.body.start,
    end: request.body.end,
    price: request.body.price,
  }

  const rent = await Rent.findByIdAndUpdate(rentID, update, { new: true });

  if (rent) {
    response.json(rent);
  } else {
    response.status(400);
  }

};
