const { sequelize } = require("../DB/DbConnect");
const { DataTypes } = require("sequelize");

const PostModel = sequelize.define(
  "post",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: { type: DataTypes.STRING, allowNull: true },
    // userId:{     //it is not neccessery to maintain the userId if we are using association

    // }
  },
  { freezeTableName: true }
);

module.exports = { PostModel };
