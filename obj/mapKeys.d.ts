/**
 * Crea un nuevo objeto con las mismas propiedades que el objeto de origen,
 * pero con los nombres de las propiedades transformadas por una función de mapeo.
 *
 * @template T
 * @param {T} obj - El objeto de origen
 * @param {(key: string) => string} mapper - La función de mapeo que transforma los nombres de las propiedades
 * @returns {Record<string, unknown>} - El nuevo objeto con las propiedades mapeadas
 */
export default function mapKeys<T extends Record<string, unknown>>(obj: T, mapper: (key: string) => string): Record<string, unknown>;
