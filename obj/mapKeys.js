"use strict";
exports.__esModule = true;
/**
 * Crea un nuevo objeto con las mismas propiedades que el objeto de origen,
 * pero con los nombres de las propiedades transformadas por una función de mapeo.
 *
 * @template T
 * @param {T} obj - El objeto de origen
 * @param {(key: string) => string} mapper - La función de mapeo que transforma los nombres de las propiedades
 * @returns {Record<string, unknown>} - El nuevo objeto con las propiedades mapeadas
 */
function mapKeys(obj, mapper) {
    var keys = Object.keys(obj);
    return keys.reduce(function (acc, key) {
        acc[mapper(key)] = obj[key];
        return acc;
    }, {});
}
exports["default"] = mapKeys;
