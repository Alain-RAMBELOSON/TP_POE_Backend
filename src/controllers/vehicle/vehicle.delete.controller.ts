import { Request, Response } from "express";

const Vehicle = require("../../models/vehicle.model");

module.exports.deleteVehicleByID = async (
  request: Request,
  response: Response
) => {
  const vehicleID = request.params.id;
  const vehicle = await Vehicle.findById(vehicleID);
  await Vehicle.findByIdAndRemove(vehicleID);
  response.send(`Vehicle deleted : ${vehicle}`);
};
