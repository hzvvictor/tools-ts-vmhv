# tsmuf

Aquí se proporciona una breve descripción del proyecto (BETA). 

## Instalación
1. Instala las dependencias: `npm install tsmuf`
2. Importa las librerias => import { inArray , inString, ... } from 'tsmuf';
3. Usa las funciones de la libreria;

## Uso
  La librería incluye las siguientes funciones y utilidades:

## Indice
- [inArray](#inArray)
- [inArrayObjects](#inArrayObjects)
- [inDir](#inDir)
- [inFile](#inFile)
- [inObject](#inObject)
- [inRegex](#inRegex)
- [inString](#inString)


### inArray
#### _inArray.isSubset_
  Comprueba si un arreglo es un subconjunto de otro arreglo más grande.

```javascript
import { inArray } from 'tsmuf';
const { isSubset } = inArray;

const smallArr = [2, 4];
const bigArr = [2, 4, 6];

console.log(isSubset(smallArr, bigArr)); // true
```
___
#### _inArray.getMaxValue_
  Encuentra el valor máximo y su índice en un arreglo de números.

```javascript
import { inArray } from 'tsmuf';
const { getMaxValue } = inArray;

const numeros = [5, 9, 3, 2, 8, 1];
const resultado = getMaxValue(numeros);
console.log(`El valor máximo es ${resultado.value} y se encuentra en la posición ${resultado.index}`)//`El valor máximo es 8 y se encuentra en la posición 4
```
___
#### _inArray.removeDuplicates_
  Elimina elementos duplicados de un array y devuelve un nuevo array sin repeticiones.

```javascript
import { inArray } from 'tsmuf';
const { removeDuplicates } = inArray;
console.log(removeDuplicates([1, 2, 1, 2]))// [1, 2]
console.log(removeDuplicates([100,200,100]))// [100, 200]
```
___
#### _inArray.isEmpty_
  Esta función verifica si un array está vacío.

```javascript
import { inArray } from 'tsmuf';
const { isEmpty } = inArray;

const result1 = isEmpty([1, 2, 3]); // false
const result2 = isEmpty([]); // true
```
___
#### _inArray.last_
  Esta función obtiene el último elemento de un arreglo.

```javascript
import { inArray } from 'tsmuf';

const result1 = inArray.last([1, 2, 3]); // 3
const result2 = inArray.last([900, 300]); // 300
```
### inArrayObjects
___
#### _inArrayObjects.count_
  Cuenta el número de objetos en un arreglo que tienen una propiedad anidada igual a un valor dado.

```javascript
// Importar la función count desde el módulo
import { inArrayObjects } from 'tsmuf';

// Ejemplo de uso de la función count
const data = [
  { name: 'Alice', age: 30, address: { city: 'New York', state: 'NY' } },
  { name: 'Bob', age: 25, address: { city: 'Los Angeles', state: 'CA' } },
  { name: 'Charlie', age: 40, address: { city: 'Chicago', state: 'IL' } },
  { name: 'Dave', age: 35, address: { city: 'New York', state: 'NY' } }
];
// Contar el número de objetos con city = 'New York'
const result = inArrayObjects.count(data, 'address.city', 'New York');
console.log(result); // 2
```
___
#### _inArrayObjects.setPropByFilter_
  Actualiza las propiedades de un array de objetos en base a una propiedad anidada y valor constante.
  Supongamos que tenemos un arreglo de objetos que representan productos y queremos actualizar el precio de aquellos que tengan una categoría específica:
  | Producto | Categoria | Precio | Nuevo precio
  | ------ | ------ | ------ | ------ |
  | Producto A | Category A | 10 | 10
  | Producto B | Category B | 20 | 50
  | Producto C | Category A | 30 | 10

```javascript
import { inArrayObjects } from 'tsmuf';
const { setPropByFilter } = inArrayObjects;
const products = [
  { id: 1, name: 'Producto A', category: 'Category A', price: 10 },
  { id: 2, name: 'Producto B', category: 'Category B', price: 20 },
  { id: 3, name: 'Producto C', category: 'Category A', price: 30 }
];

const updates = [
  { property: 'price', value: 15, when: (obj) => obj.category === 'Category A' },
  { property: 'price', value: 50, when: (obj) => obj.price === 20 }
];

const updatedProducts = setPropByFilter(products, updates);

console.log(updatedProducts);
```
  Esto produciría la siguiente salida:
```javascript
[
  { id: 1, name: 'Producto A', category: 'Category A', price: 15 },
  { id: 2, name: 'Producto B', category: 'Category B', price: 50 },
  { id: 3, name: 'Producto C', category: 'Category A', price: 15 }
]
```
___
#### _inArrayObjects.groupByNestedProperty_
  Agrupa los elementos de un arreglo por el valor de una propiedad anidada dentro de cada elemento.
```javascript
import { mergeArraysByProperty } from 'tsmuf/inArrayObjects';
const personas = [
  { nombre: "Victor", datos: { persona: { edad: 30, altura: 170 } } },
  { nombre: "Martha", datos: { persona: { edad: 25, altura: 165 } } },
  { nombre: "Pedro", datos: { persona: { edad: 30, altura: 180 } } },
  { nombre: "Lucía", datos: { persona: { edad: 25, altura: 175 } } }
]
;

```
  Para agruparlos por edad, podrías llamar a la función groupByNestedProperty así:
```javascript
const personasPorEdad = groupByNestedProperty(personas, "datos.persona.edad");
console.log(personasPorEdad);
```
  Esto produciría la siguiente salida:
```javascript
{
  "30": [
    { "nombre": "Juan", "datos": { "persona": { "edad": 30, "altura": 170 } } },
    { "nombre": "Pedro", "datos": { "persona": { "edad": 30, "altura": 180 } } }
  ],
  "25": [
    { "nombre": "María", "datos": { "persona": { "edad": 25, "altura": 165 } } },
    { "nombre": "Lucía", "datos": { "persona": { "edad": 25, "altura": 175 } } }
  ]
}
```

  Otras documentaciones se estan trabajando :)...
___
#### _inArrayObjects.mergeArraysByProperty_
  Agrupa por una propiedad y fusiona los arrays.
  Devolviendo un objeto con las propiedades agrupadas como claves y los valores de los arrays combinados como valores.
  Por ejemplo queremos agruparlos por 'country' los array de 'customers' con 'orders'.
```javascript
  import { mergeArraysByProperty } from 'tsmuf/inArrayObjects';
  const customers = [
    { id: 1, name: "John Doe", address: { country: "USA" } },
    { id: 2, name: "Jane Doe", address: { country: "Canada" } },
    { id: 3, name: "Bob Smith", address: { country: "USA" } },
    { id: 4, name: "Alice Johnson", address: { country: "Mexico" } },
  ];

  const orders = [
    { id: 1, customerId: 1, total: 50, customer: { address: { country: "USA" } } },
    { id: 2, customerId: 2, total: 100, customer: { address: { country: "Canada" } } },
    { id: 3, customerId: 1, total: 25, customer: { address: { country: "USA" } } },
    { id: 4, customerId: 3, total: 75, customer: { address: { country: "USA" } } },
  ];
```
Para agrupar los arrays con de las ordenes con los clientes en base al pais se puede utilizar lo siguiente
```javascript
  const combined = mergeArraysByProperty(
    { from: customers, by: "address.country", as: 'customers' },
    { from: orders, by: "customer.address.country", as: 'orders' }
  );
  console.log(combined);
```
Esto produciría la siguiente salida:
```javascript
{
  USA: {
    customers: [ ... ],
    orders: [ ... ]
  },
  Canada: { customers: [ ... ], orders: [ ... ] },
  Mexico: { customers: [ ... ], orders: [] }
}
```
___
#### _inArrayObjects.setPropByPropValue_
  Actualiza las propiedades de los objetos de un array, en base a propiedades anidadas y valoresconstantes.

Supongamos que tenemos un arreglo de objetos que representan productos:
| id  | color | tamaño | Precio |
| ------ | ------ | ------ | ------ |
| 1 | blue | S | 10 |
| 2 | blue | M | 12 |
| 3 | red | M | 8 |

Y se necesita una actualizacion requerida:
| id  | color | tamaño | Precio |
| ------ | ------ | ------ | ------ |
| 1 | green | S | 10 |
| 2 | blue | M | 15 |
| 3 | red | M | 15 |

Entonces queremos cambiar el precio a 15 cuando sea de color rojo y precio 12,
, ademas  queremos cambiar el color a verde los que sean de valor 10. 
Quedando asi:
```javascript
import { setPropByPropValue } from 'tsmuf/inArrayObjects';
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
```
Esto produciría la siguiente salida:
```javascript
[
  { id: 1, details: { color: 'green', size: 'S', price: 10 } },
  { id: 2, details: { color: 'blue', size: 'M', price: 15 } },
  { id: 3, details: { color: 'red', size: 'M', price: 15 } }
]
```
___
#### _inArrayObjects.sortByProperty_
  Ordena un array de objetos por una propiedad anidada específica, de manera ascendente o descendente.
Supongamos que tenemos un array de objetos que representan canciones, y queremos ordenarlas por el año de lanzamiento de manera descendente:
```javascript
import { sortByProperty } from 'tsmuf/inArrayObjects';
const songs = [
  {
    title: 'Bohemian Rhapsody', artist: 'Queen',
    album: { title: 'A Night at the Opera', year: 1975 },
  },
  {
    title: 'Stairway to Heaven', artist: 'Led Zeppelin',
    album: { title: 'Led Zeppelin IV', year: 1971 },
  },
  {
    title: 'Hotel California', artist: 'Eagles',
    album: { title: 'Hotel California', year: 1976 },
  },
];

const sortedSongs = sortByProperty(songs, 'album.year', true);
console.log(sortedSongs);
```
Esto produciría la siguiente salida:
```javascript
[
  {
    title: 'Hotel California', artist: 'Eagles',
    album: { title: 'Hotel California', year: 1976 }
  },
  {
    title: 'Bohemian Rhapsody', artist: 'Queen',
    album: { title: 'A Night at the Opera', year: 1975 }
  },
  {
    title: 'Stairway to Heaven', artist: 'Led Zeppelin',
    album: { title: 'Led Zeppelin IV', year: 1971 }
  }
]
```
___
#### _inArrayObjects.getMaxPropertyValue_
  
```javascript
import { getMaxPropertyValue } from 'tsmuf/inArrayObjects';

```
Para
```javascript
```
Esto produciría la siguiente salida:
```javascript
```
### inDir
___
#### _inDir.read_
   Lee el contenido de un directorio.
   - De forma recursiva (opcional)
   - Parametros un objeto: { dirPath, recursive = false }
   - Devuelve: {  files: string[];  error?: Error;}
```javascript
import { read } from 'tsmuf/inDir';

const path = '.';
const { error, files } = read({ dirPath: path });
if (files.length > 0) {
  console.log({ files });
}
```
___
#### _inDir.rename_
  Renombra a un arhivo o directorio.
   - Parametros: (pathCurrent: string, newName: string)
   - Devuelve: { mensaje: string; error?: Error }
```javascript
import { rename } from 'tsmuf/inDir';

const pathCurrent = './example/dir';
const newName = 'dirNewName';
const { error, mensaje } = rename(pathCurrent, newName);
if (!error) console.log(mensaje); 
```
___
#### _inDir.move_
    Renombra a un arhivo o directorio.
   - Parametros: (pathCurrent: string, newPath: string)
   - Devuelve: { mensaje: string; error?: Error }
```javascript
import { move } from 'tsmuf/inDir';

const path = './example/dir';
const newPath = '.';
const { error, mensaje } = rename(path, newPath);
if (!error) console.log(mensaje); 
```
___
#### _inDir.del_
  
```javascript
import { del } from 'tsmuf/inDir';

const path = '';
const { error, mensaje } = del(path);
if (error) 
  console.log(error); 
else if 
  console.log(mensaje); 
```
___
#### _inDir.getStats_
    Devuelve la información de los stats de un archivo o directorio.
   - Parametros: (path: string)
   - Devuelve: 
```typescript
{
  isFile: boolean;
  isDirectory: boolean;
  size: number;
  createdTime: Date;
  modifiedTime: Date;
}
```
```javascript
import { getStats } from 'tsmuf/inDir';

const path = 'C:';
const stats = getStats(path);
console.log(stats); 
```
### inFile
___
#### _inFile.write_
   Crea, añade o sobreescribe contenido de un archivo
    - Parametros: (path: string, content: string, option: 'create' | 'append' | 'overwrite')
    - 
```javascript
import { write } from 'tsmuf/inFile';

const path = './text.txt';
const { error, mensaje } = write(path, 'content', 'create');
if (!error) 
  console.log(mensaje); 
```
___
#### _inFile.rename_ 
```javascript
import { rename } from 'tsmuf/inFile';

const patFile = './example/file.txt';
const newName = 'fileRenamed.txt';
const { error, mensaje } = rename(patFile, newName);
if (!error) console.log(mensaje); 
```
#### _inFile.move_
```javascript
import { move } from 'tsmuf/inFile';

const pathFile = './example/file.txt';
const newPath = '.';
const { error, mensaje } = rename(pathFile, newPath);
if (!error) console.log(mensaje); 
```
___
#### _inFile.del_
```javascript
import { del } from 'tsmuf/inFile';

const path = '';
const { error, mensaje } = del(path);
if (error) 
  console.log(error); 
else if 
  console.log(mensaje); 
```
___
#### _inFile.getStats_
    Devuelve la información de los stats de un archivo o directorio.
   - Parametros: (path: string)
   - Devuelve: 
```typescript
{
  isFile: boolean;
  isDirectory: boolean;
  size: number;
  createdTime: Date;
  modifiedTime: Date;
}
```
```javascript
import { getStats } from 'tsmuf/inFile';

const pathFile = 'C:';
const stats = getStats(pathFile);
console.log(stats); 
```
### inObject
___
#### _inObject.getCountByValues_
  
```javascript
import { getCountByValues } from 'tsmuf/inObject';

const input = '';
const output = getCountByValues(input);
console.log(output); 
```
  
```javascript
```
Salida:
```javascript
```
___
#### _inObject.getMaxValue_
  
```javascript
import { getMaxValue } from 'tsmuf/inObject';

const input = '';
const output = getMaxValue(input);
console.log(output); 
```
  
```javascript
```
Salida:
```javascript
```
___
#### _inObject.isEmpty_
  
```javascript
import { isEmpty } from 'tsmuf/inObject';

const input = '';
const output = isEmpty(input);
console.log(output); 
```
  
```javascript
```
Salida:
```javascript
```
___
#### _inObject.mapKeys_
  
```javascript
import { mapKeys } from 'tsmuf/inObject';

const input = '';
const output = mapKeys(input);
console.log(output); 
```
  
```javascript
```
Salida:
```javascript
```
___
#### _inObject.mergeDeep_
  
```javascript
import { mergeDeep } from 'tsmuf/inObject';

const input = '';
const output = mergeDeep(input);
console.log(output); 
```
  
```javascript
```
Salida:
```javascript
```
___
#### _inObject.sortByKey_
  
```javascript
import { sortByKey } from 'tsmuf/inObject';

const input = '';
const output = sortByKey(input);
console.log(output); 
```
  
```javascript
```
Salida:
```javascript
```
___
#### _inObject.inNestedProperty_
  
```javascript
import { inNestedProperty } from 'tsmuf/inObject';

const input = '';
const output = inNestedProperty(input);
console.log(output); 
```
  
```javascript
```
Salida:
```javascript
```
### inRegex
___
#### _inRegex.isSnakeCase_
  
```javascript
import { isSnakeCase } from 'tsmuf/inRegex';

const input = '';
const output = isSnakeCase(input);
console.log(output); 
```
  
```javascript
```
Salida:
```javascript
```
___
#### _inRegex.isCamelCase_
  
```javascript
import { isCamelCase } from 'tsmuf/inRegex';

const input = '';
const output = isCamelCase(input);
console.log(output); 
```
  
```javascript
```
Salida:
```javascript
```
___
#### _inRegex.isCapitalized_
  
```javascript
import { isCapitalized } from 'tsmuf/inRegex';

const input = '';
const output = isCapitalized(input);
console.log(output); 
```
  
```javascript
```
Salida:
```javascript
```
___
#### _inRegex.isWord_
  
```javascript
import { isWord } from 'tsmuf/inRegex';

const input = '';
const output = isWord(input);
console.log(output); 
```
  
```javascript
```
Salida:
```javascript
```
### inString
___
#### _inString.camelToSnake_
  
```javascript
import { camelToSnake } from 'tsmuf/inString';

const input = '';
const output = camelToSnake(input);
console.log(output); 
```
  
```javascript
```
Salida:
```javascript
```
___
#### _inString.snakeToCamel_
  
```javascript
import { snakeToCamel } from 'tsmuf/inString';

const input = '';
const output = snakeToCamel(input);
console.log(output); 
```
  
```javascript
```
Salida:
```javascript
```
___
#### _inString.snakeToSnakeUpper_
  
```javascript
import { snakeToSnakeUpper } from 'tsmuf/inString';

const input = '';
const output = snakeToSnakeUpper(input);
console.log(output); 
```
  
```javascript
```
Salida:
```javascript
```
___
#### _inString.toCamelAndSnakeCase_
  
```javascript
import { toCamelAndSnakeCase } from 'tsmuf/inString';

const input = '';
const output = toCamelAndSnakeCase(input);
console.log(output); 
```
  
```javascript
```
Salida:
```javascript
```

## Licencia
 Este proyecto está bajo la licencia [MIT](LICENSE). Consulta el archivo [LICENSE](LICENSE) para obtener más información.
