const {
  createFood,
  readFoods,
  deleteFood,
  updateFood,
} = require("../controllers/food.controller");

const router = require("express").Router();

router.patch("/update/:foodId", updateFood);
router.delete("/delete/:foodId", deleteFood);
router.post("/", createFood);
router.get("/", readFoods);

module.exports = router;
