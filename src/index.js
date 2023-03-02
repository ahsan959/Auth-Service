const express = require("express");
const { port } = require("./config/server");

const app = express();

const startServer = () => {
  app.listen(port, () => {
    console.log(`Server started on port:${port}`);
  });
};

startServer();
