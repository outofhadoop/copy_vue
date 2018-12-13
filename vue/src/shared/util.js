/**
 * @file 有很多util, 这个应该是最上层的
 */

/* @flow */

/**
 * Perform no operation
 * Stubbing args to make Flow happy without leaving useless transplid code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 * 
 */
export function noop (a?: any, b?: any, c?: any) {}

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @param {*} c 
 * @description Always return false.
 */
export const no = (a?: any, b?: any, c?: any) => false

/**
 * 
 * @param {*} _ 
 * @description return the same value
 */
export const identity = (_?: any) => _