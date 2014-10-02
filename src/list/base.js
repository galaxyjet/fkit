'use strict';

var fn = require('../fn');

var self;

/**
 * This module defines basic operations on lists.
 *
 * @private
 * @module fkit/list/base
 * @author Josh Bassett
 */
self = module.exports = {
  /**
   * Returns true if `as` is a string or an array of strings.
   *
   * @private
   */
  isString: function(as) {
    return typeof as === 'string' || (as.length > 0 && as.reduce(function(a, b) { return a && (typeof b === 'string'); }, true));
  },

  /**
   * Returns an empty monoid of `as`.
   *
   * @private
   */
  mempty: function(as) {
    return self.isString(as) ? '' : [];
  },

  /**
   * Returns `a` in a pure context.
   *
   * @private
   */
  pure: function(a) {
    return self.isString(a) ? a : [a];
  },

  /**
   * Converts the list of `as` to an array.
   *
   * @private
   */
  toArray: function(as) {
    return (typeof as === 'string') ? as.split('') : as;
  },

  /**
   * Appends the value `a` to the list of `bs`.
   *
   * @example
   *   append(3, [1, 2]); // [1, 2, 3]
   *   append('o', 'fo'); // 'foo'
   *
   * @curried
   * @function
   * @param a A value.
   * @param bs A list.
   * @returns A new list.
   */
  append: fn.curry(function(a, bs) {
    return (typeof bs === 'string') ? (bs + a) : bs.concat(a);
  }),

  /**
   * Prepends the value `a` to the list of `bs`.
   *
   * @example
   *   prepend(1, [2, 3]); // [1, 2, 3]
   *   prepend('f', 'oo'); // 'foo'
   *
   * @curried
   * @function
   * @param a A value.
   * @param bs A list.
   * @returns A new list.
   */
  prepend: fn.curry(function(a, bs) {
    return (typeof bs === 'string') ? (a + bs) : [a].concat(bs);
  }),

  /**
   * Surrounds the list of `cs` with the values `a` and `b`.
   *
   * @example
   *   surround(0, 4, [1, 2, 3]); // [0, 1, 2, 3, 4]
   *   surround('(', ')', 'foo'); // '(foo)'
   *
   * @curried
   * @function
   * @param a A value.
   * @param b A value.
   * @param cs A list.
   * @returns A new list.
   */
  surround: fn.curry(function(a, b, cs) {
    return self.append(b, self.prepend(a, cs));
  }),

  /**
   * @summary Gets the first element in a list.
   *
   * @example
   *   head([]); // undefined
   *   head([1, 2, 3]); // 1
   *   head(''); // undefined
   *   head('foo'); // 'f'
   *
   * @param as A list.
   * @returns A value or `undefined` if the list is empty.
   */
  head: function(as) { return as[0]; },

  /**
   * @summary Get the elements after the first element in a list.
   *
   * @example
   *   tail([1, 2, 3]); // [2, 3]
   *   tail('foo'); // 'oo'
   *
   * @param as A list.
   * @returns A new list.
   */
  tail: function(as) { return as.slice(1); },

  /**
   * @summary Gets the elements before the last element in a list.
   *
   * @example
   *   init([1, 2, 3]); // [1, 2]
   *   init('foo'); // 'fo'
   *
   * @param as A list.
   * @returns A new list.
   */
  init: function(as) { return as.slice(0, as.length - 1); },

  /**
   * @summary Gets the last element in a list.
   *
   * @example
   *   last([]); // undefined
   *   last([1, 2, 3]); // 3
   *   last(''); // undefined
   *   last('foo'); // 'o'
   *
   * @param as A list.
   * @returns A value or `undefined` if the list is empty.
   */
  last: function(as) { return as[as.length - 1]; },

  /**
   * @summary Gets the length of a list.
   *
   * @example
   *   head([1, 2, 3]); // 3
   *   head('foo'); // 3
   *
   * @function
   * @param as A list.
   * @returns A number.
   */
  length: function(as) { return as.length; },

  /**
   * @summary Test whether a list is empty.
   *
   * @example
   *   empty([1, 2, 3]); // false
   *   empty([]); // true
   *   empty('foo'); // false
   *   empty(''); // true
   *
   * @param as A list.
   * @returns A boolean value.
   */
  empty: function(as) { return as.length === 0; },
};
