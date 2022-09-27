import { Request, Response } from "express";
import { Error } from "mongoose";

const Client = require("../models/client.model");

module.exports.createClient = (request: Request, response: Response) => {

  const client = new Client({
    firstName: request.body.firstName || "",
    lastName: request.body.lastName || "",
    birthDate: request.body.birthDate || "",
    email: request.body.email || "",
    telephone: request.body.telephone || "",
  });

  Client.create(client, (error: Error, client: any) => {
    if (error) {
      response.status(500).send(error);
    } else {
      response.send(client);
    }
  })

};

module.exports.getClients = async (request: Request, response: Response) => {
  const clients = await Client.find({});
  response.send(clients);
};
