import { Request, Response } from "express";
import { Error } from "mongoose";

const Client = require("../../models/client.model");

module.exports.createClient = (request: Request, response: Response) => {
  const client = new Client({
    firstName: request.body.firstName || "",
    lastName: request.body.lastName || "",
    birthDate: request.body.birthDate || "",
    email: request.body.email || "",
    telephone: request.body.telephone || "",
  });

  Client.create(client, (error: Error, client: Response) => {
    if (error) {
      response.status(500).send(error);
    } else {
      response.send(client);
    }
  })
};
