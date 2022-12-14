const rentRouter = require("express").Router();
const rentCreateController = require("../controllers/rent/rent.create.controller");
const rentsReadController = require("../controllers/rent/rents.read.controller");
const rentReadController = require("../controllers/rent/rent.read.controller");
const rentUpdateController = require("../controllers/rent/rent.update.controller");
const rentDeleteController = require("../controllers/rent/rent.delete.controller");

rentRouter.post("/", rentCreateController.createRent);
rentRouter.get("/:id", rentReadController.getRentByID);
rentRouter.get("/", rentsReadController.getRents);
rentRouter.put("/:id", rentUpdateController.updateRentByID);
rentRouter.delete("/:id", rentDeleteController.deleteRentByID);

module.exports = rentRouter;
