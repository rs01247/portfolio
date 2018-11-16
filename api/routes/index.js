const express = require("express");
const router = express.Router();
const emailRoutes = require("./email.routes");

router.use("/email", emailRoutes);

module.exports = router;