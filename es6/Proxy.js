// get

let target = {}
let handler = {
  // 只要访问target对象上的属性就会返回22
  get (target, property, receiver) {
    return 22
  }
}

let proxy = new Proxy(target, handler)

console.log('proxy.name', proxy.name) // 22
// console.log(target.name) // undefined

// 要使得Proxy起作用，必须针对Proxy实例（上例是proxy对象）进行操作，
// 而不是针对目标对象（上例是空对象）进行操作。

let target1 = {name: 'sihuanian'}
let proxy1 = new Proxy(target1, {
  get (target, property) {
    if (property in target) {
      console.log('in')
      return target[property]
    } else {
      throw new ReferenceError(`property ${property} is not exist`)
    }
  }
})

console.log('proxy1.name', proxy1.name) // sihuanian
// console.log('proxy1.age', proxy1.age) // ReferenceError



// apply
let target2 = function func(...args) {
  return 'function'
}
let handler2 = {
  // 目标对象， this, 参数数组
  apply (target, context, ...args) {
    console.log('apply')
    return 'I am the proxy'
  }
}

let proxy2 = new Proxy(target2, handler2)

console.log(proxy2())


// set
// 当目标对象的某个属性是不可配置且不可写时set 操作无效，严格模式下set 操作没有成功就会报错
let handler3 = {
  set (target, property, value) {
    if (property === 'age') {
      if (typeof value !== 'number') {
        throw new TypeError('需要数值类型的值')
      }
    }
    if (value > 200) {
      throw new RangeError(property + ' is invaild')
    }
    return target[property] = value
  }
}

let target3 = {}
Object.defineProperty(target3, 'gender', {
  value: 'm',
  configurable: false,
  writable: false
})
let proxy3 = new Proxy(target3, handler3)
// proxy3.age = '22'
// proxy3.age = 201
proxy3.age = 22
console.log(proxy3.gender)

// proxy3.gender = 'f'
// console.log(proxy3.gender)


// has  拦截原型链上是否有某个属性，如果某个属性是不可配置的或者目标对象是不可扩展的has 就不能返回false
// has 对 for let in 无效
let target4 = {name: 'sihuanian', _id: 007}
// Object.preventExtensions(target4)
let handler4 = {
  // 目标对象  属性名
  has (target4, name) {
    if (name[0] === '_') {
      return false
    }
    return name in target4
  }
}

let proxy4 = new Proxy(target4, handler4)
console.log('name in proxy4: ', 'name' in proxy4) // true
console.log('_id in proxy4: ', '_id' in proxy4) // false


// construct 拦截new,必须返回一个对象，否则报错
let target5 = function () {}
let handler5 = {
  construct (target5, args) {
    // return args[0]
    return { value: args[0] }
  }
}
let proxy5 = new Proxy(target5, handler5)
console.log(new proxy5(100))


// deleteProperty
// 如果目标对象自身是不可配置的属性，不能被deleteProperty删除
let target6 = {_id: 007, name: 'sihuanian'}
Object.defineProperty(target6, 'gender', {
  value: 'f',
  writable: true,
  enumerable: true
})
let handler6 = {
  deleteProperty (target, key) {
    if (key[0] === '_') {
      throw new Error('不可以删除私有属性')
    }
    delete target[key]
    return true
  }
}
let proxy6 = new Proxy(target6, handler6)
delete proxy6.name
console.log(proxy6)
// delete proxy6._id
// console.log(proxy6)
// delete proxy6.gender
// console.log(proxy6)