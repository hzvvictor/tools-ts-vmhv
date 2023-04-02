"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports["default"] = void 0;
var isCapitalized_1 = __importDefault(require("../../inRegex/isCapitalized"));
var camelToSnakeCase = function (str) {
    var capitalized = (0, isCapitalized_1["default"])(str);
    return (
    //? stringTest => string_test 
    str
        .replace(/[A-Z]/g, function (letter) { return ("_".concat(letter.toLowerCase())); })
        .replace(/(^_)/, '')
        .replace(/(^[a-z])/i, function (letter) { return (capitalized ? letter.toUpperCase() : letter); }));
};
exports["default"] = camelToSnakeCase;
