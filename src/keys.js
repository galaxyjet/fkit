/**
 * Gets the keys of an object.
 *
 * @param {Object} o An object.
 * @returns {Array} A list of keys for the properties of the object `o`.
 *
 * @example
 *
 * var person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * F.keys(person) // ['name', 'age', 'city']
 */
export default function keys (o) {
  return Object.keys(o)
}
