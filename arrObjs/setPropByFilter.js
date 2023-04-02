"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports["default"] = void 0;
var inNestedProperty_1 = __importDefault(require("../inObject/inNestedProperty"));
/**
 * Actualiza propiedades de objetos de un arreglo que cumplen una condición específica.
 * @template T
 * @param {T[]} objects - Arreglo de objetos a actualizar.
 * @param {Update<any>[]} updates - Arreglo de objetos que contienen las actualizaciones a aplicar.
 * @returns {T[]} - Arreglo de objetos actualizados.
*/
function setPropByFilter(objects, updates) {
    var updatedObjects = [];
    for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
        var object = objects_1[_i];
        var updatedObject = __assign({}, object);
        for (var _a = 0, updates_1 = updates; _a < updates_1.length; _a++) {
            var update = updates_1[_a];
            if (update.when(object)) {
                var propertyValue = inNestedProperty_1["default"].get(object, update.property);
                if (propertyValue !== null) {
                    updatedObject = inNestedProperty_1["default"].set(updatedObject, update.property, update.value);
                }
            }
        }
        updatedObjects.push(updatedObject);
    }
    return updatedObjects;
}
exports["default"] = setPropByFilter;
