const express = require("express");
const connector = require("../database/connector");
const Database = require("../database/database");
const vehicleRouter = require("../routes/vehicle.routes");
const clientRouter = require("../routes/client.routes");

export const app = express();

connector.connect(Database.MongoDB);

app.use(express.json());

app.use("/api/vehicle", vehicleRouter);
app.use("/api/client", clientRouter);

module.exports = app;
