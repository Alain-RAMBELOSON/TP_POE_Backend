import { Request, Response } from "express";

const Client = require("../../models/client.model");


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