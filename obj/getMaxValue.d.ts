/**
 * Retorna el valor máximo en un objeto de números
 * @param {Record<string, number>} obj - Objeto de números para buscar el valor máximo
 * @returns {{key: string, value: number}} - Objeto con la clave y valor del valor máximo encontrado en el objeto de números
 */
declare const getMaxValue: (obj: Record<string, number>) => {
    key: string;
    value: number;
};
export default getMaxValue;
