# tsmuf

Aquí se proporciona una breve descripción del proyecto. 

## Instalación
1. Clona el repositorio: `git clone https://https://github.com/hzvvictor/tsmuf`
2. Accede al directorio del proyecto: `cd tsmuf`
3. Instala las dependencias: `npm install`

## Uso
  La librería incluye las siguientes funciones y utilidades:

### `inArray.isSubset`
  Comprueba si un arreglo es un subconjunto de otro arreglo más grande.

```javascript
import { inArray } from 'tsmuf';
const { isSubset } = inArray;

const smallArr = [2, 4];
const bigArr = [2, 4, 6];

console.log(isSubset(smallArr, bigArr)); // true
```
### `inArray.getMaxValue`
  Encuentra el valor máximo y su índice en un arreglo de números.

```javascript
import { inArray } from 'tsmuf';
const { getMaxValue } = inArray;

const numeros = [5, 9, 3, 2, 8, 1];
const resultado = getMaxValue(numeros);
console.log(`El valor máximo es ${resultado.value} y se encuentra en la posición ${resultado.index}`)//`El valor máximo es 8 y se encuentra en la posición 4
```
### `inArray.removeDuplicates`
  Elimina elementos duplicados de un array y devuelve un nuevo array sin repeticiones.

```javascript
import { inArray } from 'tsmuf';
const { removeDuplicates } = inArray;
console.log(removeDuplicates([1, 2, 1, 2]))// [1, 2]
console.log(removeDuplicates([100,200,100]))// [100, 200]
```
### `inArray.isEmpty`
  Esta función verifica si un array está vacío.

```javascript
import { inArray } from 'tsmuf';
const { isEmpty } = inArray;

const result1 = isEmpty([1, 2, 3]); // false
const result2 = isEmpty([]); // true
```
### `inArray.last`
  Esta función obtiene el último elemento de un arreglo.

```javascript
import { inArray } from 'tsmuf';

const result1 = inArray.last([1, 2, 3]); // 3
const result2 = inArray.last([900, 300]); // 300
```
### `inArray.setPropByFilter`
  Supongamos que tenemos un arreglo de objetos que representan productos y queremos actualizar el precio de aquellos que tengan una categoría específica:
  | Producto | Categoria | Precio | Actualizar
  | ------ | ------ | ------ | ------ |
  | Producto A | Category A | 10 | *
  | Producto B | Category B | 20 | 
  | Producto C | Category A | 30 | *

```javascript
import { inArrayObjects } from 'tsmuf';
const { setPropByFilter } = inArrayObjects;
const products = [
  { id: 1, name: 'Producto A', category: 'Category A', price: 10 },
  { id: 2, name: 'Producto B', category: 'Category B', price: 20 },
  { id: 3, name: 'Producto C', category: 'Category A', price: 30 }
];

const updates = [
  { property: 'price', value: 15, when: (obj) => obj.category === 'Category A' }
];

const updatedProducts = setPropByFilter(products, updates);

console.log(updatedProducts);
```
  Esto produciría la siguiente salida:
```javascript
[
  { id: 1, name: 'Producto A', category: 'Category A', price: 15 },
  { id: 2, name: 'Producto B', category: 'Category B', price: 20 },
  { id: 3, name: 'Producto C', category: 'Category A', price: 15 }
]
```

### `inArrayObjects.count`
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

### `inArrayObjects.groupByNestedProperty`
  Agrupa los elementos de un arreglo por el valor de una propiedad anidada dentro de cada elemento.
```javascript
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

## Licencia
 Este proyecto está bajo la licencia [MIT](LICENSE). Consulta el archivo [LICENSE](LICENSE) para obtener más información.
