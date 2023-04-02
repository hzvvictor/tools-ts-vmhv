type Filter<T> = {
    [K in keyof T]?: T[K];
};
type UpdateDetails<T> = {
    property: keyof T | any;
    value: T[keyof T] | any;
    when: Filter<T> | any;
    default?: T[keyof T];
};
/**
 * Actualiza las propiedades de los objetos de un array, utilizando detalles de actualización que especifican la propiedad que se actualizará, el valor de actualización, un objeto de filtro para aplicar la actualización solo a los objetos que cumplan con los criterios de valor constante y un valor predeterminado opcional.
 *
 * @template T - Tipo del objeto de entrada
 * @param {T[]} arr - Array de objetos a actualizar
 * @param {UpdateDetails<T>[]} updates - Lista de detalles de actualización
 * @returns {T[]} - Array de objetos actualizados
 */
declare function setPropByConstVals<T>(arr: T[], updates: UpdateDetails<T>[]): T[];
export { setPropByConstVals as default };
