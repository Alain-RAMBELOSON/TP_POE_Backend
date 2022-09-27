const vehicleRouter = require("express").Router();
const vehicleController = require("../controllers/vehicle.controller");

vehicleRouter.post("/", vehicleController.createVehicle);
vehicleRouter.get("/", vehicleController.getVehicles);

module.exports = vehicleRouter;
