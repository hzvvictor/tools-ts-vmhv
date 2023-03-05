# tsmuf

Aquí se proporciona una breve descripción del proyecto. 

## Instalación
1. Clona el repositorio: `git clone https://https://github.com/hzvvictor/tsmuf`
2. Accede al directorio del proyecto: `cd tsmuf`
3. Instala las dependencias: `npm install`

## Uso
  La librería incluye las siguientes funciones y utilidades:

### `inArray/isEmpty`
  Esta función verifica si un array está vacío.

  ```javascript
  import { isEmpty } from 'tsmuf/inArray';
  const result1 = isEmpty([1, 2, 3]); // false
  const result2 = isEmpty([]); // true
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
  Otras documentaciones se estan trabajando :)...

## Licencia
 Este proyecto está bajo la licencia [MIT](LICENSE). Consulta el archivo [LICENSE](LICENSE) para obtener más información.
