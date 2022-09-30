import { Request, Response } from "express";

const Vehicle = require("../../models/vehicle.model");

module.exports.getVehicles = async (request: Request, response: Response) => {
  try {
    const vehicles = await Vehicle.find({});
    response.send(vehicles);
  } catch (error) {
    response.status(500).send(error);
  }
};
