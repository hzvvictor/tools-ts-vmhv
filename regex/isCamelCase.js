"use strict";
exports.__esModule = true;
var containsUnderscore = function (string) { return (/\_[a-z]/gi.test(string)); };
var IsCamel = function (string) { return (/(?<!^)(?<!_)([A-Z][a-z])/g.test(string)); };
var isCamelCase = function (string) { return (!containsUnderscore(string)
    && IsCamel(string)); };
// console.log(isCamelCase('ProductsFromUsers'))
exports["default"] = isCamelCase;
