const express = require("express");
const app = express();

 
require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json()); 

const blog = require("./routes/blog");

app.use("/api/v1",blog);

const dbconnect = require("./config/database");
 
dbconnect();
app.listen(PORT, ()=> {
    console.log(`server started at ${PORT} successfully`);
})
  
app.get("/",(req,res)=>{
    res.send("this is homepage");
})