const express = require("express");
const { port } = require("./config/server");
const apiRoutes = require("./routes/index");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);
const startServer = () => {
  app.listen(port, () => {
    console.log(`Server started on port:${port}`);
  });
};

startServer();
