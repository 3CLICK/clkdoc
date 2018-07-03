const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const {userController} = require('./../controllers')

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) => {
  // res.sendFile(path.join(__dirname, "../client/build/index.html"));
  userController.findAll( (data) => {
    res.json(data);
  });
});

module.exports = router;
