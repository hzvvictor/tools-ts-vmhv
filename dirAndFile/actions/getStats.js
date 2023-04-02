"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
/**
 * Devuelve la información de los stats de un archivo o directorio.
 * @param path La ruta del archivo o directorio.
 * @returns Un objeto con la información de los stats.
 */
function getStats(path) {
    try {
        var stats = (0, fs_1.statSync)(path);
        var createdTime = new Date(stats.birthtimeMs);
        var modifiedTime = new Date(stats.mtimeMs);
        return {
            isFile: stats.isFile(),
            isDirectory: stats.isDirectory(),
            size: stats.size,
            createdTime: createdTime,
            modifiedTime: modifiedTime
        };
    }
    catch (error) {
        return null;
    }
}
exports["default"] = getStats;
