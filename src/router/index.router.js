const { Router } = require("express");
const  userRoute  = require("./user.route")
const router = Router();

router.use("/user",userRoute)

module.exports = router
