import curry from './curry'

/**
 * Returns the result of replacing term `a` with the string `b` in the string
 * `s`.
 *
 * @summary Replaces a term in a string.
 *
 * @example
 *
 * F.replace('r', 'z', 'bar') // baz
 * F.replace(/^hello/, 'goodbye', 'hello world!') // goodbye world!
 *
 * @curried
 * @function
 * @param a A string or a regexp.
 * @param b A string.
 * @param s A string.
 * @returns A new string.
 */
export default curry((a, b, s) => s.replace(a, b))