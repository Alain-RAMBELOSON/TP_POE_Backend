const rentRouter = require("express").Router();
const rentController = require("../controllers/rent.controller");

rentRouter.post("/", rentController.createRent);
rentRouter.get("/", rentController.getRents);
rentRouter.get("/:id", rentController.getRentByID);
rentRouter.put("/:id", rentController.updateRentByID);
rentRouter.delete("/:id", rentController.deleteRentByID);

module.exports = rentRouter;
