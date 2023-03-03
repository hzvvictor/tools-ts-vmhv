/**
 * Returns true if the small array is a subset of the big array.
 *
 * @param smallArr - The smaller array
 * @param bigArr - The bigger array
 *
 * @returns True if the small array is a subset of the big array
 */
export default function isSubset(smallArr: any[], bigArr: any[]): boolean {
  return smallArr.every(element => bigArr.includes(element));
}
