import dotenv from "dotenv";

dotenv.config({ path: "./src/.env" });

const PORT = process.env.PORT;

export { PORT };
