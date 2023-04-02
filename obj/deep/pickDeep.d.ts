/**
 * Obtiene el valor de una propiedad anidada en un objeto.
 * @param obj - El objeto del cual obtener la propiedad anidada.
 * @param path - Una cadena de propiedades separadas por punto que indica la propiedad anidada que se desea obtener.
 * @returns El valor de la propiedad anidada si se encuentra, o `undefined` si no se encuentra.
 */
export default function getNestedProperty<T extends Record<string, any>>(obj: T, path: string): any | undefined;
