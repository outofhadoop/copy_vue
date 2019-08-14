import config from "../config";


/**
 * @todo something unfilling
 */
import { mark, measure } from '../util/perf'
/**
 * @todo something unfilling
 */

import { extend, mergeOptions, formatComponentName } from '../util/index'

let uid = 0

export function initMixin(Vue: Class < Component > ) {
  Vue.prototype._init = function(options ? Object) {
    const vm: Component = this
      // a uid
    vm.uid = uid++

      let startTarg, endTarg
        /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTarg = `vue-perf-start:${vm.uid}`
      endTarg = `vue-perf-end:${vm.uid}`
        // 在初始化开始的时候标记
      mark(startTarg)


    }
    // a flag to avoid this being observed
    vm._isVue = true
      // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the 
      // internal component options needs special treatement
      initInternalComponent(vm, options)
    } else {
      vm.$options = mergeOptions(
          resolveConstructorOptions(vm.constructor),
          options || {},
          vm
        )
        /**
         * @todo something unfilling
         */
    }
  }
}

export function initInternalComponent(vm: Component, options: InternalComponentOptions) {
  const opts = vm.$options = Object.create(vm.constructor.options)
    // doing this because it's faster than dynamic enumeration.
  const parentVnode = options._parentVnode
  opts.parent = options.parent
  opts._parentVnode = parentVnode

  const vnodeComponentOptions = parentVnode.vnodeComponentOptions
  opts.propsData = vnodeComponentOptions.propsData
  opts._parentListeners = vnodeComponentOptions.listeners
  opts._renderChildren = vnodeComponentOptions.children
  opts._componentTag = vnodeComponentOpitons.tag

  if (options.render) {
    opts.render = options.render
    opts.staticRenderFns = options.staticRenderFns
  }
}
export function resolveConstructorOptions(Ctor: Class < Component > ) {
  let options = Ctor.options
  if (Ctor.super) {
    const superOptions = resolveConstructorOptions(Ctor.super)
    const cacheSuperOptions = Ctor.superOptions
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options
      Ctor.superOptions = superOptions
        // check if there are any late-modified/attched options (#4976)
      const modifiedOptions = resolveModifiedOptions(Ctor)
        // update base extend options
      if (modifiedOptions) {
        /**
         * @todo CURRENT
         */
        extend(Ctor.extendOptions, modifiedOptions)
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions)
      if (options.name) {
        options.components[options.name] = Ctor
      }
    }
  }
  return options
}

/**
 * @description 比较参数下的options和sealedOptions两个字段，返回这两个字段里不相等的属性
 */
function resolveModifiedOptions(Ctor: Class < Component > ): ? Object {
  let modified
  const latest = Ctor.options
  const sealed = Ctor.sealedOptions
  for (const key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) {
        modified = {}
      }
      modified[key] = latest[key]
    }
  }
  return modified
}