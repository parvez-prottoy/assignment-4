const router = require("express").Router();

const baseRoute = require("./base.route");
const foodRoute = require("./food.route");

// router.use("/", baseRoute);
router.use("/api/v1/foods", foodRoute);

module.exports = router;
