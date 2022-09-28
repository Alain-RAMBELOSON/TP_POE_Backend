const express = require("express");
const connector = require("../database/connector");
const Database = require("../database/database");
const vehicleRouter = require("../routes/vehicle.routes");
const clientRouter = require("../routes/client.routes");
const rentRouter = require("../routes/rent.routes");

const app = express();

connector.connect(Database.MongoDB);

app.use(express.json());

app.use("/api/vehicle", vehicleRouter);
app.use("/api/client", clientRouter);
app.use("/api/rent", rentRouter);

module.exports = app;

export { }
