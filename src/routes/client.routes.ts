const clientRouter = require("express").Router();
const clientCreateController = require("../controllers/client/client.create.controller");
const clientReadController = require("../controllers/client/client.read.controller");
const clientUpdateController = require("../controllers/client/client.update.controller");
const clientDeleteController = require("../controllers/client/client.delete.controller");

clientRouter.post("/", clientCreateController.createClient);
clientRouter.get("/", clientReadController.getClients);
clientRouter.get("/:id", clientReadController.getClientByID);
clientRouter.put("/:id", clientUpdateController.updateClientByID);
clientRouter.delete("/:id", clientDeleteController.deleteClientByID);

module.exports = clientRouter;
