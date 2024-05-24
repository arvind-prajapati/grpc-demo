const router = require("express").Router();
const postController = require("@controllers/post");
router.post("/", postController.createPost);
module.exports = router
