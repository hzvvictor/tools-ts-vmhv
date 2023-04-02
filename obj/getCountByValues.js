"use strict";
exports.__esModule = true;
/**
 * Cuenta el número de elementos en un objeto que coinciden con un conjunto de criterios de búsqueda.
 * @param obj El objeto en el que se buscarán los elementos.
 * @returns Una función que toma un objeto de búsqueda y devuelve el número de elementos que coinciden.
 * @example
 * const object = {
 *   name: 'John',
 *   age: 30,
 *   address: {
 *     city: 'Mexico City',
 *     country: 'Mexico'
 *   },
 *   hobbies: ['reading', 'gaming']
 * };
 * const count = getCountByValues(object);
 * console.log(count({ 'address.city': 'Mexico City' })); // Retorna 1
 * console.log(count({ 'age': 30 })); // Retorna 1
 * console.log(count({ 'hobbies': 'reading' })); // Retorna 1
 * console.log(count({ 'hobbies': 'swiming' })); // Retorna 0
 */
function getCountByValues(obj) {
    /**
   * Busca elementos en el objeto que coinciden con el objeto de búsqueda proporcionado.
   * @param query El objeto de búsqueda que especifica los criterios de coincidencia.
   * @returns El número de elementos en el objeto que coinciden con el objeto de búsqueda.
   */
    return function (query) {
        var keys = Object.keys(query);
        return Object.keys(obj).reduce(function (count, key) {
            var value = obj[key];
            if (typeof value === 'object' && value !== null) {
                return count + getCountByValues(value)(query);
            }
            return keys.every(function (k) { return query[k] === value; }) ? count + 1 : count;
        }, 0);
    };
}
exports["default"] = getCountByValues;
