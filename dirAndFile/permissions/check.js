"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
/**
 * Verifica si un archivo o directorio existe y tiene los permisos necesarios.
 * @param path La ruta del archivo o directorio a verificar.
 * @param mode El modo de acceso que se desea comprobar (por defecto es F_OK).
 * @returns Verdadero si el archivo o directorio existe y tiene los permisos necesarios, falso en caso contrario.
 */
var check = function (path, mode) {
    if (mode === void 0) { mode = fs_1.constants.F_OK; }
    try {
        (0, fs_1.accessSync)(path, mode);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports["default"] = check;
