"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports["default"] = void 0;
var get_1 = __importDefault(require("../inObject/inNestedProperty/get"));
/**
 * Cuenta el número de objetos en un arreglo que tienen una propiedad anidada igual a un valor dado.
 *
 * @template T - El tipo de los elementos del arreglo.
 * @param {T[]} arr - El arreglo de objetos en el que se buscará la propiedad anidada.
 * @param {string} property - La propiedad anidada que se buscará en cada objeto del arreglo.
 * @param {*} value - El valor que se buscará en la propiedad anidada.
 * @returns {number} - El número de objetos en el arreglo que tienen la propiedad anidada igual al valor dado.
 */
var count = function (arr, property, value) {
    var count = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var obj = arr_1[_i];
        var nestedObj = (0, get_1["default"])(obj, property);
        if (nestedObj === value) {
            count++;
        }
    }
    return count;
};
exports["default"] = count;
{ // Importar la función count desde el módulo
    // Ejemplo de uso de la función count
    var data = [
        { name: 'Alice', age: 30, address: { city: 'New York', state: 'NY' } },
        { name: 'Bob', age: 25, address: { city: 'Los Angeles', state: 'CA' } },
        { name: 'Charlie', age: 40, address: { city: 'Chicago', state: 'IL' } },
        { name: 'Dave', age: 35, address: { city: 'New York', state: 'NY' } }
    ];
    // Contar el número de objetos con city = 'New York'
    var result = count(data, 'address.city', 'New York');
}
