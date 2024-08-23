const { sequelize } = require("../DB/DbConnect")
const { DataTypes } = require("sequelize")

const UserDetailModel = sequelize.define("UserDetail", {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true,
    timestamps: true
})

module.exports = { UserDetailModel }