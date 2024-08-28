const express = require("express");
const MainRoute = require("./router/index.router");
const { sequelize } = require("./DB/DbConnect");
const app = express();
require("./association"); //jb start hoga and line by line read krega toh association bna k rakh lega

async function databaseSync() {
  await sequelize.sync({ force: false });
}
databaseSync();

app.use(express.urlencoded({ limit: "1mb", extended: true }));
app.use(express.json({ limit: "1mb" }));
app.use("/", MainRoute);

module.exports = { app };
