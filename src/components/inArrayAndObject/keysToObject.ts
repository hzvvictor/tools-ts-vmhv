/**
 * Recibe un arreglo de claves y un valor y retorna un objeto con las claves y el valor especificado.
 * @param keys Arreglo de claves
 * @param value Valor a asignar
 * @returns Objeto con las claves y el valor especificado
 */
function keysToObject<T extends string, V>(keys: T[], value: V): Record<T, V> {
  return Object.fromEntries(keys.map((key) => [key, value])) as Record<T, V>;
}


export default keysToObject