const AppError = require("./error_handler");
const { StatusCodes } = require("http-status-codes");

class ClientErrors extends AppError {
  constructor(name, message, explanation, statusCode) {
    super(name, message, explanation, statusCode);
  }
}

module.exports = ClientErrors;
