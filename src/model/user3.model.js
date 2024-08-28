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
        type:DataTypes.STRING,
        allowNull:false
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = { User3Model };
