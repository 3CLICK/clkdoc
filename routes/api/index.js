const router = require("express").Router();
const users = require("./usersAPI");
// const clients = require("./clientsAPI");
// const doctors = require("./doctorsAPI");
// const appointments = require("./appointmentsAPI");

router.use("/users", users);
// router.use("/clients", clients);
// router.use("/doctors", doctors);
// router.use("/appointments", appointments);

module.exports = router;
