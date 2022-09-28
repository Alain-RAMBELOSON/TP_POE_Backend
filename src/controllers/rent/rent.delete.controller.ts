import { Request, Response } from "express";

const Rent = require("../../models/rent.model");

module.exports.deleteRentByID = async (request: Request, response: Response) => {
  const rentID = request.params.id;
  const rent = await Rent.findById(rentID);
  await Rent.findByIdAndRemove(rentID);
  response.send(`Rent deleted : ${rent}`);
};
