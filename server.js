const express = require("express");
require('dotenv').config();
const { default: mongoose } = require("mongoose");
const todoRouter = require("./routes/todo.route");
const app = express();


app.use(express.json())
app.use("/v1/api/todos", todoRouter)

mongoose.connect(`mongodb+srv://${process.env.USERNAME2}:${process.env.PASSWORD}@nodecruddb.owogp.mongodb.net/TODO?retryWrites=true&w=majority&appName=nodeCrudDB`).then(()=>{
    console.log("DB connected successfully!")
}).catch((err)=>{
    console.log("DB connection failed!", err)
})

app.listen(3000, ()=>{
    console.log(`app is running on http://localhost:3000`)
})

app.get("/", async(req, res)=>{
    res.send("Hey there!")
})