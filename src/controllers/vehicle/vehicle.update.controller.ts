import { Request, Response } from "express";

const Vehicle = require("../../models/vehicle.model");

module.exports.updateVehicleByID = async (request: Request, response: Response) => {

  const vehicleID = request.params.id

  const update = {
    model: request.body.model,
    brand: request.body.brand,
    plateNumber: request.body.plateNumber,
    condition: request.body.condition,
    dailyPrice: request.body.dailyPrice,
    available: request.body.available,
    type: request.body.type,
  }

  const vehicle = await Vehicle.findByIdAndUpdate(vehicleID, update, { new: true });

  if (vehicle) {
    response.json(vehicle);
  } else {
    response.status(400);
  }

};
