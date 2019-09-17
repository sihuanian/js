/**
 * @description: new 运算符的实现
 * @param 函数名
 * @return: Object
 */
function New(func) {
  // 新的对象 
  let res = {}
  // 改变新对象的__proto__的指向
  if (func !== null) {
    res.__proto__  = func.prototype
  }
  // 执行传入的函数
  let ret = func.apply(res, Array.prototype.slice.call(arguments, 1))
  // 如果传入函数返回的是对象或函数就返回这个返回的函数或对象
  if ((typeof ret === 'object' || typeof ret === 'function') && ret !== null ) {
    return ret
  }
  // 传入对象返回的不是对象或函数就返回一个空对象
  return res
}

/**
 * 1. new 问题会返回一个对象
 * 2. new 修改新对象的__proto__ 的指向
 * 3. 修改 this为这个新的对象
 */


function A() {
  this.a = 'aaa'
}
A.prototype.sayA = function () {
  console.log(this.a)
}

let a = New(A)
a.sayA()