"use strict";
exports.__esModule = true;
var express_1 = require("express");
require("./data/dist/mydata");
var dotenv = require("dotenv");
dotenv.config();
var cookie_parser_1 = require("cookie-parser");
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use(cookie_parser_1["default"]());
app.use(express_1["default"].static("./public"));
app.use("/css", express_1["default"].static("./style/dist"));
app.listen(3123, function () {
    console.log("server listen at: 3123");
});
