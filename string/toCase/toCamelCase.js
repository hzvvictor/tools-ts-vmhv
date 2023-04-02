"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var capitalize_1 = __importDefault(require("./capitalize"));
var toCamelCase = function (string) {
    var _a = string.split(/[^a-zA-Z]/), first = _a[0], rest = _a.slice(1);
    return __spreadArray([first.toLowerCase()], rest.map(function (s) { return (0, capitalize_1["default"])(s); }), true).join('');
};
exports["default"] = toCamelCase;
