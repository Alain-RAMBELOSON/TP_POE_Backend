import httpProtocol from "http";
import { app } from "../app/app";
import { PORT } from "./config";

const http = httpProtocol.createServer(app);

http.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
