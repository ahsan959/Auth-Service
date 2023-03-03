const UserRepository = require("../respository/user-respository");

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
}

module.exports = UserService;
