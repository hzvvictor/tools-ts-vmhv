"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports["default"] = void 0;
var get_1 = __importDefault(require("../inObject/inNestedProperty/get"));
/**
 * Agrupa los elementos de un arreglo por el valor de una propiedad anidada dentro de cada elemento.
 * @template T
 * @param {T[]} arr - El arreglo de objetos a agrupar.
 * @param {string} propiedad - El nombre de la propiedad anidada dentro de cada objeto.
 * @returns {{ [key: string]: T[] }} - Un objeto donde cada propiedad es una cadena que representa el valor de la propiedad anidada y su valor es un arreglo de los objetos que tienen ese valor de propiedad anidada.
*/
var groupByNestedProperty = function (arr, propiedad) {
    var resultado = {};
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var obj = arr_1[_i];
        var nestedObj = (0, get_1["default"])(obj, propiedad);
        if (nestedObj !== null) {
            var key = nestedObj.toString();
            if (!resultado[key]) {
                resultado[key] = [];
            }
            resultado[key].push(obj);
        }
    }
    return resultado;
};
exports["default"] = groupByNestedProperty;
