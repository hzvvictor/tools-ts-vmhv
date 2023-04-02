"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
var check_1 = __importDefault(require("../dirAndFile/permissions/check"));
/**
 * Lee el contenido de un directorio.
 * @param dirPath La ruta del directorio a leer.
 * @param recursive Si es verdadero, la función leerá el contenido del directorio de forma recursiva (opcional).
 * @returns Un objeto con los archivos encontrados en el directorio y un error opcional.
 */
var read = function (_a) {
    var dirPath = _a.dirPath, _b = _a.recursive, recursive = _b === void 0 ? false : _b;
    var response = {
        files: []
    };
    try {
        if (!(0, check_1["default"])(dirPath)) {
            response.error = new Error('El archivo o directorio no existe o no se posee permisos para su acceso.');
            return response;
        }
        var files = (0, fs_1.readdirSync)(dirPath);
        files.forEach(function (file) {
            var _a;
            var filePath = (0, path_1.join)(dirPath, file);
            var isDirectory = (0, fs_1.lstatSync)(filePath).isDirectory();
            if (isDirectory && recursive) {
                var recursiveFiles = read({ dirPath: filePath, recursive: recursive });
                (_a = response.files).push.apply(_a, recursiveFiles.files);
            }
            else {
                response.files.push(filePath);
            }
        });
    }
    catch (error) {
        response.error = error;
    }
    return response;
};
exports["default"] = read;
