import { Request, Response } from "express";

const Vehicle = require("../../models/vehicle.model");

module.exports.getVehicleByID = async (
  request: Request,
  response: Response
) => {
  try {
    const vehicleID = request.params.id;
    const vehicle = await Vehicle.findById(vehicleID);
    response.send(vehicle);
  } catch (error) {
    response.status(500).send(error);
  }
};
