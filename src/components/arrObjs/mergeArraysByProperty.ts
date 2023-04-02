import getValueOfNestedProperty from "../inObject/inNestedProperty/get";
import groupByNestedProperty from "./groupByNestedProperty";

// getValueOfNestedProperty
/**
 * Combina dos arrays de objetos en uno solo, agrupando los elementos por propiedades específicas y devolviendo un objeto con las propiedades agrupadas como claves y los valores de los arrays combinados como valores.
 * @template T
 * @param {T[]} arr1 - El primer array de objetos a combinar.
 * @param {string} prop1 - La cadena de acceso separada por puntos a la propiedad por la cual se agruparán los elementos del primer array.
 * @param {T[]} arr2 - El segundo array de objetos a combinar.
 * @param {string} prop2 - La cadena de acceso separada por puntos a la propiedad por la cual se agruparán los elementos del segundo array.
 * @returns {object} - Un objeto que contiene las propiedades agrupadas como claves y los valores de los arrays combinados como valores.
 */
/**
 * Combina múltiples arrays de objetos en uno solo, agrupando los elementos por propiedades específicas y devolviendo un objeto con las propiedades agrupadas como claves y los valores de los arrays combinados como valores.
 * @template T
 * @template U
 * @param {Array<{from: U[], by: keyof U}>} arrs - Un arreglo de objetos con la estructura {from: U[], by: keyof U}.
 * @returns {Record<T, U[]>} - Un objeto que contiene las propiedades agrupadas como claves y los valores de los arrays combinados como valores.
 */
type MergeArray = {
  from: any[];
  by: string;
  as: string;
}

type MergedArrays<T> = {
  [key: string]: { [key: string]: T[] };
};

const mergeArraysByProperty = <T>(...arrs: MergeArray[]): MergedArrays<T> => {
  const resultado: MergedArrays<T> = {};
  const agrupados = arrs.map((obj) => groupByNestedProperty(obj.from, obj.by));
  const keys = agrupados.reduce((acum, agrupado) => ({ ...acum, ...agrupado }), {});

  for (const key in keys) {
    resultado[key] = {};
    arrs.forEach((obj) => {
      const { from, as } = obj;
      const filtered = from.filter((item) => {
        return getValueOfNestedProperty(item, obj.by) === key;
      });

      resultado[key][as] = filtered.map((item) => item) as T[];
    });
  }

  return resultado;
};

export { mergeArraysByProperty as default };


