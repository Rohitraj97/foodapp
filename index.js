const express = require("express");
 const cors = require("cors");
const connectDB = require("./configs/db");
const addtocartcontroller= require("./controllers/addtocart.controllers")
const foodcontroller= require("./controllers/food.controllers")
const user= require("./controllers/user.controller")
const paymentcontroller= require("./controllers/payment.controller")
const {register,login} = require("./controllers/user.controller")
const app = express();

app.use(express.json());
 app.use(cors());

 
// app.post("/register", register); //for creating new user
// app.post("/login", login); // for login into the website

// app.use("/proudctService", productServiceController);

// app.use("/user", user); //to get the user details
app.use("/food", foodcontroller);
app.use("/addtocart",addtocartcontroller)

app.post("/register", register); //for creating new user

app.post("/login", login); // for login into the website

app.use("/payment",paymentcontroller)

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}

connectDB();
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});