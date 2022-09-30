const express = require("express");
const connector = require("../database/connector");
const Database = require("../database/database");

const cors = require("cors");

const vehicleRouter = require("../routes/vehicle.routes");
const customerRouter = require("../routes/customer.routes");
const rentRouter = require("../routes/rent.routes");

const app = express();

connector.connect(Database.MongoDB);

app.use(cors());
app.use(express.json());

app.use("/api/vehicle", vehicleRouter);
app.use("/api/customer", customerRouter);
app.use("/api/rent", rentRouter);

module.exports = app;

export {};
