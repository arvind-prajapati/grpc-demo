const express = require("express");
const router = express.Router();
const user = require("@routes/user");
const post = require("@routes/post")
router.use("/user", user);
router.use("/post", post);
module.exports = router;
