import { Request, Response } from "express";

const Vehicle = require("../../models/vehicle.model");

module.exports.getVehicles = async (request: Request, response: Response) => {

  const vehicles = await Vehicle.find({});
  response.send(vehicles);

};

module.exports.getVehicleByID = async (request: Request, response: Response) => {

  const vehicleID = request.params.id;
  const vehicle = await Vehicle.findById(vehicleID);
  response.send(vehicle);

};
