const mongoose = require("mongoose")
// const bcrypt = require("bcrypt")
const addtocart = new mongoose.Schema({
     
    // food_name : {type : String, required : true},
    // price: {type:Number,required:true},
    // image : {type : String, required : true},
    // ratings : {type:Number,required:true},
    // type : {type : String, required : true},
    // restaurant :  {type : String, required : true},
     qty:{type:Number,required:true},
    foodId:{
        type :mongoose.Schema.Types.ObjectId,
        ref:"food",
        required:true
    },
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
const  Addtocart = mongoose.model("addtocart",  addtocart)

module.exports = Addtocart;





 