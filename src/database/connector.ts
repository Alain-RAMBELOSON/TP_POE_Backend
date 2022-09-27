const mongoose = require("mongoose");
const Database = require("./database");
const config = require("./config");

const success = (database: String) => {
  console.log(`Connected to ${database}`);
};

const error = (database: String, error: any) => {
  console.log(`Error connecting to ${database}`, error);
};

export const connect = (database: String) => {
  if (database === Database.MongoDB) {
    mongoose
      .connect(config.MONGODB_SERVER_URL, {
      })
      .then(() => {
        success(Database.MongoDB);
      })
      .catch((err: any) => {
        error(Database.MongoDB, err);
      });
  }
};
