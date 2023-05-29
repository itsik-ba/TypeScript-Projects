import express from "express";
import * as dotenv from "dotenv";
dotenv.config()
import "./data/mydata";
import cookieParser from 'cookie-parser';
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.static("./public"));


import playerRoutes from "./API/players/playersRoutes";
app.use("/api/players", playerRoutes)

app.listen(4000, ()=>{
    console.log(`server listen at: 4000`)
})