import curry from './curry'
import find from './uncurried/find'

/**
 * Finds the first value in a list that satisfies a predicate function.
 *
 * @function
 * @param {Function} p The predicate function.
 * @param {Array|String} as The list.
 * @returns A value in the list of `as` that satisfies the predicate function
 * `p`, or `undefined` if no value was found.
 * @example
 *
 * import { eq, find, gt } from 'fkit'
 *
 * find(gt(1), []) // undefined
 * find(gt(1), [1, 2, 3]) // 2
 *
 * find(eq('o'), '') // undefined
 * find(eq('o'), 'foo') // 'o'
 */
export default curry(find)
