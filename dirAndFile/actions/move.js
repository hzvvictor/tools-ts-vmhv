"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var check_1 = __importDefault(require("../permissions/check"));
var notFound_1 = __importDefault(require("../notFound"));
var response_1 = __importDefault(require("../response/response"));
var fs_1 = require("fs");
/**
 * Mueve un archivo o un directorio a una nueva ubicación.
 * @param pathCurrent La ruta del archivo o directorio a mover.
 * @param newPath La nueva ubicación del archivo o directorio.
 * @returns Un objeto con el mensaje y el error opcional.
 */
var move = function (pathCurrent, newPath) {
    if (!(0, check_1["default"])(pathCurrent)) {
        return (0, notFound_1["default"])(pathCurrent);
    }
    if ((0, check_1["default"])(newPath)) {
        return (0, response_1["default"])({
            mensaje: "Ya existe ".concat(newPath, " "),
            error: 'Ya existe un archivo o directorio con ese nombre.'
        });
    }
    (0, fs_1.renameSync)(pathCurrent, newPath);
    return (0, response_1["default"])({
        mensaje: "El archivo o directorio ha sido movido a ".concat(newPath, " con \u00E9xito.")
    });
};
exports["default"] = move;
