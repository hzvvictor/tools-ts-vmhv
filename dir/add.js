"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fs_1 = require("fs");
var inDirAndFile_1 = require("../inDirAndFile");
var check_1 = __importDefault(require("../inDirAndFile/permissions/check"));
/**
 * Crea un directorio en la ruta especificada.
 * @param {string} path - La ruta donde se creará el directorio.
 * @returns {Response} - Un objeto que contiene un mensaje de éxito o error.
 * Si el directorio se crea correctamente, el objeto tendrá un mensaje de éxito.
 * De lo contrario, si la ruta ya existe, el objeto tendrá un mensaje de error.
 * @typedef {Object} Response - Un objeto que contiene un mensaje y un error opcional.
 * @property {string} mensaje - El mensaje que describe el resultado de la operación.
*/
var add = function (path) {
    if ((0, check_1["default"])(path)) {
        return (0, inDirAndFile_1.response)({
            mensaje: 'Error',
            error: 'Ya existe un archivo o directorio con ese nombre.'
        });
    }
    (0, fs_1.mkdirSync)(path, { recursive: true });
    return (0, inDirAndFile_1.response)({
        mensaje: "El directorio se ha sido creado con exito en ".concat(path, ".")
    });
};
exports["default"] = add;
