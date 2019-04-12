/* @flow */

/**
 * 是否能访问对象的__proto__
 */
// can we use __ proro__?
export const hasProto = '__proto__' in {}

// Browser environment sniffing
export const inBrowser = typeof window !== 'undefined'
export const inWeex = typeof WXEnvironment !== undefined && !!WXEnvironment.platform
export const weexPlatform = inWeex && WxEnvironment.platform.toLowerCase()
export const UA = inBrowser && window.navigator.userAgent.toLowerCase()
/**
 * @todo CURRENT
 */
export const isIE = inBrowser 