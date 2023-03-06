/**
 * Obtiene el último elemento de un arreglo.
 * @template T
 * @param {T[]} arr - El arreglo del que se desea obtener el último elemento.
 * @returns {T} - El último elemento del arreglo.
*/
const last = <T>(arr: Array<T>): T => arr.slice(-1)[0];

export default last