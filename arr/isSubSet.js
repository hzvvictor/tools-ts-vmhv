"use strict";
exports.__esModule = true;
/**
 *Comprueba si un arreglo es un subconjunto de otro arreglo más grande.
 *@param {T[]} smallArr - El arreglo que se desea comprobar si es un subconjunto.
 *@param {T[]} bigArr - El arreglo más grande que contiene el posible subconjunto.
 *@returns {boolean} - true si smallArr es un subconjunto de bigArr, de lo contrario, false.
*/
function isSubset(smallArr, bigArr) {
    return smallArr.every(function (element) { return bigArr.includes(element); });
}
exports["default"] = isSubset;
