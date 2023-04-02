# tsmuf
Una libreria que contiene utilidades para trabajar con javascript/ts.
- Se encuentra en fase de desarrollo (BETA). 
- No soporta en su totalidad a Typescript 

## Instalación
1. Instala las dependencias: `npm install tsmuf`
2. Importa las librerias => import { InArray , InString, ... } from 'tsmuf';
3. Usa las funciones de la libreria;

## Uso
  Es importante tener en cuenta que se recomienda utilizar JavaScript en lugar de TypeScript para evitar posibles errores de compatibilidad. Además, debes asegurarte de agregar la opción `type: "module"` en el archivo `package.json` para que se puedan importar los módulos adecuadamente.
  La librería incluye las siguientes funciones y utilidades:

## Indice
- [Array](#InArray)
- [Array Objects](#InArrayObjects)
- [File System](#file-system)
- [Object](#InObject)
- [Regex](#InRegex)
- [String](#InString)
- [Cli](#InCli)


## InArray
### Indice
- [isSubset](#InArrayisSubset)
- [getMaxValue](#InArraygetMaxValue)
- [removeDuplicates](#InArrayremoveDuplicates)
- [isEmpty](#InArrayisEmpty)
- [last](#InArraylast)
### Impotacion
```javascript
import { InArray } from 'tsmuf';
```

### _InArray.isSubset_
  Comprueba si un arreglo es un subconjunto de otro arreglo más grande.

```javascript
const { isSubset } = InArray;

const smallArr = [2, 4];
const bigArr = [2, 4, 6];

console.log(isSubset(smallArr, bigArr)); // true
```
___
| 🏠 |[Indice principal](#indice)|🔼|[Indice](#indice-1)
|--|--|--|--|
### _InArray.getMaxValue_
  Encuentra el valor máximo y su índice en un arreglo de números.

```javascript
const { getMaxValue } = InArray;

const numeros = [5, 9, 3, 2, 8, 1];
const resultado = getMaxValue(numeros);
console.log(`El valor máximo es ${resultado.value} y se encuentra en la posición ${resultado.index}`)//`El valor máximo es 8 y se encuentra en la posición 4
```
___
| 🏠 |[Indice principal](#indice)|🔼|[Indice](#indice-1)
|--|--|--|--|
### _InArray.removeDuplicates_
  Elimina elementos duplicados de un array y devuelve un nuevo array sin repeticiones.

```javascript
const { removeDuplicates } = InArray;
console.log(removeDuplicates([1, 2, 1, 2]))// [1, 2]
console.log(removeDuplicates([100,200,100]))// [100, 200]
```
___
| 🏠 |[Indice principal](#indice)|🔼|[Indice](#indice-1)
|--|--|--|--|
### _InArray.isEmpty_
  Esta función verifica si un array está vacío.

```javascript
const { isEmpty } = InArray;

const result1 = isEmpty([1, 2, 3]); // false
const result2 = isEmpty([]); // true
```
___
| 🏠 |[Indice principal](#indice)|🔼|[Indice](#indice-1)
|--|--|--|--|
### _InArray.last_
  Esta función obtiene el último elemento de un arreglo.

```javascript
import { InArray } from 'tsmuf';

const result1 = InArray.last([1, 2, 3]); // 3
const result2 = InArray.last([900, 300]); // 300
```
| 🏠 |[Indice principal](#indice)|🔼|[Indice](#indice-1)
|--|--|--|--|
## InArrayObjects
___
### Indice 
- [Indice Principal 🏠](#indice)
- [count](#InArrayObjectsCount)
- [setPropByFilter](#InArrayObjectsSetPropByFilter)
- [groupByNestedProperty](#InArrayObjectsGroupByNestedProperty)
- [mergeArraysByProperty](#InArrayObjectsMergeArraysByProperty)
- [setPropByPropValue](#InArrayObjectsSetPropByPropValue)
- [sortByProperty](#InArrayObjectsSortByProperty)
### Impotacion
```javascript
import { InArrayObjects } from 'tsmuf';
```
### _InArrayObjects.count_
  Cuenta el número de objetos en un arreglo que tienen una propiedad anidada igual a un valor dado.

```javascript
// Ejemplo de uso de la función count
const data = [
  { name: 'Alice', age: 30, address: { city: 'New York', state: 'NY' } },
  { name: 'Bob', age: 25, address: { city: 'Los Angeles', state: 'CA' } },
  { name: 'Charlie', age: 40, address: { city: 'Chicago', state: 'IL' } },
  { name: 'Dave', age: 35, address: { city: 'New York', state: 'NY' } }
];
// Contar el número de objetos con city = 'New York'
const result = InArrayObjects.count(data, 'address.city', 'New York');
console.log(result); // 2
```
___
| 🏠 |[Indice principal](#indice)|🔼|[Indice ](#indice-2) 
|--|--|--|--|
### _InArrayObjects.setPropByFilter_
  Actualiza las propiedades de un array de objetos en base a una propiedad anidada y valor constante.
  Supongamos que tenemos un arreglo de objetos que representan productos y queremos actualizar el precio de aquellos que tengan una categoría/precio especifica:
  | Producto | Categoria | Precio | Nuevo precio
  | ------ | ------ | ------ | ------ | 
  | Producto A | Category A | 10 | 10
  | Producto B | Category B | 20 | 50
  | Producto C | Category A | 30 | 10
Javascript
```javascript
const { setPropByFilter } = InArrayObjects;
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
TypeScript
```typescript
const products = [
  { id: 1, name: 'Producto A', category: 'Category A', price: 10 },
  { id: 2, name: 'Producto B', category: 'Category B', price: 20 },
  { id: 3, name: 'Producto C', category: 'Category A', price: 30 }
];

const updates = [
  { property: 'price', value: 15, when: (obj: { category: string; }) => obj.category === 'Category A' },
  { property: 'price', value: 50, when: (obj: { price: number; }) => obj.price === 20 }
];

const updatedProducts = InArrayObjects.setPropByFilter(products, updates);

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
| 🏠 |[Indice principal](#indice)|🔼|[Indice ](#indice-2) 
|--|--|--|--|
### _InArrayObjects.groupByNestedProperty_
  Agrupa los elementos de un arreglo por el valor de una propiedad anidada dentro de cada elemento.
```javascript
const { mergeArraysByProperty } = InArrayObjects;

const personas = [
  { nombre: "Victor", datos: { persona: { edad: 30, altura: 170 } } },
  { nombre: "Martha", datos: { persona: { edad: 25, altura: 165 } } },
  { nombre: "Pedro", datos: { persona: { edad: 30, altura: 180 } } },
  { nombre: "Lucía", datos: { persona: { edad: 25, altura: 175 } } }
];
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
| 🏠 |[Indice principal](#indice)|🔼|[Indice ](#indice-2) 
|--|--|--|--|
### _InArrayObjects.mergeArraysByProperty_
  Agrupa por una propiedad y fusiona los arrays.
  Devolviendo un objeto con las propiedades agrupadas como claves y los valores de los arrays combinados como valores.
  Por ejemplo queremos agruparlos por 'country' los array de 'customers' con 'orders'.
```javascript
  const { mergeArraysByProperty } = InArrayObjects;
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
| 🏠 |[Indice principal](#indice)|🔼|[Indice ](#indice-2) 
|--|--|--|--|
### _InArrayObjects.setPropByPropValue_
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
const { setPropByPropValue } = InArrayObjects;

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
| 🏠 |[Indice principal](#indice)|🔼|[Indice ](#indice-2) 
|--|--|--|--|
### _InArrayObjects.sortByProperty_
  Ordena un array de objetos por una propiedad anidada específica, de manera ascendente o descendente.
Supongamos que tenemos un array de objetos que representan canciones, y queremos ordenarlas por el año de lanzamiento de manera descendente:
```javascript
const { sortByProperty } = InArrayObjects;

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
| 🏠 |[Indice principal](#indice)|🔼|[Indice ](#indice-2) 
|--|--|--|--|
## File System
### Indice 
- [Indice Principal 🏠](#indice)
- [File write](#inFileWrite)
- [Dir read](#inDirRead)
- [Dir add](#inDirAdd)
- [Rename](#rename)
- [Move](#move)
- [Del](#del)
- [GetStats](#getStats)
___
### Importacion
```javascript
import { inFile } from 'tsmuf';
```
```javascript
import { InDir } from 'tsmuf';
```
### Valor de retorno
La función devuelve un objeto Response con los siguientes campos:
 - mensaje: Un mensaje que indica si la operación se realizó con éxito.
 - error (opcional): Si se produce un error, este campo contendrá una cadena de texto que describe el error.
 Siendo InDir.read la excepcion ya que retorna:
 - files: Archivos obtenidos
 - error (opcional): Si se produce un error, estara definido.
### Recomendacion de uso retorno
```javascript
const { error, mensaje } = inFile // Una funcion de InFile o InDir;

// Mostramos el error (throw) o (return) para que no prosiga el flujo del codigo
if (error) throw error;

// Flujo normal 
console.log(mensaje);
```


### _inFile.write_
   Crea, añade o sobreescribe contenido de un archivo
    - Parametros: (path: string, content: string, option: 'create' | 'append' | 'overwrite')
```javascript
const path = './text.txt';
const { error, mensaje } = inFile.write(path, 'content', 'create');
```
| 🏠 |[Indice principal](#indice)|🔼|[Indice](#indice-3)
|--|--|--|--|
___
### _inDir.read_
La función `read` permite leer el contenido de un directorioes, es posible leer de forma recursiva para obtener los archivos de los subdirectorios.

Se puede llamar a la función read de la siguiente forma:
```javascript
const { error, files } = inDir.read({ dirPath: '/ruta/del/directorio', recursive: true });
```
- `dirPath` es la ruta del directorio a leer
- `recursive` booleano opcional, si se desea realizar la lectura de forma recursiva.

Retorna un objeto con:
- `error` Un error en caso de existir algún error en la lectura del directorio
- `files` Es un array con la lista de archivos encontrados en el directorio y sus subdirectorios.

| 🏠 |[Indice principal](#indice)|🔼|[Indice](#indice-3)
|--|--|--|--|
___
### _inDir.add_
Crea un directorio en la ruta especificada.
#### Parámetros
- `path` (string): La ruta donde se creará el directorio.
Se puede llamar a la función read de la siguiente forma:
```javascript
// Crear un directorio en la carpeta actual
const resultado = inDir.add('./nuevo-directorio');
```
| 🏠 |[Indice principal](#indice)|🔼|[Indice](#indice-3)
|--|--|--|--|
___
### _rename_
La función `rename` permite renombrar un archivo o un directorio en una ruta determinada.

Se puede llamar a la función rename pasándole como argumentos:
 - La ruta del archivo o directorio a renombrar
 - El nuevo nombre.
```javascript
const pathCurrent = '/ruta/al/archivo_o_directorio';
const newName = 'nuevo_nombre';

// InDir.rename || InFile.rename 
const { error, mensaje } = InDir.rename(pathCurrent, newName);
```
| 🏠 |[Indice principal](#indice)|🔼|[Indice](#indice-3)
|--|--|--|--|
___
### _move_
  La función `move` permite mover un archivo o un directorio en una ruta determinada.
```javascript
// Ejemplo de uso de la función move para mover un archivo
const archivoActual = '/home/usuario/documentos/archivo.txt';
const nuevaUbicacion = '/home/usuario/respaldo/archivo.txt';

const { error, mensaje } = inDir.move(archivoActual, nuevaUbicacion);
```
| 🏠 |[Indice principal](#indice)|🔼|[Indice](#indice-3)
|--|--|--|--|
___
### _del_
Elimina un archivo o directorio en la ruta especificada.

#### Parámetros
 - path (obligatorio): Una cadena de texto que representa la ruta del archivo o directorio a eliminar.

#### Uso de la función del
```javascript
const path = '/ruta/a/mi/archivo.txt';
const response = inFile.del(path);
```
| 🏠 |[Indice principal](#indice)|🔼|[Indice](#indice-3)
|--|--|--|--|
___
### _getStats_
La función getStats permite obtener información sobre los stats de un archivo o directorio en una ruta específica.
#### Uso de la función getStats
Para utilizar la función `getStats`, primero se debe importar del módulo {inDir o inFile} de tsmuf
```javascript
import { InDir } from 'tsmuf'; // InDir.getStats
const { getStats } = InDir;
```
```javascript
import { InFile } from 'tsmuf'; // InFile.getStats
```
La función toma un parámetro path que representa la ruta del archivo o directorio que se quiere analizar. Retorna un objeto que contiene la información de los stats, como si es un archivo o directorio, el tamaño, la fecha de creación y la fecha de modificación. Si la ruta no existe o se produce un error al intentar obtener los stats, la función retorna null.
```javascript 
const { getStats } = InDir;

const statsInfo = getStats('/path/to/file');

if (statsInfo !== null) {
  console.log(statsInfo.isFile); // true
  console.log(statsInfo.isDirectory); // false
  console.log(statsInfo.size); // 1024
  console.log(statsInfo.createdTime); // Date('2022-02-28T20:30:00.000Z')
  console.log(statsInfo.modifiedTime); // Date('2022-03-01T10:45:00.000Z')
}
```
#### Interfaz
La función getStats utiliza la interfaz StatsInfo para representar la información de los stats de un archivo o directorio:
```typescript
interface StatsInfo {
  isFile: boolean; // Indica si es un archivo o no
  isDirectory: boolean; // Indica si es un directorio o no
  size: number; // El tamaño en bytes del archivo o directorio
  createdTime: Date; // La fecha de creación del archivo o directorio
  modifiedTime: Date; // La fecha de modificación del archivo o directorio
}
```
| 🏠 |[Indice principal](#indice)|🔼|[Indice](#indice-3)
|--|--|--|--|
___
## InObject
### Indice 
- [getCountByValues](#InObjectGetCountByValues)
- [getMaxValue](#InObjectGetMaxValue)
- [isEmpty](#InObjectIsEmpty)
- [mapKeys](#InObjectMapKeys)
- [mergeDeep](#InObjectMergeDeep)
- [sortByKey](#InObjectSortByKey)
- [inNestedProperty](#InObjectInNestedProperty)
___
### Importacion
```javascript
import { InObject } from 'tsmuf';
```
### _InObject.getCountByValues_
  Uso
```javascript
const object = {
  name: 'John',
  age: 30,
  address: {
    city: 'Mexico City',
    country: 'Mexico'
  },
  hobbies: ['reading', 'gaming']
};
const count = InObject.getCountByValues(object);
console.log(count({ 'address.city': 'Mexico City' })); // Retorna 1
console.log(count({ 'age': 30 })); // Retorna 1
console.log(count({ 'hobbies': 'reading' })); // Retorna 1
console.log(count({ 'hobbies': 'swiming' })); // Retorna 0
```
Salida:
```javascript
 1
 1
 1
 0
```
| 🏠 |[Indice principal](#indice)|🔼|[Indice](#indice-4)
|--|--|--|--|
___
### _InObject.getMaxValue_
La función getMaxValue toma un objeto con claves de tipo string y valores de tipo number, y devuelve el valor máximo y su clave correspondiente dentro del objeto.
```javascript
const obj = { a: 1, b: 5, c: 3 };
const max = InObject.getMaxValue(obj);

console.log(`El valor máximo es ${max.value} y su clave es "${max.key}"`);
// Output: El valor máximo es 5 y su clave es "b"
```
Salida:
```log
El valor máximo es 5 y su clave es "b"
```
| 🏠 |[Indice principal](#indice)|🔼|[Indice](#indice-4)
|--|--|--|--|
___
### _InObject.isEmpty_
La función isEmpty toma un objeto y devuelve true si está vacío, es decir, si no tiene ninguna propiedad. De lo contrario, devuelve false.

Para utilizar la función isEmpty, simplemente llámala con el objeto que deseas comprobar como argumento:
```javascript
const obj = { };
const empty = InObject.isEmpty(obj);

console.log(`¿El objeto está vacío? ${empty}`);
```
Salida:
```log
¿El objeto está vacío? true
```
| 🏠 |[Indice principal](#indice)|🔼|[Indice](#indice-4)
|--|--|--|--|
___
### _InObject.mapKeys_
La función `mapKeys` crea un nuevo objeto con las mismas propiedades que el objeto de origen, pero con los nombres de las propiedades transformadas por una función de mapeo.

Aquí está el ejemplo del uso de la función `mapKeys`:
```javascript

const myObject = { firstName: 'John', lastName: 'Doe' };
const newObject = InObject.mapKeys(myObject, (key) => key.toUpperCase());

console.log(newObject);
// Output: { FIRSTNAME: 'John', LASTNAME: 'Doe' }
```
Salida:
```javascript
{ Output: { FIRSTNAME: 'John', LASTNAME: 'Doe' } }
```
| 🏠 |[Indice principal](#indice)|🔼|[Indice](#indice-4)
|--|--|--|--|
___
### _InObject.mergeDeep_
La función mergeDeep toma una cantidad arbitraria de objetos como argumentos y devuelve un nuevo objeto que es la combinación profunda de todos ellos.

```javascript
const obj1 = { a: 1, b: { c: 2, } };
const obj2 = { b: { d: 3, }, e: 4 };
const merged = InObject.mergeDeep(obj1, obj2);
```
Salida:
```javascript
{ a: 1, b: { c: 2, d: 3, }, e: 4 }
```
| 🏠 |[Indice principal](#indice)|🔼|[Indice](#indice-4)
|--|--|--|--|
___
## InRegex
Funciones de InRegex
La librería InRegex proporciona varias funciones para validar diferentes patrones de texto.
Aquí te mostramos algunos ejemplos sencillos de cómo utilizar las funciones:
### Impotacion
```javascript
import { InRegex } from 'tsmuf';
```
___
### Indice 
- [isSnakeCase](#IsSnakeCase)
- [isCamelCase](#IsCamelCase)
- [isCapitalized](#IsCapitalized)
- [isSnakeCase](#IsSnakeCase)
- [isWord](#IsWord)
___
### isSnakeCase

```javascript
console.log(InRegex.isSnakeCase("snake_case")); // true
```
### isCamelCase

```javascript
console.log(InRegex.isCamelCase("camelCase")); // true
```
### isCapitalized

```javascript
console.log(InRegex.isCapitalized("Capitalized")); //true
```
### isWord

```javascript
console.log(InRegex.isWord("hello")); //true
```
## InString
La librería InString proporciona funciones para manipular y transformar cadenas de texto.
### Indice
- [camelToSnake](#InStringCamelToSnake)
- [snakeToCamel](#InStringSnakeToCamel)
- [snakeToSnakeCapitalized](#InStringSnakeToSnakeCapitalized)
- [toCamelAndSnakeCase](#InStringToCamelAndSnakeCase)
### Impotacion
```javascript
import { InString } from 'tsmuf';
```
___
### _InString.camelToSnake_
Convierte una cadena de texto en formato camelCase a formato snake_case.
```javascript
console.log(InString.camelToSnake('camelToSnake')); // camel_to_snake
```
### _InString.snakeToCamel_
Convierte una cadena de texto en formato snake_case a formato camelCase.
```javascript
console.log(InString.snakeToCamel('this_is_snake_case')); // thisIsSnakeCase
```
___
### _InString.snakeToSnakeCapitalized_
  Argumentos
 - `string`: El string que se desea convertir. Debe estar en formato snake_case.
 - `isFirstCapitalized` (opcional): Si se establece en true, la primera letra del resultado se capitalizará. Por defecto es `false`.
#### Ejemplo
```javascript
const { snakeToSnakeCapitalized } = InString;
console.log(snakeToSnakeCapitalized('snake_to_snake_capitalized')); // "snake_To_Snake_Capitalized"

console.log(snakeToSnakeCapitalized('snake_to_snake_capitalized', true)); // "Snake_To_Snake_Capitalized"
```
___
### _InString.capitalize_
  Argumentos
 - `string`: El string que se desea convertir. 
#### Ejemplo
```javascript
console.log(InString.capitalize('capitalize')); // "Capitalize"

console.log(InString.capitalize('word')); // "Word"
```
___
### _InString.toCamelCase_
  Argumentos
 - `string`: El string que se desea convertir. 
#### Ejemplo
```javascript
console.log(toCamelCase('to camel case')); // "toCamelCase"

console.log(toCamelCase('to_camel_case')); // "toCamelCase"
```
___
### _InString.toSnakeCase_
  Argumentos
 - `string`: El string que se desea convertir. 
#### Ejemplo
```javascript
console.log(InString.toSnakeCase('to snake case')); // to_snake_case

console.log(InString.toSnakeCase('toSnakeCase')); // to_snake_case
```
___
### _InString.toSpaceCase_
  Argumentos
 - `string`: El string que se desea convertir. 
#### Ejemplo
```javascript
console.log(InString.toSpaceCase('toSpaceCase'));//to Space Case

console.log(InString.toSpaceCase('to_Space_Case'));//to Space Case
```
___
### _InString.toTitleCase_
  Argumentos
 - `string`: El string que se desea convertir. 
#### Ejemplo
```javascript
console.log(InString.toTitleCase('to title case'));//To Title Case
console.log(InString.toTitleCase('to_title_case'));//To_Title_Case
console.log(InString.toTitleCase('TO-tITLE-CAse'));//To-Title-Case
```
___
## InCli
### Indice
- [question](#InCliQuestion)
### Impotacion
```javascript
import { InCli } from 'tsmuf';
```
___
### _InCli.question_
Hace una pregunta en la terminal usando las utilidades integradas de nodejs.

Ejemplo queremos saber la edad:
```javascript
InCli.question('Introduce la edad: ')
  .then(res => console.log(`La edad es ${res}`))
```
He introducimos 21 en la consola, el resultado seria:
```log
"La edad es 21"
```
___

## Licencia
 Este proyecto está bajo la licencia [MIT](LICENSE). Consulta el archivo [LICENSE](LICENSE) para obtener más información.
