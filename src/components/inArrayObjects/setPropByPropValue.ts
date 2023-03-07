import getValueOfNestedProperty from "../inObject/inNestedProperty/get";
type Filter<T> = {
  [K in keyof T]?: T[K];
};

type UpdateDetails<T> = {
  property: keyof T | any;
  value: T[keyof T] | any;
  when: Filter<T> | any;
  default?: T[keyof T];
};

function updateNestedProperty<T>(
  obj: T,
  property: string,
  value: T[keyof T]
): T {
  const props = property.split('.');
  let newObj: any = { ...obj };
  let nestedObj = newObj;
  for (let i = 0; i < props.length - 1; i++) {
    const prop = props[i];
    if (!nestedObj.hasOwnProperty(prop)) {
      nestedObj[prop] = {};
    }
    nestedObj = nestedObj[prop];
  }
  nestedObj[props[props.length - 1]] = value;
  return newObj;
}
/**
 * Actualiza las propiedades de los objetos de un array, utilizando detalles de actualización que especifican la propiedad que se actualizará, el valor de actualización, un objeto de filtro para aplicar la actualización solo a los objetos que cumplan con los criterios de valor constante y un valor predeterminado opcional.
 *
 * @template T - Tipo del objeto de entrada
 * @param {T[]} arr - Array de objetos a actualizar
 * @param {UpdateDetails<T>[]} updates - Lista de detalles de actualización
 * @returns {T[]} - Array de objetos actualizados
 */
function setPropByConstVals<T>(
  arr: T[],
  updates: UpdateDetails<T>[]
): T[] {
  return arr.map((item) => {
    let newItem = { ...item };
    for (const update of updates) {
      for (const filterKey in update.when) {
        const filter = update.when[filterKey]
        if (checkFilter(item, { [filterKey]: filter } as Filter<T>)) {
          const propertyValue = getValueOfNestedProperty(newItem, update.property as string);
          const newValue = update.value || update.default;
          if (propertyValue !== undefined && propertyValue !== null) {
            newItem = updateNestedProperty(newItem, update.property as string, newValue);
          } else {
            newItem = updateNestedProperty(newItem, (update.property as keyof T) as string, newValue);
          }
        }
      }
    }
    return newItem;
  });
}

function checkFilter<T>(item: T, filter: Filter<T>): boolean {
  return Object.entries(filter).every(([key, value]) => {
    const propertyValue = getValueOfNestedProperty(item, key);
    return propertyValue === value;
  });
}

export { setPropByConstVals as default }