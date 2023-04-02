"use strict";
exports.__esModule = true;
/**
 * Encuentra el valor máximo y su índice en un arreglo de números.
 * @param {number[]} arr - El arreglo de números donde buscar el valor máximo.
 * @returns {{value: number; index: number}} - Un objeto que contiene el valor máximo y su índice en el arreglo.
*/
var getMaxValue = function (arr) {
    var value = -Infinity;
    var index = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            value = arr[i];
            index = i;
        }
    }
    return { value: value, index: index };
};
exports["default"] = getMaxValue;
