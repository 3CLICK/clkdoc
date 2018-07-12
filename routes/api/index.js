const router = require("express").Router();
const users = require("./usersAPI");
const login = require("./login");
const logout = require("./logout");
const appointments = require("./appointmentsAPI");

router.use("/users", users);
router.use("/logout", logout);
router.use("/login", login);
router.use("/appointments", appointments);

module.exports = router;
