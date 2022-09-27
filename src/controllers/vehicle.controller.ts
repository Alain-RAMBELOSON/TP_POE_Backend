
import { Request, Response } from "express";
import { Error } from "mongoose";

const Vehicle = require("../models/vehicle.model");

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

  Vehicle.create(vehicle, (err: Error, data: any) => {
    if (err) {
      response.status(500).send(err);
    } else {
      response.send(data);
    }
  })

};

module.exports.getVehicles = async (request: Request, response: Response) => {
  const vehicles = await Vehicle.find({});
  response.send(vehicles);
};
