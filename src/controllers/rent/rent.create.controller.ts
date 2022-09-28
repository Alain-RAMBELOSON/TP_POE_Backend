import { Request, Response } from "express";
import { Error } from "mongoose";

const Rent = require("../../models/rent.model");

module.exports.createRent = (request: Request, response: Response) => {
  const rent = new Rent({
    customerID: request.body.customerID,
    vehicleID: request.body.vehicleID,
    start: request.body.start,
    end: request.body.end,
    price: request.body.price,
  });

  Rent.create(rent, (error: Error, rent: Response) => {
    if (error) {
      response.status(500).send(error);
    } else {
      response.send(rent);
    }
  })
};
