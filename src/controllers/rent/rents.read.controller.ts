import { Request, Response } from "express";

const Rent = require("../../models/rent.model");

module.exports.getRents = async (request: Request, response: Response) => {
  try {
    const customers = await Rent.find({}, "_id");
    response.send(customers);
  } catch (error) {
    response.status(500).send(error);
  }
};
