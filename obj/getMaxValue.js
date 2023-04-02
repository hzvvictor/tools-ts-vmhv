"use strict";
exports.__esModule = true;
/**
 * Retorna el valor máximo en un objeto de números
 * @param {Record<string, number>} obj - Objeto de números para buscar el valor máximo
 * @returns {{key: string, value: number}} - Objeto con la clave y valor del valor máximo encontrado en el objeto de números
 */
var getMaxValue = function (obj) {
    var value = -Infinity;
    var key = '';
    for (var _key in obj) {
        if (obj[_key] > value) {
            value = obj[_key];
            key = _key;
        }
    }
    return { key: key, value: value };
};
exports["default"] = getMaxValue;
