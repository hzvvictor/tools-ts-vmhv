import inNestedProperty from "../inObject/inNestedProperty";
type NestedObject<T> = T & { [key: string]: NestedObject<T> | undefined };
/**
 * Representa un objeto de actualización que se aplicará a una propiedad de un objeto.
 * La propiedad será actualizada con un valor determinado solo si la función "when" devuelve true.
 * @template T - Tipo de la propiedad a actualizar.
 * @property {string} property - Nombre de la propiedad anidada que se actualizará.
 * @property {T | any} value - Nuevo valor que se asignará a la propiedad.
 * @property {((obj: NestedObject<T>) => boolean)} when - Función que evalúa si se debe aplicar la actualización o no.
*/
interface Update<T> {
  property: string;
  value: T | any;

  when: ((obj: NestedObject<T>) => boolean);
}
/**
 * Actualiza propiedades de objetos de un arreglo que cumplen una condición específica.
 * @template T
 * @param {T[]} objects - Arreglo de objetos a actualizar.
 * @param {Update<any>[]} updates - Arreglo de objetos que contienen las actualizaciones a aplicar.
 * @returns {T[]} - Arreglo de objetos actualizados.
*/
function setPropByFilter<T>(objects: T[], updates: Update<any>[]): T[] {
  const updatedObjects: T[] = [];
  for (const object of objects) {
    let updatedObject: NestedObject<T> = { ...object } as any;
    for (const update of updates) {
      if (update.when(object as any)) {
        const propertyValue = inNestedProperty.get(object, update.property);
        if (propertyValue !== null) {
          updatedObject = inNestedProperty.set(updatedObject, update.property, update.value);
        }
      }
    }
    updatedObjects.push(updatedObject as T);
  }
  return updatedObjects;
}
export { setPropByFilter as default }