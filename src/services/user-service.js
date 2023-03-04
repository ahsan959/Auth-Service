const UserRepository = require("../respository/user-respository");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Jwt_KEY } = require("../config/server");
class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      ole.log("Something went wrong in the service layer");
      throw error;
    }
  }

  createToken(user) {
    try {
      const result = jwt.sign(user, Jwt_KEY, { expiresIn: "1h" });
      return result;
    } catch (error) {
      console.log("Something went wront in token creation");
      throw { error };
    }
  }

  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (error) {
      console.log("Something went wrong in token validation", error);
      throw error;
    }
  }

  checkPassword(userInputPlainPassword, encryptedPassword) {
    try {
      return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
    } catch (error) {
      console.log("Something went wrong in password comparison");
      throw error;
    }
  }
}

module.exports = UserService;
