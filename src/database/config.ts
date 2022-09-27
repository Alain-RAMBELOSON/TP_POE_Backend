import dotenv from "dotenv";

dotenv.config({ path: "./src/.env" });

module.exports.MONGODB_SERVER_URL = process.env.MONGODB_SERVER_URL;
