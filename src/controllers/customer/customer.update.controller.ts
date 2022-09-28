import { Request, Response } from "express";

const Customer = require("../../models/customer.model");


module.exports.updateCustomerByID = async (request: Request, response: Response) => {

  const customerID = request.params.id

  const update = {
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    birthDate: request.body.birthDate,
    email: request.body.email,
    telephone: request.body.telephone,
  }

  const customer = await Customer.findByIdAndUpdate(customerID, update, { new: true });

  if (customer) {
    response.json(customer);
  } else {
    response.status(400);
  }

};