"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var playersCtrl_1 = require("./playersCtrl");
router
    .post("/register", playersCtrl_1.addNewPlayer)
    .post("/login", playersCtrl_1.playerLogin);
exports["default"] = router;
