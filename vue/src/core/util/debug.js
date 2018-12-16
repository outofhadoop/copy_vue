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

if (process.env.NODE_ENV !== 'production') {
    const hasConsole = typeof console !== undefined
    /**
     * @todo CURRENT
     */
}


