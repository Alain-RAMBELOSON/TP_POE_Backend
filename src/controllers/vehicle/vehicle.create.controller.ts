import { Request, Response } from "express";
import { Error } from "mongoose";

const Vehicle = require("../../models/vehicle.model");

module.exports.createVehicle = (request: Request, response: Response) => {

  const vehicle = new Vehicle({
    model: request.body.model || "",
    brand: request.body.brand || "",
    plateNumber: request.body.plateNumber || "",
    condition: request.body.condition || "",
    dailyPrice: request.body.dailyPrice || 0,
    available: request.body.available || true,
    type: request.body.type || "",
  });

  Vehicle.create(vehicle, (error: Error, vehicle: Response) => {
    if (error) {
      response.status(500).send(error);
    } else {
      response.send(vehicle);
    }
  })

};