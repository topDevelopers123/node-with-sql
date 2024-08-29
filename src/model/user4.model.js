const { sequelize } = require("../DB/DbConnect");
const { DataTypes } = require("sequelize");
const User4Model = sequelize.define(
  "user4",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: true }
);

module.exports = { User4Model };
