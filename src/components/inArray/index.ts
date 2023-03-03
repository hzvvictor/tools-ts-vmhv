import { keysToObject } from "../inArrayAndObject"
import getArrayOfMostRepeatedLength from "./getArrayOfMostRepeatedLength"
import getLengthArrDictionary from "./getLengthArrDictionary"
import getMaxValue from "./getMaxValue"
import isEmpty from "./isEmpty"
import removeDuplicates from "./removeDuplicates"

export {
  keysToObject, 
  
  getMaxValue,
  getArrayOfMostRepeatedLength,
  getLengthArrDictionary,
  removeDuplicates,
  isEmpty,
}
export default {
  keysToObject,

  getMaxValue,
  getArrayOfMostRepeatedLength,
  getLengthArrDictionary,
  removeDuplicates,
  isEmpty,
}


/**
 * Remove all occurrences of the specified item from the array.
 * @param arr The array to modify.
 * @param item The item to remove.
 * @returns The modified array.
 */
export function removeAll<T>(arr: T[], item: T): T[] {
  return arr.filter((x) => x !== item);
}

/**
 * Get the last item of the array.
 * @param arr The array to get the last item from.
 * @returns The last item of the array, or undefined if the array is empty.
 */
export function last<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

/**
 * Shuffle the items in the array.
 * @param arr The array to shuffle.
 * @returns The shuffled array.
 */
export function shuffle<T>(arr: T[]): T[] {
  return arr.sort(() => Math.random() - 0.5);
}
// Microcomponentes para manipular arrays

// // Función para obtener elementos únicos en un array
// export const unique = <T>(arr: T[]): T[] => [...new Set(arr)];

// Función para obtener la diferencia entre dos arrays
export const difference = <T>(arr1: T[], arr2: T[]): T[] => arr1.filter(x => !arr2.includes(x));

// Función para obtener la intersección entre dos arrays
export const intersection = <T>(arr1: T[], arr2: T[]): T[] => arr1.filter(x => arr2.includes(x));

// Función para obtener la unión entre dos arrays
export const union = <T>(arr1: T[], arr2: T[]): T[] => removeDuplicates([...arr1, ...arr2]);

// Función para obtener los primeros n elementos de un array
export const take = <T>(arr: T[], n: number): T[] => arr.slice(0, n);

// Función para obtener los últimos n elementos de un array
export const takeRight = <T>(arr: T[], n: number): T[] => arr.slice(Math.max(arr.length - n, 0));


// Función para contar la cantidad de veces que un elemento aparece en un array
export const countOccurrences = <T>(arr: T[], item: T): number => arr.filter(x => x === item).length;

// Función para ordenar un array numéricamente de forma ascendente o descendente
export const numericSort = (arr: number[], order: 'asc' | 'desc' = 'asc'): number[] =>
  arr.sort((a, b) => (order === 'asc' ? a - b : b - a));

// Función para obtener un array de n elementos aleatorios de otro array
export const sampleSize = <T>(arr: T[], n: number): T[] => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

// Función para obtener la media de los elementos de un array numérico
export const mean = (arr: number[]): number => arr.reduce((acc, val) => acc + val, 0) / arr.length;

// Función para obtener la mediana de los elementos de un array numérico
export const median = (arr: number[]): number => {
  const sorted = arr.sort();
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  } else {
    return sorted[middle];
  }
};


