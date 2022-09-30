import { Request, Response } from "express";

const Vehicle = require("../../models/vehicle.model");

module.exports.getVehicleByID = async (
  request: Request,
  response: Response
) => {
  const vehicleID = request.params.id;
  const vehicle = await Vehicle.findById(vehicleID);
  response.send(vehicle);
};
