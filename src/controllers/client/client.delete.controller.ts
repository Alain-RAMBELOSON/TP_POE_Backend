import { Request, Response } from "express";

const Client = require("../../models/client.model");

module.exports.deleteClientByID = async (request: Request, response: Response) => {
  const clientID = request.params.id;
  const client = await Client.findById(clientID);
  await Client.findByIdAndRemove(clientID);
  response.send(`Client deleted : ${client}`);
};
