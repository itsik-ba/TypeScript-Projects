"use strict";
exports.__esModule = true;
var express_1 = require("express");
var dotenv = require("dotenv");
dotenv.config();
require("./data/mydata");
var cookie_parser_1 = require("cookie-parser");
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use(cookie_parser_1["default"]());
app.use(express_1["default"].static("./public"));
var playersRoutes_1 = require("./API/players/playersRoutes");
app.use("/api/players", playersRoutes_1["default"]);
app.listen(4000, function () {
    console.log("server listen at: 4000");
});
