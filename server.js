<<<<<<< HEAD
require("dotenv").config();
const {user_Schema}=require("./schemas/userSchema")
const PORT = process.env.PORT || 8000;
const express = require("express");
const { connectToDb, getDb, createNewCollection } = require('./mongoUtil');

(async () => {
  //Connection to the Shop Database
  await connectToDb("ShopItems",(err)=>{
    if(!err){console.log("Connected to the Shop DB")}
    else {console.log(err.message)}
    shopDb=getDb()
  })
  //Connection to the User Database
  await connectToDb("Cluster0",(err) => {
    if (!err) {
      app.listen(PORT, (req, res) => {
        console.log(`Server listening on ${PORT}`);
      });
      db = getDb()
    }
  });
  //creates new collection if not present in the Database
  // createNewCollection("users",user_Schema)
}
)()

//middleware
const app = express();

app.use(express.json()); //parses json coming in the request body

//routes
const signInRoute = require("./routes/signin")
const signUpRoute = require("./routes/signup")
const usersRoute = require("./routes/users");
const userCartRoute=require("./routes/userCart")
const shopRoute=require("./routes/shop")
app.use("/signin", signInRoute);
app.use("/signup", signUpRoute);
app.use("/users", usersRoute)
app.use("/userCart",userCartRoute)
app.use("/shop",shopRoute)

=======
require("dotenv").config();
const {user_Schema}=require("./schemas/userSchema")
const PORT = process.env.PORT || 8000;
const express = require("express");
const { connectToDb, getDb, createNewCollection } = require('./mongoUtil');

(async () => {
  //Connection to the Shop Database
  await connectToDb("ShopItems",(err)=>{
    if(!err){console.log("Connected to the Shop DB")}
    else {console.log(err.message)}
    shopDb=getDb()
  })
  //Connection to the User Database
  await connectToDb("Cluster0",(err) => {
    if (!err) {
      app.listen(PORT, (req, res) => {
        console.log(`Server listening on ${PORT}`);
      });
      db = getDb()
    }
  });
  //creates new collection if not present in the Database
  // createNewCollection("users",user_Schema)
}
)()

//middleware
const app = express();

app.use(express.json()); //parses json coming in the request body

//routes
const signInRoute = require("./routes/signin")
const signUpRoute = require("./routes/signup")
const usersRoute = require("./routes/users");
const userCartRoute=require("./routes/userCart")
const shopRoute=require("./routes/shop")
app.use("/signin", signInRoute);
app.use("/signup", signUpRoute);
app.use("/users", usersRoute)
app.use("/userCart",userCartRoute)
app.use("/shop",shopRoute)

>>>>>>> 674f7ce0b70e3a10da00eafee56ac8fe6b795126
