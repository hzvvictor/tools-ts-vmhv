"use strict";
exports.__esModule = true;
var toSingular = function (string, toLowerCase) {
    var reg = new RegExp("(s|S)$", 'gi');
    var formated = string.trim().replace(reg, '');
    if (toLowerCase)
        return formated.toLowerCase();
    else
        return formated;
};
exports["default"] = toSingular;
