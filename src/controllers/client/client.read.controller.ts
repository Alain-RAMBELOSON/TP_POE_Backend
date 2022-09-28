import { Request, Response } from "express";

const Client = require("../../models/client.model");

module.exports.getClients = async (request: Request, response: Response) => {
  const clients = await Client.find({});
  response.send(clients);
};

module.exports.getClientByID = async (request: Request, response: Response) => {
  const clientID = request.params.id;
  const client = await Client.findById(clientID);
  response.send(client);
};
