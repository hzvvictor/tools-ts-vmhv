"use strict";
exports.__esModule = true;
var isEmpty = function (array) {
    var isArray = Array.isArray(array);
    if (!isArray)
        return false;
    var hasValues = (array.length == 0);
    return hasValues;
};
exports["default"] = isEmpty;
