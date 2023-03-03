{/* type ValueData = {
  values: Record<string, number>;
  ids: number[];
};
function countValues(...objects) {
  const data = {};

  const updateData = (obj, path = '') => {
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = path ? `${path}.${key}` : key;

      if (typeof value === 'object' && value !== null) {
        updateData(value, currentPath);
      } else {
        if (!data[currentPath]) {
          data[currentPath] = { values: {}, ids: [] };
        }

        const valueStr = value?.toString() ?? 'null';

        if (!data[currentPath].values[valueStr]) {
          data[currentPath].values[valueStr] = 0;
        }

        data[currentPath].values[valueStr]++;
        data[currentPath].ids.push(objects.indexOf(obj));
      }
    }
  };

  objects.forEach((obj, index) => updateData(obj, ''));

  return {
    get: (path='', value='') => {
      if (!path) {
        return data;
      }

      const result = data[path];
      if (!result) {
        return undefined;
      }

      if (value !== undefined) {
        const valueStr = value?.toString() ?? 'null';
        return result.values[valueStr] ?? 0;
      }

      return result.values;
    },
    origin: (path, value) => {
      const result = { ids: [] };

      if (!path) {
        return result;
      }

      const currentData = data[path];
      if (!currentData) {
        throw new Error(`Invalid path: ${path}`);
      }

      const valueStr = value?.toString() ?? '';

      if (Array.isArray(currentData.ids)) {
        currentData.ids.forEach((id) => {
          const obj = objects[id];
          let objMatch = true;

          for (const part of path.split('.')) {
            objMatch = objMatch && obj[part] === currentData.values[part];
          }

          if (objMatch) {
            result.ids.push(id);
          }
        });
      }

      return result;
    },
  };
} */

  const countValues = (...objects) => {
    const data = {};

    function updateData(obj, path = '', parentId = null) {
      for (const [key, value] of Object.entries(obj)) {
        const currentPath = path ? `${path}.${key}` : key;

        if (typeof value === 'object' && value !== null) {
          updateData(value, currentPath, parentId);
        } else {
          if (!data[currentPath]) {
            data[currentPath] = { values: {}, ids: [] };
          }

          const valueStr = value?.toString() ?? 'null';

          if (!data[currentPath].values[valueStr]) {
            data[currentPath].values[valueStr] = 0;
          }

          data[currentPath].values[valueStr]++;
          data[currentPath].ids.push({ id: objects.indexOf(obj), parentId });
        }
      }
    }

    objects.forEach((obj) => updateData(obj));

    function getData(path = '') {
      const result = { values: {}, ids: [] };

      if (!path) {
        for (const [path, valueData] of Object.entries(data)) {
          const vd: any = valueData;
          if (vd.values)
            result.values[path] = vd?.values;
          result.ids = result.ids.concat(vd.ids);
        }
      } else {
        const valueData = data[path];
        if (!valueData) {
          return { values: {}, ids: [], };
        }

        result.values = valueData.values;
        result.ids = valueData.ids;
      }

      return result;
    }

    function get(path = '', value = null) {
      const currentData = getData(path);
      const result = {};

      if (value === null) {
        for (const [valueStr, count] of Object.entries(currentData.values)) {
          result[valueStr] = count;
        }
      } else {
        const valueStr = value?.toString() ?? 'null';
        result[valueStr] = currentData.values[valueStr] ?? 0;
      }

      return result;
    }

    function origin(path = '', value = null) {
      const currentData = getData(path);
      const result = { ids: [] };

      if (value === null) {
        result.ids = currentData.ids.map((idData) => idData.id);
      } else {
        const valueStr = value?.toString() ?? 'null';
        result.ids = currentData.ids
          .filter((idData) => idData.parentId !== null && idData.parentId.values[path] === valueStr)
          .map((idData) => idData.id);
      }

      return result;
    }

    return {
      get,
      origin,
    };
  }
  interface Person {
    name: string;
    age: number;
    occupation: string;
    address: {
      city: string;
      country: string;
    };
    [key: string]: any;
  }

  const people: Person[] = [
    {
      name: "John",
      age: 25,
      occupation: "Software Engineer",
      address: { city: "New York", country: "USA" },
    },
    {
      name: "Alice",
      age: 32,
      occupation: "Data Scientist",
      address: { city: "San Francisco", country: "USA" },
    },
    {
      name: "Bob",
      age: 27,
      occupation: "Software Engineer",
      address: { city: "London", country: "UK" },
    },
    {
      name: "Charlie",
      age: 22,
      occupation: "Data Scientist",
      address: { city: "Paris", country: "France" },
    },
  ];

  const count = countValues(...people);

  console.log(count.get('name')); // { "John": 1, "Alice": 1, "Bob": 1, "Charlie": 1 }
  console.log(count.get('address')); // { 'New York': 1, 'San Francisco': 1, London: 1, Paris: 1 }
  console.log(count.get('address.city')); // { 'New York': 1, 'San Francisco': 1, London: 1, Paris: 1 }
  console.log(count.get('occupation', 'Software Engineer')); // 2
  console.log(count.get());

}