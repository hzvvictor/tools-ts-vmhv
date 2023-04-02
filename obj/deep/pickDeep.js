"use strict";
exports.__esModule = true;
/**
 * Obtiene el valor de una propiedad anidada en un objeto.
 * @param obj - El objeto del cual obtener la propiedad anidada.
 * @param path - Una cadena de propiedades separadas por punto que indica la propiedad anidada que se desea obtener.
 * @returns El valor de la propiedad anidada si se encuentra, o `undefined` si no se encuentra.
 */
function getNestedProperty(obj, path) {
    return path.split('.').reduce(function (value, key) { return (value !== undefined ? value[key] : undefined); }, obj);
}
exports["default"] = getNestedProperty;
//! pickDeep | pickKeys | getNestedProperty
