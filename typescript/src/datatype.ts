import { eventNames } from "cluster"

let str : string = 'abc'
let bool : boolean = false
let num : number = 123

// 数组
let arr1 : number[] = [1, 2, 3]
let arr2 : Array<number> = [1, 2, 3]

// 元组（与[]中的模式相同，不能多也不能少，类型顺序也要一致）
let tuple : [number, string] = [666, 'sihuanian']
tuple[0]
tuple.push(3) // 不建议使用
console.log('tuple', tuple)

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

// 断言
function assert(a: number | string):number {
  if ((a as string).length) {
    return (<string>a).length
  } else {
    return a.toString().length
  }
}
console.log('assert(123)', assert(123))
console.log('assert(123)', assert('123'))


// 类型别名
type Name = string
let pName: Name = 'sihuanian'
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}

// 字符串字面量  用来约束字符串只能在规定的值中取值
type EventNames = 'click' | 'mousemove' | 'scroll'
function handlerEvent(e:Element, eventName: EventNames) {
  e.addEventListener(eventName, () => {
    console.log('触发了 ' + eventName + '事件')
  })
}
handlerEvent(document.body, 'mousemove')

// 枚举
enum Color {Green, Red, Blue} // read-only
let color: Color = Color.Blue // 2
let red: string = Color[1] // Red
console.log('enum', color, red);
// 手动赋值的枚举项如果不是数字，则需要使用断言让tsc 无视类型检测
enum coins {top = <any>'正', bottom = 1}
// 手动赋值可以是小数或负数 步长仍为1
// 枚举项常数项和计算所得项，计算所得项后的项必须手动赋值

// 常数枚举  不能包括计算项
const enum Directives { Up, Down, Left, Right} // => ''
let directives = [Directives.Up, Directives.Down] // => [0, 1]

// 外部枚举
declare enum Person {Tom, Jerry}