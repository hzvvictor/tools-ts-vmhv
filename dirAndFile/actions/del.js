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
 * Elimina un archivo o un directorio.
 * @param path La ruta del archivo o directorio a eliminar.
 * @returns Un objeto con el mensaje y el error opcional.
 */
var del = function (path) {
    if (!(0, check_1["default"])(path)) {
        return (0, notFound_1["default"])(path);
    }
    (0, fs_1.rmSync)(path, { recursive: true });
    return (0, response_1["default"])({
        mensaje: "El archivo o directorio ".concat(path, " ha sido eliminado con \u00E9xito.")
    });
};
exports["default"] = del;
