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

  Client.create(client, (error: Error, client: Response) => {
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

module.exports.getClientByID = async (request: Request, response: Response) => {
  const clientID = request.params.id;
  const client = await Client.findById(clientID);
  response.send(client);
};

module.exports.updateClientByID = async (request: Request, response: Response) => {

  const clientID = request.params.id

  const update = {
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    birthDate: request.body.birthDate,
    email: request.body.email,
    telephone: request.body.telephone,
  }

  const client = await Client.findByIdAndUpdate(clientID, update, { new: true });

  if (client) {
    response.json(client);
  } else {
    response.status(400);
  }

};

module.exports.deleteClientByID = async (request: Request, response: Response) => {
  const clientID = request.params.id;
  const client = await Client.findById(clientID);
  await Client.findByIdAndRemove(clientID);
  response.send(`Client deleted : ${client}`);
};
