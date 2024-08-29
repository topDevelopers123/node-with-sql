const Router = require("express");
const { create, create2 } = require("../controller/user.controller");
const { create3, get } = require("../controller/user2.controller");
const { userValidation } = require("../validation/validate");
const {
  create4,
  createProfile,
  getUser,
  getUserPost,
  getUserPostWithLoading,
} = require("../controller/user3.controller");
const { createPost, getPost } = require("../controller/post.controller");
const { unmanagedContactTransaction, managedTransaction } = require("../controller/contact.controller");
const router = Router();

router.route("/create").post(create);
router.route("/create2").post(create2);
router.route("/create3").post(userValidation, create3);
router.route("/create4").post(create4);
router.route("/createProfile").post(createProfile);

router.route("/getAll").get(get);
router.route("/getAll2").get(getUser);

router.route("/createPost").post(createPost);
router.route("/getPost").get(getPost);
router.route("/getUserPost").get(getUserPost);
router.route("/getUserPostWithLoading").get(getUserPostWithLoading);

//transaction
router.route("/unmanageTransaction").get(unmanagedContactTransaction);
router.route("/managedTransaction").get(managedTransaction);


module.exports = router;
