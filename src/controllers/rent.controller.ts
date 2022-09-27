import { Request, Response } from "express";
import { Error } from "mongoose";

const Rent = require("../models/rent.model");

module.exports.createRent = (request: Request, response: Response) => {
  const rent = new Rent({
    clientID: request.body.clientID || "",
    vehicleID: request.body.vehicleID || "",
    start: request.body.start || "",
    end: request.body.end || "",
    price: request.body.price || "",
  });

  Rent.create(rent, (error: Error, rent: Response) => {
    if (error) {
      response.status(500).send(error);
    } else {
      response.send(rent);
    }
  })
};

module.exports.getRents = async (request: Request, response: Response) => {
  const clients = await Rent.find({});
  response.send(clients);
};

module.exports.getRentByID = async (request: Request, response: Response) => {
  const rentID = request.params.id;
  const rent = await Rent.findById(rentID);
  response.send(rent);
};

module.exports.updateRentByID = async (request: Request, response: Response) => {

  const rentID = request.params.id

  const update = {
    clientID: request.body.clientID,
    vehicleID: request.body.vehicleID,
    start: request.body.start,
    end: request.body.end,
    price: request.body.price,
  }

  const rent = await Rent.findByIdAndUpdate(rentID, update, { new: true });

  if (rent) {
    response.json(rent);
  } else {
    response.status(400);
  }

};

module.exports.deleteRentByID = async (request: Request, response: Response) => {
  const rentID = request.params.id;
  const rent = await Rent.findById(rentID);
  await Rent.findByIdAndRemove(rentID);
  response.send(`Rent deleted : ${rent}`);
};
