/**
 * Creates a unique key table that allows adding, deleting, and checking uniqueness of values by key.
 * @template T - Type of the objects to be added to the table.
 * @param {...T[]} objs - Objects to create the unique key table.
 * @returns {Object} An object with methods to add, delete, and check uniqueness of values by key.
 */
const createUniqueKeyTable = <T extends Record<string, unknown>>(...objs: T[]) => {
  const valuesByIdKey: Record<string, Record<string | number | symbol, number>> = {};
  const idKeyByValue: Record<string | number | symbol, string> = {};
  const idKey: Record<string, number> = {};
  let idCounter = 0;

  /**
   * Adds values of one or multiple objects to the unique key table.
   * @param {...T[]} objsToAdd - Objects to add to the unique key table.
   * @returns {boolean} True if the operation was successful.
   */
  const addByObjs = (...objsToAdd: T[]) => {
    for (const obj of objsToAdd) {
      for (const key in obj) {
        const value = obj[key as keyof T];
        if (!idKey[key]) idKey[key] = ++idCounter;
        const idKeyForCurrentKey = idKey[key];
        if (!valuesByIdKey[idKeyForCurrentKey]) valuesByIdKey[idKeyForCurrentKey] = {};

        const idKeyForCurrentValue = idKeyByValue[value as string | number | symbol];
        if (idKeyForCurrentValue) delete valuesByIdKey[idKeyForCurrentValue][value as string | number | symbol];

        valuesByIdKey[idKeyForCurrentKey][value as string | number | symbol] = 1;
        idKeyByValue[value as string | number | symbol] = idKeyForCurrentKey.toString();
      }
    }
    return true;
  };

  /**
   * Checks if an object already exists in the unique key table.
   * @param {T} obj - Object to check.
   * @returns {{exist: boolean, idKey: number | undefined, value: unknown | undefined}} An object with the following properties:
   * - exist: boolean indicating if the object exists in the unique key table.
   * - idKey: number indicating the id key of the object (or undefined if it does not exist).
   * - value: any indicating the value of the object's key that matches the unique key (or undefined if it does not exist).
   */
  const checkIfExists = (obj: T) => {
    let exist = false;
    let value;
    let idKeyForValue: string | undefined;
    for (const key in obj) {
      value = obj[key as keyof T];
      const idKeyForCurrentKey = idKey[key];
      console.log({ obj, idKey, key, valuesByIdKey });
      console.log({ idKeyForCurrentKey, value });
      idKeyForValue = idKeyByValue[value as Extract<keyof T, string>];
      exist = idKeyForCurrentKey === parseInt(idKeyForValue || '', 10);
    }
    return { exist, idKey: parseInt(idKeyForValue || '', 10), value };
  };

  /**
   * Deletes the value of an object from the unique key table.
   * @param {T} obj - Object containing the key and value to delete.
   * @returns {boolean} True if the operation was successful.
   */
  const deleteValueByObj = (obj: T) => {
    const { idKey, exist, value } = checkIfExists(obj);
    if (exist) {
      delete valuesByIdKey[idKey.toString()][value as string | number | symbol];
      delete idKeyByValue[value as string | number | symbol]

    }
    return exist;
  };
  return { addByObjs, checkIfExists, deleteValueByObj };
};
const a = createUniqueKeyTable({ a: 100, b: 10 }, { a: 200, b: 20 }, { a: 300 }, { n: 999 })
console.log(a);
console.log(a.checkIfExists({ a: 10 }));
console.log(a.checkIfExists({ a: 100 }));
console.log(a.checkIfExists({ a: 1000 }));