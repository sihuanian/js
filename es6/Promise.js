function add(a, b) {
  return a + b
}

/* const promiseify = (func, ...args) => {
  return new Promise((resolve, reject) => {
    try {
      const res = func.apply(null, args)
      res && resolve(res)
    } catch (e) {
      reject(e)
    }
  })
}

const pFunc = promiseify(add, 1, 2)
pFunc.then(res => console.log(res)) */


/* const PAdd = promiseify(add)
PAdd(1, 2).then(res => console.log(res)) // 3

function promiseify(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      try {
        let res = func(...args)
        resolve(res)
      } catch (error) {
        console.log(error)
        reject(error)
      }
    })
  }
}
 */

function promiseAll(promises) {
  return new Promise(function(resolve, reject) {
    if (!isArray(promises)) {
      return reject(new TypeError('arguments must be an array'));
    }
    var resolvedCounter = 0;
    var promiseNum = promises.length;
    var resolvedValues = new Array(promiseNum);
    for (var i = 0; i < promiseNum; i++) {
      (function(i) {
        Promise.resolve(promises[i]).then(function(value) {
          resolvedCounter++
          resolvedValues[i] = value
          if (resolvedCounter == promiseNum) {
            return resolve(resolvedValues)
          }
        }, function(reason) {
          return reject(reason)
        })
      })(i)
    }
  })
}
/**
 * 1. 最后返回一个Promise 函数
 * 2. 依次遍历Promise.all 中的所有promise（全部resolve 就是resolve状态）
 * 3. 使用一个数组保存resolve 的值
 * 4. 所有状态都是resolve 就resolve
 */
