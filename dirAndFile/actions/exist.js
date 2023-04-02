"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var exist = function (path) { return ((0, fs_1.existsSync)(path)); };
exports["default"] = exist;
