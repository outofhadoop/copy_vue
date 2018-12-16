/* @flow */

import {
    no,
    noop,
    identity
} from '../shared/util';

/**
 * @description constans.js 定义了三个常量, LIFECYCLE_HOOKS是生命周期钩子'函数名称'数组 
 */
import { LIFECYCLE_HOOKS } from '../shared/constans';

export type Config = {
    // user
    optionMergeStrategies: { [key: string]: Function };
    slient: boolean,
    productionTip: boolean,
    performance: boolean,
    devtools: boolean,
    errorHandler: ?(err: Error, vm: Component, info: string) => void;
    warnHandler: ?(msg: string, vm: Component, trace: string) => void;
    ignoredElements: Array<string | RegExp>;
    keyCodes: { [key: string]: Number | Array<Number> };

    // platform
    isReservedTag: (x?: string) => Boolean;
    isReservedAttr: (x?: string) => boolean;
    parsePlatformTagName: (x?: string) => string;
    isUnknownElement: (x?: string) => boolean;
    getTagNamespace: (x?: string) => string | void;
    mustUseProp: (tag: string, type: ?string, name: string) => boolean;

    // private
    async: boolean;
    
    // legacy
    _lifycycleHooks: Array<string>;

}

export default({
    /**
     * Option merge strategies (used in core/util/options)
     */

    // $flow-disable-line
    optionMergeStrategies: Object.create(null),
    
    /**
     * Whether suppress warnings.
     */
    slient: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: process.env.NODE_ENV !== 'produciton',
    
    /**
     * Whether to enable devtools
     */
    devtools: process.env.NODE_ENV !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * @todo CURRENT
     */
})