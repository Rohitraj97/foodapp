const router = require("express").Router();
// const addtocart= require("../models/addtocart.model")
// const Product = require("../models/product.model");
// const Food=require("../models/food.model")
 const payment= require("../models/payment.model")
const authenticate = require("../Middleware/Authentication");
 
router.post("", authenticate,async (req, res) => {
  try {
      req.body.userId=req.userID
    const  Payment = await  payment.create(req.body);
    if(payment)
    {
      // const user= await addtocart.findAndDelete({userId:req.userID})
      return res.status(201).send({Payment:Payment,
        status:"payment successful",
       });
    }
    return res.status(500).send({ status: "payment not successful" });

   
    
 
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
});



module.exports = router;