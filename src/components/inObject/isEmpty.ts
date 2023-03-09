/**
 * Verifica si un objeto está vacío
 * @param {Record<string, any>} obj - Objeto a verificar si está vacío
 * @returns {boolean} - Verdadero si el objeto está vacío, falso si no lo está
 */
const isEmpty = (obj: Record<string, any>): boolean => (
  Object.keys(obj).length === 0
)
export default isEmpty;