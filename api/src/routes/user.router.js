const express = require("express");
const UserController = require("../controllers/user.controller");
const TokenMiddleware = require("../middlewares/token.middleware");
const router = express.Router();

router.put("/account", TokenMiddleware, UserController.updateUser);

module.exports = router;
