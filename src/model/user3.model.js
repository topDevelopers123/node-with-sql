const { sequelize } = require("../DB/DbConnect");
const { DataTypes } = require("sequelize");

const User3Model = sequelize.define(
  "User3",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true, // The field is required, meaning it cannot be an empty string
      },
    },
  },
  {
    freezeTableName: true,
    paranoid: true,
    deletedAt: "destroyTime",
  }
);

module.exports = { User3Model };
