const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
dotenv.config();

module.exports = {
  port: process.env.port,
  SALT: bcrypt.genSaltSync(10),
};
