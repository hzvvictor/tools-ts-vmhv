"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var capitalize_1 = __importDefault(require("./capitalize"));
var toSpaceTitleCaseFromSnake = function (string) {
    var words = string.split('_');
    return words.map(function (word) { return (0, capitalize_1["default"])(word); }).join(' ');
};
exports["default"] = toSpaceTitleCaseFromSnake;
