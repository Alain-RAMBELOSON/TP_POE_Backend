import { Request, Response } from "express";

const Rent = require("../../models/rent.model");

module.exports.getRents = async (request: Request, response: Response) => {
  const customers = await Rent.find({}, "_id");
  response.send(customers);
};
