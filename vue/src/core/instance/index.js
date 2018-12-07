/**
 * @file vue函数定义的地方
 */

/**
 * @description 定义函数，仅几行代码，其余都是动态拓展
 * @param {Object} options 这个参数会传进Vue._init函数里
 */
function Vue ( options ) {
  if (
    /**
     * @todo 暂未找到process的位置，（可能是webpack暴露出来的）
     */
    process.env.NODE_EVN !== 'production'
    &&
    /**
     * @description 安全监测, 检测调用此函数时是否使用new关键字
     */
    !(this instanceof Vue)
  ) 
  {
    /**
     * @description 从vue/core/util/index.js引入, 但并不是定义的地方, 定义在vue/core/util/debug.js
     */
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
}