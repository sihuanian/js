let str : string = 'abc'
let bool : boolean = false
let num : number = 123

// 数组
let arr1 : number[] = [1, 2, 3]
let arr2 : Array<number> = [1, 2, 3]

// 元组（与[]中的模式相同，不能多也不能少，类型顺序也要一致）
let tuple : [number, string] = [666, 'sihuanian']
tuple[0]
tuple.push(3)
console.log(tuple)

// 函数
let add = (a:number, b:number) => a + b
console.log(add(5, 99))
// => 与 ES6不同，用来表示函数的定义 左边表示参数及类型，右边表示返回值类型
let compute: (x: number, y: number) => number
compute = (a, b) => a + b
console.log(compute(1, 99))

// 重载
function reverse(x: number): number // 只声明
function reverse(x: string): number
function reverse(x: number | string): number | string { // 实现
  if (typeof x === 'number') {
    return Number.parseInt(x.toString().split('').reverse().join(''))
  } else {
    return x.split('').reverse().join('')
  }
}

console.log('reverse("abcdef")', reverse('abcdef'))
console.log('reverse(123456)', reverse(123456))

// 可选参数 必须放到参数列表的最后
function minus(x:number, y: number, z?: number): number {
  let res: number = x
  for (let i = 1; i < arguments.length; i++) {
    res -= arguments[i]
  }
  return res
}

console.log('minus(10, 4)', minus(10, 4))
console.log('minus(10, 4, 2)', minus(10, 4, 2))

function multiply(x: number, y: number, ...items: number[]) {
  let res: number = x * y
  items.forEach(item => {
    res = res * item
    return res
  })
  return res
}
console.log('multiply(3, 5)', multiply(3, 5))
console.log('multiply(3, 5, 4, 6)', multiply(3, 5, 4, 6))


// 对象
let obj: {x: number, y: number} = {x: 1, y: 2}
obj.x = 10

// symbol
let s1 = Symbol()
let s2: symbol = Symbol()
console.log(s1 === s2)

// null undefined 
let nu:null = null // 类型定义为null 的变量可以赋值为undefined,反之也成立
let un:undefined = undefined

// void
let noReturn = () => {} // 返回值为undefinde
let vo: void = undefined // 只能赋值为null 或 undefined

// any
let any // 不限制类型默认就是any类型
any = 1
any = 'a'
any = {}
any = () => {}

// never 永远没有返回值的类型
let error = () => {
  throw new Error('error') // 抛出错误
}
let endLess = () => {
  while (true) {} // 死循环
}

// 联合类型
let union: number | string
union = 888
// union.length 类型推论
union = 'union'
// union.length
