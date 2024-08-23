const { Sequelize } = require("sequelize")
const sequelize = new Sequelize("world", "root", "123456", {
    host: "localhost",
    port: 3306,
    dialect: 'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    logging: true        //agar false kiya toh terminal k console m query nhi ayegi
})

const connectDB = async () => {

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


module.exports = { connectDB, sequelize }