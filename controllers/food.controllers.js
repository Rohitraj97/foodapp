const router = require("express").Router();

// const Product = require("../models/product.model");
const food=require("../models/food.model")

router.post("", async (req, res) => {
  try {
    const Foods = await food.create(req.body);
    return res.status(201).send(Foods);
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const  Food = await  food.findById(req.params.id ).lean().exec();
    return res.status(200).send(Food);
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
});
router.get("", async (req, res) => {
  try {
    const  Food = await food.find().lean().exec();
    return res.status(200).send(Food);
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
});

module.exports = router;