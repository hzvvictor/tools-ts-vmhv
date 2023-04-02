"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var isCamelCase_1 = __importDefault(require("./isCamelCase"));
var isSnakeCase_1 = __importDefault(require("./isSnakeCase"));
var isCamelOrSnakeCase = function (string) {
    if ((0, isCamelCase_1["default"])(string)) {
        return { test: true, type: 'camel' };
    }
    if ((0, isSnakeCase_1["default"])(string)) {
        return { test: true, type: 'snake' };
    }
    return { test: false, type: null };
};
exports["default"] = isCamelOrSnakeCase;
