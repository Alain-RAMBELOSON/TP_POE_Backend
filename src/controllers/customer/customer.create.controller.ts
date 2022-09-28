import { Request, Response } from "express";
import { Error } from "mongoose";

const Customer = require("../../models/customer.model");

module.exports.createCustomer = (request: Request, response: Response) => {
  const customer = new Customer({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    birthDate: request.body.birthDate || "",
    email: request.body.email,
    telephone: request.body.telephone || "",
  });

  Customer.create(customer, (error: Error, customer: Response) => {
    if (error) {
      response.status(500).send(error);
    } else {
      response.send(customer);
    }
  })
};
