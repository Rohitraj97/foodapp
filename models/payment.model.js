const mongoose = require("mongoose")
// const bcrypt = require("bcrypt")
const payment = new mongoose.Schema({
    Total_price:{type:Number,required:true},
    Card_Number:{type:Number,required:true},
    CVV:{type:Number,required:true},

    userId:{
         type :mongoose.Schema.Types.ObjectId,
         ref:"user",
         required:true
    }
},
{
    timestamps : true,
    versionKey : false,
})
const  Payment = mongoose.model("payment",  payment)

module.exports = Payment;





 