"use strict";
exports.__esModule = true;
/**
 * Crea un nuevo objeto con las mismas propiedades que el objeto de origen,
 * pero sin las propiedades anidadas especificadas.
 *
 * @template T
 * @param {T} obj - El objeto de origen
 * @param {string[]} keys - Las propiedades anidadas a omitir en el nuevo objeto
 * @returns {Record<string, unknown>} - El nuevo objeto sin las propiedades anidadas especificadas
 */
function omitDeep(obj, keys) {
    var newObj = {};
    Object.entries(obj).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (!keys.includes(key)) {
            if (typeof value === 'object' && value !== null) {
                newObj[key] = omitDeep(value, keys);
            }
            else {
                newObj[key] = value;
            }
        }
    });
    return newObj;
}
exports["default"] = omitDeep;
