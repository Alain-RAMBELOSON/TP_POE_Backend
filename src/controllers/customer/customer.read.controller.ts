import { Request, Response } from "express";

const Customer = require("../../models/customer.model");

module.exports.getCustomers = async (request: Request, response: Response) => {
  const customers = await Customer.find({});
  response.send(customers);
};

module.exports.getCustomerByID = async (
  request: Request,
  response: Response
) => {
  const customerID = request.params.id;
  const customer = await Customer.findById(customerID);
  response.send(customer);
};
