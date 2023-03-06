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

interface Product {
  id: number;
  details: {
    color: string;
    size: string;
    price: number;
  };
}

interface Product {
  id: number;
  details: {
    color: string;
    size: string;
    price: number;
  };
}

const products: Product[] = [
  {
    id: 1,
    details: {
      color: 'blue',
      size: 'S',
      price: 10,
    },
  },
  {
    id: 2,
    details: {
      color: 'blue',
      size: 'M',
      price: 12,
    },
  },
  {
    id: 3,
    details: {
      color: 'red',
      size: 'M',
      price: 8,
    },
  },
];

const updates = [
  {
    property: 'details.price',
    value: 15,
    when: { 'details.color': 'red', 'details.price': 12 },
  },
  {
    property: 'details.color',
    value: 'green',
    when: { 'details.price': 10 },
  },
];

const updatedProducts = setPropByConstVals(products, updates);

console.log(updatedProducts);
/* [
  {
    "id": 1,
    "details": {
      "color": "blue",
      "size": "S",
      "price": 10
    }
  },
  {
    "id": 2,
    "details": {
      "color": "blue",
      "size": "M",
      "price": 15
    }
  },
  {
    "id": 3,
    "details": {
      "color": "red",
      "size": "M",
      "price": 8
    }
  }
] */


export { setPropByConstVals as default }