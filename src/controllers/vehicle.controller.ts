import { Request, Response } from "express";

const Vehicle = require("../models/vehicle.model");

module.exports.createVehicle = async (request: Request, response: Response) => {
  const body = request.body;

  const vehicle = new Vehicle({
    title: body.type || "",
  });

  const savedVehicle = await vehicle.save();

  response.status(201).json(savedVehicle);
};

module.exports.getVehicles = async (request: Request, response: Response) => {
  const vehicles = await Vehicle.find({});
  response.json(vehicles);
};