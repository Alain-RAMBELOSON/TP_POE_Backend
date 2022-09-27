const clientRouter = require("express").Router();
const clientController = require("../controllers/client.controller");

clientRouter.post("/", clientController.createClient);
clientRouter.get("/", clientController.getClients);

module.exports = clientRouter;
