
const tableOneToArr = <T extends Record<string, string>[]>(...objs: T) => {
  type Table<T extends Record<string, string>[]> = Record<keyof T[number], Record<string, true>>;
  const table: Table<T> = {} as Table<T>;

  const add = (...objsToAdd: T) => {
    for (const obj of objsToAdd) {
      for (const [key, value] of Object.entries(obj)) {
        if (!table[key as keyof T[number]]){
          table[key as keyof T[number]] = {} as Record<string, true>;
        }
        (table[key] as Record<string, true>)[value] = true;
      }
    }
  };

  const getArrByKey = <K extends keyof T[number]>(key: K) => {
    return Object.keys(table[key] ?? {}) as T[number][K][];
  };

  const delValueByKey = <K extends keyof T[number]>(key: K, value: T[number][K]) => {
    const exist = table[key]?.[value];
    if (exist) delete table[key][value];
    return exist;
  };

  add(...objs);

  return {
    add,
    getArrByKey,
    delValueByKey,
    showTable: () => table
  };
};

const toAdd = [
  { mascotas: "gato" },
  { comida: "tomate" },
  { mascotas: "perro" },
  { comida: "cebolla" }
];
const oneto = tableOneToArr(...toAdd)
console.log(oneto.showTable());
console.log(oneto.getArrByKey("comida"));