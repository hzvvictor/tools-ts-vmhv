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
### Indice
- [inArray.isSubset](#inArrayisSubset)
- [inArray.getMaxValue](#inArraygetMaxValue)
- [inArray.removeDuplicates](#inArrayremoveDuplicates)
- [inArray.isEmpty](#inArrayisEmpty)
- [inArray.last](#inArraylast)

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
#### Uso de la función read
La función `read` permite leer el contenido de un directorio y obtener los archivos encontrados en el mismo. También es posible realizar la lectura de forma recursiva para obtener los archivos de los subdirectorios.

Para utilizar esta función, se debe importar desde el archivo donde se desea utilizar de la siguiente forma:
```javascript
import { read } from 'tsmuf/inDir';
```
Luego, se puede llamar a la función read de la siguiente forma:
```javascript
const response = read({ dirPath: '/ruta/del/directorio', recursive: true });

if (response.error) {
  console.error(response.error);
} else {
  console.log(response.files);
}
```
Donde `dirPath` es la ruta del directorio a leer y `recursive` es un valor booleano opcional que indica si se desea realizar la lectura de forma recursiva. En la respuesta de la función se obtiene un objeto con la propiedad `files` que es un array con la lista de archivos encontrados en el directorio y sus subdirectorios.

En caso de existir algún error durante la lectura del directorio, se devuelve un objeto con la propiedad error que contiene el error generado.
___
#### _inDir.rename_ ||  _inFile.rename_
#### Uso de la función rename
  La función `rename` permite renombrar un archivo o un directorio en una ruta determinada.
##### Uso
Para utilizar la función rename, primero se debe importar del módulo tsmuf/inDir o tsmuf/inFile
```javascript
import { rename } from 'tsmuf/inDir';
```
```javascript
import { rename } from 'tsmuf/inFile';
```
 Luego se puede llamar a la función rename pasándole la ruta del archivo o directorio a renombrar y el nuevo nombre como argumentos.
```javascript
import { rename } from 'tsmuf/inDir';

const pathCurrent = '/ruta/al/archivo_o_directorio';
const newName = 'nuevo_nombre';

const response = rename(pathCurrent, newName);
if (response.error) {
  console.error(response.error);
} else {
  console.log(response.mensaje);
}
```
___
#### _inDir.move_ || _inFile.move_
#### Uso de la función move
  La función `move` permite mover un archivo o un directorio en una ruta determinada.
##### Uso
Para utilizar la función move, primero se debe importar del módulo tsmuf/inDir o tsmuf/inFile
```javascript
import { move } from 'tsmuf/inDir';
```
```javascript
import { move } from 'tsmuf/inFile';
```
  Ejemplo
```javascript
import { move } from 'tsmuf/inDir'

// Ejemplo de uso de la función move para mover un archivo
const archivoActual = '/home/usuario/documentos/archivo.txt';
const nuevaUbicacion = '/home/usuario/respaldo/archivo.txt';

const resultado = move(archivoActual, nuevaUbicacion);
if (resultado.error) {
  console.log(resultado.error);
} else {
  console.log(resultado.mensaje);
}
```
___
#### _inDir.del_ || _inFile.del_
Elimina un archivo o directorio en la ruta especificada.

##### Parámetros
 - path (obligatorio): Una cadena de texto que representa la ruta del archivo o directorio a eliminar.
##### Valor de retorno
La función devuelve un objeto Response con los siguientes campos:
 - mensaje: Un mensaje que indica si la operación se realizó con éxito.
 - error (opcional): Si se produce un error, este campo contendrá una cadena de texto que describe el error.
#### Uso de la función del
```javascript
import { del } from 'tsmuf/inDir'

const path = '/ruta/a/mi/archivo.txt';

const response = del(path);

if (response.error) {
  console.error(response.error);
} else {
  console.log(response.mensaje);
}

```
___
#### _inDir.getStats_ || _inFile.getStats_
La función getStats permite obtener información sobre los stats de un archivo o directorio en una ruta específica.
#### Uso de la función getStats
Para utilizar la función `getStats`, primero se debe importar del módulo tsmuf/inDir o tsmuf/inFile
```javascript
import { getStats } from 'tsmuf/inDir';
```
```javascript
import { getStats } from 'tsmuf/inFile';
```
La función toma un parámetro path que representa la ruta del archivo o directorio que se quiere analizar. Retorna un objeto que contiene la información de los stats, como si es un archivo o directorio, el tamaño, la fecha de creación y la fecha de modificación. Si la ruta no existe o se produce un error al intentar obtener los stats, la función retorna null.
```javascript 
import { getStats } from 'tsmuf/inDir';

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
### inFile
___
#### _inFile.write_
   Crea, añade o sobreescribe contenido de un archivo
    - Parametros: (path: string, content: string, option: 'create' | 'append' | 'overwrite')
```javascript
import { write } from 'tsmuf/inFile';

const path = './text.txt';
const { error, mensaje } = write(path, 'content', 'create');
if (!error) 
  console.log(mensaje); 
```
___
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
