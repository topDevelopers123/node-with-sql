const Router = require('express');
const { create, create2 } = require('../controller/user.controller');
const router = Router()

router.route("/create").post(create)
router.route("/create2").post(create2)


module.exports = router
