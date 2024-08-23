const { DataTypes } = require("sequelize")
const { sequelize } = require("../DB/DbConnect")

const UserModel = sequelize.define("User", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "sharma"
    }
}, {
    freezeTableName: true,  //model name === db table name same
    // tableName:"newName"
    // timestamps:false         //by default it is true


})

//other options
// {
//     timestamps: true,
//     createdAt: false,
//     // updatedAt:true,
//     updatedAt: "updated on"

// }

// console.log(UserModel === sequelize._model.UserModel)

module.exports = { UserModel }

