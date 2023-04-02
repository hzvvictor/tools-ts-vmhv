"use strict";
exports.__esModule = true;
/**
 * Elimina elementos duplicados de un array y devuelve un nuevo array sin repeticiones.
 * @param arr - El array de entrada.
 * @returns Un nuevo array sin repeticiones.
 */
var removeDuplicates = function (arr) { return (Array.from(new Set(arr))); };
exports["default"] = removeDuplicates;
