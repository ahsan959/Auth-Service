const express = require("express");
const { port } = require("./config/server");
const apiRoutes = require("./routes/index");
const bodyParser = require("body-parser");

const db = require("./models/index");
const { User, Role } = require("./models/index");

const app = express();

const startServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(port, async () => {
    console.log(`Server started on port:${port}`);

    if (process.env.DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }

    const u1 = await User.findByPk(4);
    const r1 = await Role.findByPk(2);
    // u1.addRole(r1);

    // getRoles
    const response = await r1.getUsers();
    console.log(response);
  });
};

startServer();
