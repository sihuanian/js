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
let compute: (x: number, y: number) => number
compute = (a, b) => a + b

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
