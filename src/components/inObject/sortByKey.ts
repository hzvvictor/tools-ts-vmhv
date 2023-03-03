/**
 * Sort an object by the given key
 *
 * @param obj - The object to sort
 * @param key - The key to sort by
 *
 * @returns The sorted object
 */
export default function sortByKey(obj: object, key: string): object {
  const entries = Object.entries(obj);
  entries.sort(([keyA, valueA], [keyB, valueB]) => {
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });
  const sortedObj = Object.fromEntries(entries);
  return sortedObj;
}
