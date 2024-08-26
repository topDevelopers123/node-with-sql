const Router = require('express');
const { create, create2 } = require('../controller/user.controller');
const { create3, get } = require('../controller/user2.controller');
const { userValidation } = require('../validation/validate');
const router = Router()

router.route("/create").post(create)
router.route("/create2").post(create2)
router.route("/create3").post(userValidation, create3)
router.route("/getAll").get(get)




module.exports = router
