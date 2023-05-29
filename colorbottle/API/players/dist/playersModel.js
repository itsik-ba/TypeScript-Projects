"use strict";
exports.__esModule = true;
exports.PlayerSchema = void 0;
var mongoose_1 = require("mongoose");
exports.PlayerSchema = new mongoose_1.Schema({
    name: { require: [true, "user must enter"], type: String },
    password: { require: true, type: String },
    email: { require: true, type: String, unique: true }
});
var UserModel = mongoose_1["default"].model("bottle", exports.PlayerSchema);
exports["default"] = UserModel;
