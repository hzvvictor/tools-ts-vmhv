/**
 * Retorna el valor máximo en un objeto de números
 * @param {Record<string, number>} obj - Objeto de números para buscar el valor máximo
 * @returns {{key: string, value: number}} - Objeto con la clave y valor del valor máximo encontrado en el objeto de números
 */
const getMaxValue = (obj: Record<string, number>): { key: string; value: number; } => {
  let value = -Infinity;
  let key = '';

  for (const _key in obj) {
    if (obj[_key] > value) {
      value = obj[_key];
      key = _key;
    }
  }

  return { key, value };
};


export default getMaxValue;