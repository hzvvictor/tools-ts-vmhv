"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var fs_1 = require("fs");
var actions_1 = require("../inDirAndFile/actions");
var optDefault = {
    encoding: "utf8"
};
var readFile = function (path, options) {
    if (options === void 0) { options = optDefault; }
    var exist = (0, actions_1.exist)(path);
    if (!exist)
        return undefined;
    return (0, fs_1.readFileSync)(path, __assign(__assign({}, options), { encoding: options.encoding // Conversión explícita
     }));
};
exports["default"] = readFile;
