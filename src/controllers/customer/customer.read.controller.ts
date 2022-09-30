import { Request, Response } from "express";

const Customer = require("../../models/customer.model");

module.exports.getCustomerByID = async (
  request: Request,
  response: Response
) => {
  try {
    const customerID = request.params.id;
    const customer = await Customer.findById(customerID);
    response.send(customer);
  } catch (error) {
    response.status(500).send(error);
  }
};
