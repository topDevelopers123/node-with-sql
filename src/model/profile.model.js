const { sequelize } = require("../DB/DbConnect");
const { DataTypes } = require("sequelize");

const profileModel = sequelize.define(
  "profile",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Bio: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = { profileModel };
