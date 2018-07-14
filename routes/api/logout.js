const router = require('express').Router();
const logoutController = require("../../controllers/logoutController");

router.route("/").post(logoutController.logOut);

module.exports = router;