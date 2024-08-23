const express = require('express');
const MainRoute = require("./router/index.router");
const { sequelize } = require('./DB/DbConnect');
const app = express()



async function databaseSync() {
    await sequelize.sync({ alter: true });
}
databaseSync()


app.use(express.urlencoded({limit:"1mb",extended:true}))
app.use(express.json({limit:"1mb"}))
app.use("/", MainRoute)




module.exports = { app }