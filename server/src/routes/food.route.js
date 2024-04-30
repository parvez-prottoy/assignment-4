const {
  createFood,
  readFoods,
  deleteFood,
  updateFood,
  getFoodById,
} = require("../controllers/food.controller");

const router = require("express").Router();

router.patch("/update/:foodId", updateFood);
router.delete("/delete/:foodId", deleteFood);
router.post("/", createFood);
router.get("/food/:foodId", getFoodById);
router.get("/get", readFoods);

module.exports = router;
