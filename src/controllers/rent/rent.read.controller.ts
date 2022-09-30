import { Request, Response } from "express";

const Rent = require("../../models/rent.model");

module.exports.getRentByID = async (request: Request, response: Response) => {
  try {
    const rentID = request.params.id;
    const rent = await Rent.findById(rentID);
    response.send(rent);
  } catch (error) {
    response.status(500).send(error);
  }
};
