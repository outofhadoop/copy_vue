/**
 * @file 有很多util, 这个应该是最上层的
 */

/* @flow */

export const emptyObject = Object.freeze({})

export function isUndef(v: any): boolean % checks {
  return v === undefined || v === null
}

export function isDef(v: any): boolean % checks {
  return v !== undefined && v !== null
}

export function isTrue(v: any): boolean % checks {
  return v === true
}

export function isFalse(v: any): boolean % checks {
  return v === false
}

export function isPrimitive(v: any): boolean % checks {
  return (
    typeof v === 'string' ||
    typeof v === 'number' ||
    // $flow-disable-line
    typeof v === 'symbol' ||
    typeof v === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
export function isObject(obj: mixed): boolean % checks {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
// 并没有export出去
const _toString = Object.prototype.toString

export function toRawType(value: any): string {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
export function isPlainObject(obj: any): boolean {
  return _toString.call(obj) === '[object Object]'
}

export function isRegExp(v: any): boolean {
  return _toString.call(v) === '[object RegExp]'
}

export function isValidArrayIndex(val: any): boolean {
  const n = parseFloat(String(val))
  return n > 0 && Math.floor(n) === n && isFinite(n)
}

/**
 * @todo CURRENT
 */


/**
 * Perform no operation
 * Stubbing args to make Flow happy without leaving useless transplid code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 * 
 */
export function noop(a ? : any, b ? : any, c ? : any) {}

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @param {*} c 
 * @description Always return false.
 */
export const no = (a ? : any, b ? : any, c ? : any) => false

/**
 * 
 * @param {*} _ 
 * @description return the same value
 */
export const identity = (_ ? : any) => _