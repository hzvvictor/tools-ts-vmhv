"use strict";
exports.__esModule = true;
exports["default"] = void 0;
var snakeToCamelCase = function (string) { return (string
    .replace(/_[a-zA-Z]/g, function (letter) { return (letter.slice(1).toUpperCase()); })); };
exports["default"] = snakeToCamelCase;
