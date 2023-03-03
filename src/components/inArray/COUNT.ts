type Address = {
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  occupation: string;
  address: Address;
};

type Count<T> = Map<T, number>;
function getValue<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
function countValues<T extends object | string>(...objs: T[]): Count<T> {
  const result: Count<T> = new Map();

  function count(obj: T): void {
    if (typeof obj === "object") {
      const keys = Object.keys(obj) as (keyof T)[];
      keys.forEach((key) => {
        const value: any = getValue(obj, key);
        if (typeof value === "object") {
          count(value);
        } else {
          const keyStr = key.toString() as T;
          const valueCount = result.get(value) || 0;
          result.set(value, valueCount + 1);
          const keyCount = result.get(keyStr) || 0;
          result.set(keyStr, keyCount + 1);
        }
      });
    } else {
      const valueCount = result.get(obj) || 0;
      result.set(obj, valueCount + 1);
    }
  }

  objs.forEach((obj) => {
    count(obj);
  });

  return result;
}

function findValues<T extends object>(
  objs: T[],
  path: string,
  value?: any
): { value: any; origin: number[] } {
  const segments = path.split(".");
  const result: { value: any; origin: number[] } = { value: undefined, origin: [] };

  function find(obj: T, level: number): boolean {
    if (level >= segments.length) {
      if (value === undefined || obj === value) {
        result.value = obj;
        return true;
      } else {
        return false;
      }
    } else {
      const key = segments[level] as keyof T;
      const child = obj[key];
      if (typeof child === "object") {
        if (Array.isArray(child)) {
          for (let i = 0; i < child.length; i++) {
            if (find(child[i], level + 1)) {
              result.origin.push(i);
            }
          }
          return result.origin.length > 0;
        } else {
          return find(child as T, level + 1);
        }
      } else {
        return false;
      }
    }
  }

  objs.forEach((obj, i) => {
    if (find(obj, 0)) {
      result.origin.push(i);
    }
  });

  return result;
}

function countByKey<T extends object>(
  key: keyof T | string,
  value?: any,
  objs?: T[]
): Count<any> {
  if (!objs) {
    return new Map();
  }

  const path = key.toString().split(".");
  const result: Count<any> = new Map();

  function count(obj: any): void {
    const val = path.reduce((acc, key) => {
      if (acc !== undefined) {
        acc = acc[key];
      }
      return acc;
    }, obj);

    if (value !== undefined && val !== value) {
      return;
    }

    if (val === undefined) {
      const keyStr = path[path.length - 1] as string;
      const keyCount = result.get(keyStr) || 0;
      result.set(keyStr, keyCount + 1);
    } else if (typeof val === "object") {
      if (Array.isArray(val)) {
        val.forEach((v: any) => count(v));
      } else {
        Object.keys(val).forEach((k) => count(val[k]));
      }
    } else {
      const valCount = result.get(val) || 0;
      result.set(val, valCount + 1);
    }
  }

  objs.forEach((obj) => count(obj));

  return result;
}


const example1 = () => {
  const people = [
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
  const count = countValues(...people.map(p => p.occupation));
  const numPeopleSFDataScientists = count.get('Software Engineer')
  console.log(numPeopleSFDataScientists); // 2
}

const example2 = () => {
  const people: Person[] = [
    {
      name: "Alice",
      age: 30,
      occupation: "Software Engineer",
      address: {
        city: "San Francisco",
        country: "USA"
      }
    },
    {
      name: "Bob",
      age: 40,
      occupation: "Data Scientist",
      address: {
        city: "New York",
        country: "USA"
      }
    },
    {
      name: "Charlie",
      age: 25,
      occupation: "Product Manager",
      address: {
        city: "London",
        country: "UK"
      }
    },
    {
      name: "David",
      age: 35,
      occupation: "Designer",
      address: {
        city: "Paris",
        country: "France"
      }
    },
  ];

  const countByCity = countValues(...people.map(p => p.address.city));
  const countByCountry = countValues(...people.map(p => p.address.country));
  const countByAdrress = countValues(...people.map(p => p.address));
  console.log(countByCity);
  console.log(countByCountry);
  console.log(countByAdrress);


}
example1()
example2()