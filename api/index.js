import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("MongoDB Connected!");
}).catch((err)=>{
    console.log("Error:" + err);
});


const app = express();

app.listen(3000,()=>{
    console.log("server is running at port 3000!");
});