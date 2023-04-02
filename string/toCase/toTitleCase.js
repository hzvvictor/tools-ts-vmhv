"use strict";
exports.__esModule = true;
var toTitleCase = function (string) {
    return string.replace(/[a-zA-Z0-9]+(?![^a-zA-Z0-9]$(?=[^a-zA-Z0-9]))/g, function (match) { return match.charAt(0).toUpperCase() + match.slice(1).toLowerCase(); });
};
exports["default"] = toTitleCase;
