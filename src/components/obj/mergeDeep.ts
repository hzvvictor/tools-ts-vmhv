/**
 * Combina dos o más objetos de manera profunda.
 * @param {...Object} objects - Los objetos que se combinarán.
 * @returns {Object} Un nuevo objeto que es la combinación de todos los objetos de entrada.
 */
export default function mergeDeep(...objects: any[]): object {
  const isObject = (obj) => obj && typeof obj === 'object';

  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach((key) => {
      const pVal = prev[key];
      const oVal = obj[key];
      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = pVal.concat(...oVal);
      } else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = mergeDeep(pVal, oVal);
      } else {
        prev[key] = oVal;
      }
    });
    return prev;
  }, {});
}
//! mergeObjects