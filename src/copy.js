import variadic from './variadic'
import { extend } from './util'

/**
 * Creates a copy of one or more objects.
 *
 * Properties with the same key will take precedence from right to left. The
 * copy will have the *same* prototype as the *first* object in the list.
 *
 * @function
 * @param {Array} os A list of objects.
 * @returns {Object} A copy of the objects in the list of `os`.
 *
 * @example
 *
 * var person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * F.copy(person, { name: 'Steve' }) // { name: 'Steve', age: 20, city: 'Melbourne' }
 */
export default variadic((o, ps) => extend(Object.create(Object.getPrototypeOf(o)), [o].concat(ps)))
