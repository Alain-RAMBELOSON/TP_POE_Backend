const vehicleRouter = require("express").Router();
const vehicleController = require("../controllers/vehicle.controller");

vehicleRouter.post("/", vehicleController.createVehicle);
vehicleRouter.get("/", vehicleController.getVehicles);
vehicleRouter.get("/:id", vehicleController.getVehicleByID);
vehicleRouter.put("/:id", vehicleController.updateVehicleByID);
vehicleRouter.delete("/:id", vehicleController.deleteVehicleByID);

module.exports = vehicleRouter;
