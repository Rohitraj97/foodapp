const router = require("express").Router();

// const Product = require("../models/product.model");
// const Food=require("../models/food.model")
const addtocart= require("../models/addtocart.model")
const authenticate = require("../Middleware/Authentication")
router.post("", authenticate,async (req, res) => {
  try {
      req.body.userId=req.userID
    const  Addtocart = await  addtocart.create(req.body);
    return res.status(201).send(Addtocart);
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
});

// router.get("/food/:id", async (req, res) => {
//   try {
//     const  Food = await  food.findById(req.params.id ).lean().exec();
//     return res.status(200).send(Food);
//   } catch (err) {
//     return res.status(500).send({ err: err.message });
//   }
// });
router.get("",authenticate, async (req, res) => {
  try {
    const  Addtocart = await addtocart.find({userId:req.userID})
    .populate("foodId")
    .populate("userId")
    .lean().exec();
    return res.status(200).send(Addtocart);
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
});

//delte
router.delete("/:id", async (req, res) => {
    try {

      const  Addtocart = await addtocart.findByIdAndDelete(req.params.id)
      
      .lean().exec();
      return res.status(200).send(Addtocart);
    } catch (err) {
      return res.status(500).send({ err: err.message });
    }
  });

module.exports = router;