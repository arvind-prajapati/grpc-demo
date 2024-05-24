const router = require("express").Router();
const userController = require("@controllers/user");
router.get("/", userController.users);
router.post("/", userController.createUser);


module.exports = router
