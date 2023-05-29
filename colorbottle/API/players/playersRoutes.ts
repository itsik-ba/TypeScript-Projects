import express from "express";
const router = express.Router();

import {
addNewPlayer,
// playerLogin,


} from "./playersCtrl";




router

.post("/register", addNewPlayer)
// .post("/login", playerLogin)





export default router;