const {
  createFood,
  readFoods,
  deleteFood,
} = require("../controllers/food.controller");

const router = require("express").Router();

router.delete("/delete/:foodId", deleteFood);
router.post("/", createFood);
router.get("/", readFoods);

module.exports = router;
