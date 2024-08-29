const { sequelize } = require("../DB/DbConnect");
const { DataTypes } = require("sequelize");
const { User4Model } = require("./user4.model");

const contactModel = sequelize.define(
  "contact",
  {
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User4Model,
        key: "id",
      },
    },
  },
  { freezeTableName: true, timestamps: true }
);

module.exports = { contactModel };
