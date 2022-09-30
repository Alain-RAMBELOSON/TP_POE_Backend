import { Request, Response } from "express";

const Vehicle = require("../../models/vehicle.model");

module.exports.getVehicles = async (request: Request, response: Response) => {
  const vehicles = await Vehicle.find({}, "_id");
  response.send(vehicles);
};
