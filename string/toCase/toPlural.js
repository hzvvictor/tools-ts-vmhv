"use strict";
exports.__esModule = true;
var toPlural = function (string, toLowerCase) {
    var formated = string.trim();
    var reg = new RegExp("(s|S)$", 'gi');
    var isPlural = reg.test(string);
    formated += (isPlural) ? '' : 's';
    if (toLowerCase)
        return formated.toLowerCase();
    else
        return formated;
};
exports["default"] = toPlural;
