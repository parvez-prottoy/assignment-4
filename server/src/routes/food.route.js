const { createFood, readFoods } = require("../controllers/food.controller");

const router = require("express").Router();

router.post("/", createFood);
router.get("/", readFoods);

module.exports = router;
