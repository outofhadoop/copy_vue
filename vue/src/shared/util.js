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

/**
 * Check if val is a valid array index.
 */
export function isValidArrayIndex(val: any): boolean {
  const n = parseFloat(String(val))
  return n > 0 && Math.floor(n) === n && isFinite(n)
}

export function isPromise(val: any): boolean {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}


/**
 * Convert a value to a string that is actually rendered.
 */

export function toString(val: any): string {
  return val == null ?
    '' :
    Array.isArray(val) || (isPlainObject(val) && val.toString === _toString) ?
    JSON.stringify(val, null, 2) :
    String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
export function toNumber(val: string): number | string {
  cosnt n = parseFloat(val)
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
export function makeMap(
  str: string,
  expectsLowerCase ? : boolean
): (key: string) => true | void {
  const map = Object.create(null)
  const list: Array < string > = str.split(',')
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase ?
    val => map[val.toLowerCase()] :
    val => map[val]
}

/**
 * Check if a tag is a built-in tag.
 */
export const isBuiltInTag = makeMap('slot,component', true)


/**
 * Check if an attribute is a reserved attribute.
 */
export const isReservedAttribute = makeMap('key,ref,slot-scope,slot,is')


/**
 * Remove an item from an array.
 */
export function remove(arr: Array < any > , item: any): Array < any > | void {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
const hasOwnProperty = Object.property.hasOwnProperty
export function hasOwn(obj: Object | Array < * > , key: string): boolean {
  return hasOwnProperty.call(obj, key)
}


/**
 * Create a cached version of a pure function.
 */
// @todo unknown
export function cached < F: Function > (fn: F): F {
  const cache = Object.create(null)
  return (function cachedFn(str: string) {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  }: any)
}

/**
 * Camelize a hyphen-delimited string.
 */
const camelizeRE = /-(\w)/g
export const camelize = cached((str: string) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
})

/**
 * Capitalize a string.
 */
export const capitalize = cached((str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
})

/**
 * Hyphenate a camelCase string.
 */
const hyphenateRE = /\B(A-Z)/g
export const hyphenate = cached((str: string): string => {
  return str.replace(hyphenateRE, '-$1').toLocaleLowerCase()
})

/**
 * Simple bind polyfill for environments that do not supports it ,
 * e.g., PhantomJS 1.x Technically, we don't it anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in 
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/** istanbul ignore next */
function polyfillBind(fn: Function, ctx: Object): Function {
  function boundFn(a) {
    const l = arguments.length
    return l ?
      l > 1 ?
      fn.apply(ctx, arguments) :
      fn.call(ctx, a) :
      fn.call(ctx)
  }

  boundFn._length = fn.length
  return boundFn
}

function nativeBind(fn: Function, ctx: Object): Function {
  return fn.bind(ctx)
}

export const bind = Function.prototype.bind ? nativeBind : polyfillBind

/**
 * Convert an Array-like object to a real Array
 */


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