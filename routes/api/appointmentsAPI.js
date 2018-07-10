const router = require("express").Router();
const {appointmentController} = require("../../controllers");

// Matches with "/api/books"
router.route("/")
  .get(appointmentController.findAll)
  .post(appointmentController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(appointmentController.findById)
  .put(appointmentController.update)
  .delete(appointmentController.remove);

module.exports = router;
