type ObjectValue = string | number | boolean | object | null | undefined;
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
export default function getCountByValues(obj: Record<string, ObjectValue>): (query: Record<string, ObjectValue>) => number;
export {};
