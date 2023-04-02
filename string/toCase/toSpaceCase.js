"use strict";
exports.__esModule = true;
var toSpaceCase = function (string) {
    return string.replace(/([A-Z]?[a-z]+)[_-]?(?=[A-Z])/g, '$1 ');
};
exports["default"] = toSpaceCase;
