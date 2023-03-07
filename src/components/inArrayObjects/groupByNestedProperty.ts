import getValueOfNestedProperty from "../inObject/inNestedProperty/get";
/**
 * Agrupa los elementos de un arreglo por el valor de una propiedad anidada dentro de cada elemento.
 * @template T
 * @param {T[]} arr - El arreglo de objetos a agrupar.
 * @param {string} propiedad - El nombre de la propiedad anidada dentro de cada objeto.
 * @returns {{ [key: string]: T[] }} - Un objeto donde cada propiedad es una cadena que representa el valor de la propiedad anidada y su valor es un arreglo de los objetos que tienen ese valor de propiedad anidada.
*/
const groupByNestedProperty = <T>(
  arr: T[],
  propiedad: string
): { [key: string]: T[] } => {
  const resultado: { [key: string]: T[] } = {};
  for (const obj of arr) {
    const nestedObj = getValueOfNestedProperty(obj, propiedad);
    if (nestedObj !== null) {
      const key = nestedObj.toString();
      if (!resultado[key]) {
        resultado[key] = [];
      }
      resultado[key].push(obj);
    }
  }
  return resultado;
}
export { groupByNestedProperty as default }


// const arr = [
//   { id: 1, name: "John Doe", department: { name: "Sales", manager: { name: "Manager1" } } },
//   { id: 2, name: "Jane Doe", department: { name: "Marketing", manager: { name: "Manager2" } } },
//   { id: 3, name: "Bob Smith", department: { name: "Sales", manager: { name: "Manager1" } } },
//   { id: 4, name: "Alice Johnson", department: { name: "IT", manager: { name: "Manager3" } } },
// ];
// const agrupado = groupByNestedProperty(arr, "department.name");
// console.log(agrupado);
