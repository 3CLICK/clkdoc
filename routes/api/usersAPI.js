const router = require("express").Router();
const {userController} = require("../../controllers");

router.route("/")
  .get(userController.findAll)
  .post(userController.create);

router.route("/:id")
  .get(userController.findById)

router.route("/self")
  .get(userController.findSelf)

router.route("/:id")
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;