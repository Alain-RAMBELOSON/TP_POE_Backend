import express from "express";
import * as connector from "../database/connector";
import Database from "../database/database";

export const app = express();

connector.connect(Database.MongoDB);
