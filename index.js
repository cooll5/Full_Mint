const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

mongoose.connect("mongodb+srv://test:123qwe@cluster0.yx64vnj.mongodb.net/?retryWrites=true&w=majority"); 

app.use(bodyParser.json());
app.use("/api", require("./api,js")); //D:\Information\University\TSPP\back_end\api,js

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

app.listen(4000, ()=>{
    console.log("server is listening on port 4000");
})