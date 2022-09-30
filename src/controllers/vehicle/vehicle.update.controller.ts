import { Request, Response } from "express";

const Vehicle = require("../../models/vehicle.model");

module.exports.updateVehicleByID = async (
  request: Request,
  response: Response
) => {
  try {
    const vehicleID = request.params.id;

    const update = {
      model: request.body.model,
      brand: request.body.brand,
      plateNumber: request.body.plateNumber,
      condition: request.body.condition,
      dailyRent: request.body.dailyRent,
      available: request.body.available,
      type: request.body.type,
    };

    await Vehicle.findByIdAndUpdate(vehicleID, update, {
      new: true,
    });
  } catch (error) {
    response.status(500).send(error);
  }
};
