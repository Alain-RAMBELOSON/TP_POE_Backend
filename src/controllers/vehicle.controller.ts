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

  Vehicle.create(vehicle, (error: Error, vehicle: Response) => {
    if (error) {
      response.status(500).send(error);
    } else {
      response.send(vehicle);
    }
  })

};

module.exports.getVehicles = async (request: Request, response: Response) => {

  const vehicles = await Vehicle.find({});
  response.send(vehicles);

};

module.exports.getVehicleByID = async (request: Request, response: Response) => {

  const vehicleID = request.params.id;
  const vehicle = await Vehicle.findById(vehicleID);
  response.send(vehicle);

};

module.exports.updateVehicleByID = async (request: Request, response: Response) => {

  const vehicleID = request.params.id

  const update = {
    model: request.body.model,
    brand: request.body.brand,
    plateNumber: request.body.plateNumber,
    condition: request.body.condition,
    dailyPrice: request.body.dailyPrice,
    available: request.body.available,
    type: request.body.type,
  }

  const vehicle = await Vehicle.findByIdAndUpdate(vehicleID, update, { new: true });

  if (vehicle) {
    response.json(vehicle);
  } else {
    response.status(400);
  }

};

module.exports.deleteVehicleByID = async (request: Request, response: Response) => {

  const vehicleID = request.params.id;
  const vehicle = await Vehicle.findById(vehicleID);
  await Vehicle.findByIdAndRemove(vehicleID);
  response.send(`Vehicle deleted : ${vehicle}`);

};
