const express = require("express");
const path = require("path");
const { createServer } = require("http");
const compression = require("compression");

const PORT = process.env.PORT || 4200;

(() => {
  // create express app
  const app = express();
  app.use(compression());

  app.use(express.static(path.join(__dirname, "build")));

  app.get(["/", "/*"], function(req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });

  // launch server
  const httpServer = createServer(app);
  httpServer.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}`);
  });
})();
