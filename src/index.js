const { connectDB } = require("./DB/DbConnect")
const { app } = require("./app")


connectDB().then(() => {
    app.listen(4001, () => console.log("Server is running at 4001 PORT"))
}).catch(() => console.log("DB connection failed"))



