/**
 * @file 暂时用到了警告（warn）部分
 */
/**
 * @description 'noop'是一个空函数
 */
import { noop } from 'shared/util';

/**
 * 关于Vue和杂七杂八的配置
 */
import config from '../config';

export let warn = noop
/**
 * @todo something unfilling
 */

/**
 * @todo unknown 
 */
export let generateComponentTrace = (noop: any) // work around flow check


/**
 * @todo something unfilling
 */

if (process.env.NODE_ENV !== 'production') {
    const hasConsole = typeof console !== undefined

    /**
     * @description 这个正则会匹配到开始字符或以[-_]后面跟一个字母或者数字,
     * '(?:)'非捕获括号,匹配项不能被$1这种访问到
     * '\w' 等同于 [A-Za-z0-9_]
     * '^' 匹配输入开始
     */
    const classifyRE = /(?:^|[-_])(\w)/g

    /**
     * 
     * @param {String} str 
     * @description 会把字符串的首字母大写并转为驼峰写法；如：'to-upper_case' 转化为 'ToUpperCase'
     */
    const classify = str => str.replace(classify, c => c.toUpperCase()).replace(/[-_]/g, '')
    
    warn = (msg, vm) => {
        /**
         * @todo unknown
         */
        const trace = vm ? generateComponentTrace(vm) : ''

        if (config.warnHandler) {
            /**
             * @todo unknown
             * 虽然src/core/config.js中声明了warnHandler, 但是并没有定义
             */
            config.warnHandler.call(null, msg, vm, trace)
        } else if (hasConsole && (!config.slient)) {
            console.log(`[Vue warn]: ${msg}${trace}`)
        }
    }
}

/**
 * @todo something unfilling
 */

generateComponentTrace = vm => {
    /**
     * @description '_isVue'在src/core/instance/init.js中添加到Vue原型上
     * 那个位置添加的注释是：a flag to avoid this being observed
     */
    if (vm._isVue && vm.$parent) {
        const tree = []
        /**
         * @todo CURRENT
         */
    }
}

