const { sequelize } = require("../DB/DbConnect")
const { DataTypes } = require("sequelize")

const User1Model = sequelize.define("User1", {
    name: DataTypes.TEXT,
    favoriteColor: {
        type: DataTypes.TEXT,
        defaultValue: "green"
    },
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER


}, {
    freezeTableName: true
})

module.exports = { User1Model }