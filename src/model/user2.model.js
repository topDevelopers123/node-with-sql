const { sequelize } = require("../DB/DbConnect")
const { DataTypes } = require("sequelize")

const User2Model = sequelize.define("User2", {
    firstname: {
        type: DataTypes.STRING,
        get() {
            const rawValue = this.getDataValue('username');
            return rawValue ? "MR . " + rawValue.toUpperCase() : null;
            // return rawValue ? rawValue.toUpperCase() : null;

        },
    },
    lastName: DataTypes.STRING,
    fullname: {
        type: DataTypes.VIRTUAL,
        get() {
            return `${this.firstname} ${this.lastName}`
        },
        set() {
            throw new Error("Do not try to set fullname value!!")
        }
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password:
    {
        type: DataTypes.STRING(),
        // validate: {
        //     is: /^[0-9a-f]{64}$/i,
        // },

        // set(value) {
        //     // Storing passwords in plaintext in the database is terrible.
        //     // Hashing the value with an appropriate cryptographic hash function is better.
        //     this.setDataValue('password', value + 1);
        // },
    },
    age: DataTypes.INTEGER,
    mobile: DataTypes.INTEGER,
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }

}, {
    freezeTableName: true
})

module.exports = { User2Model }