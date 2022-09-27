const clientRouter = require("express").Router();
const clientController = require("../controllers/client.controller");

clientRouter.post("/", clientController.createClient);
clientRouter.get("/", clientController.getClients);
clientRouter.get("/:id", clientController.getClientByID);
clientRouter.put("/:id", clientController.updateClientByID);
clientRouter.delete("/:id", clientController.deleteClientByID);

module.exports = clientRouter;
