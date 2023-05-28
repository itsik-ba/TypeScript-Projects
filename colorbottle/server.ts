import express from "express";
import "./data/dist/mydata";
import * as dotenv from "dotenv";
dotenv.config()
import cookieParser from 'cookie-parser';
const app = express();
app.use(express.json());
app.use(cookieParser());




app.use(express.static("./public"));
app.use("/css",express.static("./style/dist"));


app.listen(3123, ()=>{
    console.log(`server listen at: 3123`)
})