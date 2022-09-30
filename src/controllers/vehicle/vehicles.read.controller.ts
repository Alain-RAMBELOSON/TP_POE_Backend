import { Request, Response } from "express";

const Vehicle = require("../../models/vehicle.model");

module.exports.getVehicles = async (request: Request, response: Response) => {
  try {
    const vehicles = await Vehicle.find({});
    response.send(vehicles);
  } catch {
    response.status(404).send("Vehicles not found");
  }
};
