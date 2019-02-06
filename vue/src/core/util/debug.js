/**
 * @file 暂时用到了警告（warn）部分
 */
/**
 * @description 'noop'是一个空函数
 */
import { noop } from "shared/util";

/**
 * 关于Vue和杂七杂八的配置
 */
import config from "../config";

export let warn = noop;
/**
 * @todo something unfilling
 */

/**
 * @todo unknown
 */
export let generateComponentTrace = (noop: any); // work around flow check

/**
 * @todo something unfilling
 */

if (process.env.NODE_ENV !== "production") {
  const hasConsole = typeof console !== undefined;

  /**
   * @description 这个正则会匹配到开始字符或以[-_]后面跟一个字母或者数字,
   * '(?:)'非捕获括号,匹配项不能被$1这种访问到
   * '\w' 等同于 [A-Za-z0-9_]
   * '^' 匹配输入开始
   */
  const classifyRE = /(?:^|[-_])(\w)/g;

  /**
   *
   * @param {String} str
   * @description 会把字符串的首字母大写并转为驼峰写法；如：'to-upper_case' 转化为 'ToUpperCase'
   */
  const classify = str =>
    str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, "");

  warn = (msg, vm) => {
    /**
     * @todo unknown
     */
    const trace = vm ? generateComponentTrace(vm) : "";

    if (config.warnHandler) {
      /**
       * @todo unknown
       * 虽然src/core/config.js中声明了warnHandler, 但是并没有定义
       */
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && !config.slient) {
      console.log(`[Vue warn]: ${msg}${trace}`);
    }
  };

  /**
   * @todo something unfilling
   */
  
  /**
   *
   * @param {String} str
   * @param {Number} n
   */
  const repeat = (str, n) => {
    let res = "";
    while (n) {
      if (n % 2 === 1) res += str;
      if (n > 1) str += str;
      /**
       * @description >>= 是赋值运算符, 名为有符号右移, 是转为2进制后舍掉右边多少位, 然后左边用0填充
       * @todo unknown
       */
      n >>= 1;
    }
    return res;
  };

  /**
   * 格式化组件名, 返回组件的名称, <组件名 + 文件名>
   */
  formatComponentName = (vm, includeFile) => {
    /**
     * vm有个$root属性, 如果是根组件就指向自己
     */
    if (vm.$root == vm) {
      return '<Root>'
    }
    const options = typeof vm == 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm
    let name = options.name || options._componentTag
    const file = options._file
    if (!name && file) {
      const match = file.match(/([^/\\]+)\.vue$/)
      name = match && match(1)
    }
    /**
     * 返回组件的名称, <组件名 + 文件名>
     */
    return (
      (name ? `<${classify(name)}>` : `Anonymous`) +
      (file && includeFile !== false ? ` at ${file}` : '')
    )
  }

  /**
   * 追踪组件, 在warn中用到, 递归输出组件名
   */
  generateComponentTrace = vm => {
    /**
     * @description '_isVue'在src/core/instance/init.js中被添加到Vue原型上
     * 那个位置添加的注释是：a flag to avoid this being observed
     */
    if (vm._isVue && vm.$parent) {
      const tree = [];
      let currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          const last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue;
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return (
        "\n\nfound in\n\n" +
        tree
          .map(
            (vm, i) =>
              `${i === 0 ? "--->" : repeat(" ", 5 + i * 2)}${
                Array.isArray(vm)
                  ? `${formatComponentName(vm[0])}... (${
                      vm[1]
                    } recursive calls)`
                  : formatComponentName(vm)
              }`
          )
          .join("\n")
      );
    } else {
      return `\n\n(found in ${formatComponentName(vm)})`;
    }
  };
}
