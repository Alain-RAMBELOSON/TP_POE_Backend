const httpProtocol = require("http");
const app = require("../app/app");
const config = require("./config");

const http = httpProtocol.createServer(app);

http.listen(config.PORT, () => {
  console.log(`Running on port ${config.PORT}`);
});
