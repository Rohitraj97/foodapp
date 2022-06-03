const mongoose = require("mongoose")
// const bcrypt = require("bcrypt")
const foodSchema = new mongoose.Schema({
    
    food_name : {type : String, required : true},
    price: {type:Number,required:true},
    image : {type : String, required : true},
    ratings : {type:Number,required:true},
    type : {type : String, required : true},
    restaurant :  {type : String, required : true},
    status :  {type : String, required : true},
  
},{
    timestamps : true,
    versionKey : false,
})
const Food = mongoose.model("food",  foodSchema)

module.exports = Food;





 