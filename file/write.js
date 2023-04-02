"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var check_1 = __importDefault(require("../inDirAndFile/permissions/check"));
var response_1 = __importDefault(require("../inDirAndFile/response/response"));
var notFound_1 = __importDefault(require("../inDirAndFile/notFound"));
var fs_1 = require("fs");
/**
 * Crea, añade o sobreescribe contenido de un archivo.
 * @param path La ruta del archivo.
 * @param content El contenido a escribir en el archivo.
 * @param option La opción de escritura (create, append o overwrite).
 * @returns Un objeto con el mensaje y el error opcional.
 */
var write = function (path, content, option) {
    var exist = (0, check_1["default"])(path);
    if (!exist && option !== 'create') {
        return (0, notFound_1["default"])(path);
    }
    switch (option) {
        case 'create':
            if (exist) {
                return (0, response_1["default"])({
                    mensaje: 'Error',
                    error: "El archivo ".concat(path, " ya existe.")
                });
            }
            (0, fs_1.writeFileSync)(path, content);
            return (0, response_1["default"])({
                mensaje: "El archivo ".concat(path, " ha sido creado con \u00E9xito.")
            });
        case 'append':
            (0, fs_1.appendFileSync)(path, content);
            return (0, response_1["default"])({
                mensaje: "El contenido ha sido a\u00F1adido al archivo ".concat(path, " con \u00E9xito.")
            });
        case 'overwrite':
            (0, fs_1.writeFileSync)(path, content, { flag: 'w' });
            return (0, response_1["default"])({
                mensaje: "El archivo ".concat(path, " ha sido sobrescrito con \u00E9xito.")
            });
        default:
            return (0, response_1["default"])({
                mensaje: 'Error',
                error: "La opci\u00F3n de escritura ".concat(option, " no es v\u00E1lida.")
            });
    }
};
exports["default"] = write;
