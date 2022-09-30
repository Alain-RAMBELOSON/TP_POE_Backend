import { Request, Response } from "express";

const Customer = require("../../models/customer.model");

module.exports.getCustomers = async (request: Request, response: Response) => {
  const customers = await Customer.find({}, "_id");
  response.send(customers);
};
