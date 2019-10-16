function identity<T>(param: T): T {
  return param
}
// function identity(param: any): any {
//   return 666
// }
console.log(identity(123)) // 类型推论
console.log(identity<string>('kobe'))
console.log(identity(false))
console.log(identity([1,2,3]))

// 多个类型参数

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]] 
}
console.log(swap([2, '泛型']))

// 类型约束
interface Length {
  length: number
}
// 这是使用的是extends关键字
function Lengthwise<T extends Length>(arg: T): T {
  console.log(arg.length)
  return arg
}
console.log(Lengthwise('string'))
