const router = require("express").Router();
const {userController} = require("../../controllers");

router.route("/")
  .get(userController.findAll)
  .post(userController.create);

router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

router
  .route("/getSessionId")
  .get(userController.getSessionId)

module.exports = router;