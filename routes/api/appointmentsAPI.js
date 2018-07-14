const router = require("express").Router();
const {appointmentController} = require("../../controllers");

// Matches with "/api/appointments"
router.route("/")
  .get(appointmentController.findAll)
  .post(appointmentController.create);

// Matches with "/api/appointments/:id"
router
  .route("/:id")
  .get(appointmentController.findById)
  .put(appointmentController.update)
  .delete(appointmentController.remove);

module.exports = router;
