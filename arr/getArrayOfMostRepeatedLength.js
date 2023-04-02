"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var inObject_1 = require("../inObject");
var getLengthArrDictionary_1 = __importDefault(require("./getLengthArrDictionary"));
/**
 *Devuelve un arreglo con los elementos de longitud más repetida de un arreglo de números o strings.
 *@param {Array<string | number>} arr - Arreglo de elementos a analizar.
 *@returns {Array<string | number>} - Arreglo de elementos de longitud más repetida.
*/
var getArrayOfMostRepeatedLength = function (arr) {
    var dictionaryLengths = (0, getLengthArrDictionary_1["default"])(arr);
    var mostRepeted = Number((0, inObject_1.getMaxValue)(dictionaryLengths).key);
    var filtered = arr.filter(function (item) { return (item === null || item === void 0 ? void 0 : item.toString().length) == mostRepeted; });
    return filtered;
};
exports["default"] = getArrayOfMostRepeatedLength;
