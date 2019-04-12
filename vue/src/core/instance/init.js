/**
 * something unfilling
 */

let uid = 0

export function initMixin(Vue: Class<Component>) {
  Vue.prototype._init = function (options? Object) {
    const vm: Component = this
    // a uid
    vm.uid = uid++
    /**
     * @todo main
     */
  }
}

/**
 * something unfilling
 */

 