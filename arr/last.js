"use strict";
exports.__esModule = true;
/**
 * Obtiene el último elemento de un arreglo.
 * @template T
 * @param {T[]} arr - El arreglo del que se desea obtener el último elemento.
 * @returns {T} - El último elemento del arreglo.
*/
var last = function (arr) { return arr.slice(-1)[0]; };
exports["default"] = last;
