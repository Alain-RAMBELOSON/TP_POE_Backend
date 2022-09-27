import express from "express";
import * as connector from "../database/connector";
import Database from "../database/database";

const vehicleRouter = require("../routes/vehicle.routes");

export const app = express();

connector.connect(Database.MongoDB);

app.use("/api/vehicle", vehicleRouter);

app.use();
