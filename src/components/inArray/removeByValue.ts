/**
 * Elimina todas las ocurrencias de un valor en un array.
 * @template T
 * @param arr - El array original.
 * @param value - El valor a eliminar.
 * @returns Un nuevo array sin ninguna ocurrencia del valor indicado.
 */
const removeByValue = <T>(arr: T[], value: T): T[] => {
  return arr.filter((element) => element !== value);
}


export default removeByValue