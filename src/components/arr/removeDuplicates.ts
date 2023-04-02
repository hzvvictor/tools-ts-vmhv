/**
 * Elimina elementos duplicados de un array y devuelve un nuevo array sin repeticiones.
 * @param arr - El array de entrada.
 * @returns Un nuevo array sin repeticiones.
 */
const removeDuplicates = <T>(arr: T[]): T[] => (
  Array.from(new Set(arr))
)

export default removeDuplicates