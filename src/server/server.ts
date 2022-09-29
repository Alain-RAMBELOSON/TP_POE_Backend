const config = require("../config");
const httpProtocol = require("http");
const app = require("../app/app");

const http = httpProtocol.createServer(app);
const port = config.server.port[0].number;

http.listen(port, () => {
  console.log(`Running on port ${port}`);
});
