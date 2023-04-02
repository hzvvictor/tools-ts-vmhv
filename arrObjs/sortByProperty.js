"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports["default"] = void 0;
var get_1 = __importDefault(require("../obj/inNestedProperty/get"));
/**
 * Ordena un array de objetos por una propiedad anidada específica, de manera ascendente o descendente.
 * @param arr El array de objetos a ordenar.
 * @param property La propiedad anidada por la cual se va a ordenar el array.
 * @param descending Si es true, ordena de manera descendente. De lo contrario, ordena de manera ascendente.
 * @returns El array ordenado.
 */
var sortByProperty = function (arr, property, descending) {
    if (descending === void 0) { descending = false; }
    return arr.sort(function (a, b) {
        var valA = (0, get_1["default"])(a, property);
        var valB = (0, get_1["default"])(b, property);
        if (valA === null && valB === null) {
            return 0;
        }
        else if (valA === null) {
            return 1;
        }
        else if (valB === null) {
            return -1;
        }
        return descending ? valB - valA : valA - valB;
    });
};
exports["default"] = sortByProperty;
