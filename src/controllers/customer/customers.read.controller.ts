import { Request, Response } from "express";

const Customer = require("../../models/customer.model");

module.exports.getCustomers = async (request: Request, response: Response) => {
  try {
    const customers = await Customer.find({}, "_id");
    response.send(customers);
  } catch (error) {
    response.status(500).send(error);
  }
};
