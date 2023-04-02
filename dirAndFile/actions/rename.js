"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fs_1 = require("fs");
var check_1 = __importDefault(require("../permissions/check"));
var notFound_1 = __importDefault(require("../notFound"));
var response_1 = __importDefault(require("../response/response"));
/**
 * Renombra un archivo o un directorio.
 * @param pathCurrent La ruta del archivo o directorio a renombrar.
 * @param newName El nuevo nombre que se le dará al archivo o directorio.
 * @returns Un objeto con el mensaje y el error opcional.
 */
var rename = function (pathCurrent, newName) {
    if (!(0, check_1["default"])(pathCurrent)) {
        return (0, notFound_1["default"])(pathCurrent);
    }
    var newPath = "".concat(pathCurrent.split('/').slice(0, -1).join('/'), "/").concat(newName);
    (0, fs_1.renameSync)(pathCurrent, newPath);
    return (0, response_1["default"])({
        mensaje: "El archivo o directorio ha sido renombrado a ".concat(newName, " con \u00E9xito.")
    });
};
exports["default"] = rename;
