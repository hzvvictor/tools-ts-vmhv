"use strict";
exports.__esModule = true;
/**
 * Verifica si un objeto está vacío
 * @param {Record<string, any>} obj - Objeto a verificar si está vacío
 * @returns {boolean} - Verdadero si el objeto está vacío, falso si no lo está
 */
var isEmpty = function (obj) { return (Object.keys(obj).length === 0); };
exports["default"] = isEmpty;
