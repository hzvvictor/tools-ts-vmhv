/**
 * Check if object is empty.
 * @param obj - Object to check.
 * @returns True if object is empty, false otherwise.
 */
const isEmpty = (obj: Record<string, any>): boolean => (
  Object.keys(obj).length === 0
)
export default isEmpty;