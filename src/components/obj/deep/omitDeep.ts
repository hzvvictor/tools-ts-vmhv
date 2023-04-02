/**
 * Crea un nuevo objeto con las mismas propiedades que el objeto de origen,
 * pero sin las propiedades anidadas especificadas.
 *
 * @template T
 * @param {T} obj - El objeto de origen
 * @param {string[]} keys - Las propiedades anidadas a omitir en el nuevo objeto
 * @returns {Record<string, unknown>} - El nuevo objeto sin las propiedades anidadas especificadas
 */
export default function omitDeep<T extends Record<string, unknown>>(
  obj: T,
  keys: string[],
): Record<string, unknown> {
  const newObj: Record<string, unknown> = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (!keys.includes(key)) {
      if (typeof value === 'object' && value !== null) {
        newObj[key] = omitDeep(value as T, keys);
      } else {
        newObj[key] = value;
      }
    }
  });
  return newObj;
}
