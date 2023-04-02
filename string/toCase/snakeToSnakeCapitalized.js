"use strict";
exports.__esModule = true;
exports["default"] = void 0;
var snakeToSnakeCapitalized = function (string, isFirstCapitalized) {
    if (isFirstCapitalized === void 0) { isFirstCapitalized = false; }
    var snakeCaseRegex = /_[a-z]/g;
    var firstCapitalizedRegex = /(_[a-z]|^[a-z])/g;
    var regexToUse = isFirstCapitalized ? firstCapitalizedRegex : snakeCaseRegex;
    return string.replace(regexToUse, function (match) { return match.toUpperCase(); });
};
exports["default"] = snakeToSnakeCapitalized;
