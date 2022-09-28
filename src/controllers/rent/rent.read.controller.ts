import { Request, Response } from "express";

const Rent = require("../../models/rent.model");

module.exports.getRents = async (request: Request, response: Response) => {
  const customers = await Rent.find({});
  response.send(customers);
};

module.exports.getRentByID = async (request: Request, response: Response) => {
  const rentID = request.params.id;
  const rent = await Rent.findById(rentID);
  response.send(rent);
};
