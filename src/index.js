const express = require("express");
const { port } = require("./config/server");
const apiRoutes = require("./routes/index");
const bodyParser = require("body-parser");

const db = require("./models/index");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);
const startServer = () => {
  app.listen(port, () => {
    console.log(`Server started on port:${port}`);

    if (process.env.DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }
  });
};

startServer();
