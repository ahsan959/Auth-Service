"use strict";
const { Model } = require("sequelize");

const { SALT } = require("../config/server");

const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Role, {
        through: "User_Roles",
      });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 300],
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  // user this is the same user which we are actually trying to create
  User.beforeCreate((user) => {
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
  });
  return User;
};
