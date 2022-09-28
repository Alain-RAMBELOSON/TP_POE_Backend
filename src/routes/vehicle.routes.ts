const vehicleRouter = require("express").Router();
const vehicleCreateController = require("../controllers/vehicle/vehicle.create.controller");
const vehicleReadController = require("../controllers/vehicle/vehicle.read.controller");
const vehicleUpdateController = require("../controllers/vehicle/vehicle.update.controller");
const vehicleDeleteController = require("../controllers/vehicle/vehicle.delete.controller");

vehicleRouter.post("/", vehicleCreateController.createVehicle);
vehicleRouter.get("/", vehicleReadController.getVehicles);
vehicleRouter.get("/:id", vehicleReadController.getVehicleByID);
vehicleRouter.put("/:id", vehicleUpdateController.updateVehicleByID);
vehicleRouter.delete("/:id", vehicleDeleteController.deleteVehicleByID);

module.exports = vehicleRouter;
