import { Request, Response } from "express";

const Customer = require("../../models/customer.model");

module.exports.deleteCustomerByID = async (
  request: Request,
  response: Response
) => {
  try {
    const customerID = request.params.id;
    const customer = await Customer.findById(customerID);
    await Customer.findByIdAndRemove(customerID);
    response.send(`Customer deleted : ${customer}`);
  } catch (error) {
    response.status(500).send(error);
  }
};
