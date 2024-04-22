const FoodModel = require("../models/food.model");

const deleteFood = async (req, res) => {
  try {
    const { foodId } = req.params;
    const deleteFood = await FoodModel.deleteOne({ _id: foodId });
    res.status(200).json({
      success: true,
      message: "Delete Food",
      data: deleteFood,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const readFoods = async (req, res) => {
  try {
    const foods = await FoodModel.find();
    res.status(200).json({
      success: true,
      message: "All Foods",
      data: foods,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const createFood = async (req, res) => {
  try {
    const { name, code, image, category, quantity, price } = req.body;
    if (!name || !code || !image || !category || !quantity || !price) {
      res.status(400).json({
        success: false,
        error: "All input filed is required.",
      });
    }
    const createData = new FoodModel({
      ...req.body,
    });
    await createData.save();
    res.status(201).json({
      success: true,
      message: "Create New Food.",
      data: createData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = { createFood, readFoods, deleteFood };
