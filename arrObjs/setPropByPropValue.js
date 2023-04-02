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
var get_1 = __importDefault(require("../inObject/inNestedProperty/get"));
function updateNestedProperty(obj, property, value) {
    var props = property.split('.');
    var newObj = __assign({}, obj);
    var nestedObj = newObj;
    for (var i = 0; i < props.length - 1; i++) {
        var prop = props[i];
        if (!nestedObj.hasOwnProperty(prop)) {
            nestedObj[prop] = {};
        }
        nestedObj = nestedObj[prop];
    }
    nestedObj[props[props.length - 1]] = value;
    return newObj;
}
/**
 * Actualiza las propiedades de los objetos de un array, utilizando detalles de actualización que especifican la propiedad que se actualizará, el valor de actualización, un objeto de filtro para aplicar la actualización solo a los objetos que cumplan con los criterios de valor constante y un valor predeterminado opcional.
 *
 * @template T - Tipo del objeto de entrada
 * @param {T[]} arr - Array de objetos a actualizar
 * @param {UpdateDetails<T>[]} updates - Lista de detalles de actualización
 * @returns {T[]} - Array de objetos actualizados
 */
function setPropByConstVals(arr, updates) {
    return arr.map(function (item) {
        var _a;
        var newItem = __assign({}, item);
        for (var _i = 0, updates_1 = updates; _i < updates_1.length; _i++) {
            var update = updates_1[_i];
            for (var filterKey in update.when) {
                var filter = update.when[filterKey];
                if (checkFilter(item, (_a = {}, _a[filterKey] = filter, _a))) {
                    var propertyValue = (0, get_1["default"])(newItem, update.property);
                    var newValue = update.value || update["default"];
                    if (propertyValue !== undefined && propertyValue !== null) {
                        newItem = updateNestedProperty(newItem, update.property, newValue);
                    }
                    else {
                        newItem = updateNestedProperty(newItem, update.property, newValue);
                    }
                }
            }
        }
        return newItem;
    });
}
exports["default"] = setPropByConstVals;
function checkFilter(item, filter) {
    return Object.entries(filter).every(function (_a) {
        var key = _a[0], value = _a[1];
        var propertyValue = (0, get_1["default"])(item, key);
        return propertyValue === value;
    });
}
