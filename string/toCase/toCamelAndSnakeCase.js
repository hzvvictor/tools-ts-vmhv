"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var toCamelCase_1 = __importDefault(require("./toCamelCase"));
var toSnakeCase_1 = __importDefault(require("./toSnakeCase"));
var toCamelAndSnakeCase = function (string) {
    var camel = (0, toCamelCase_1["default"])(string);
    var snake = (0, toSnakeCase_1["default"])(camel);
    return { camel: camel, snake: snake };
};
exports["default"] = toCamelAndSnakeCase;
