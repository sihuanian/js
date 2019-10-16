// 声明合并

// 函数合并
function reverse(arg:string): string
function reverse(arg:number): number
function reverse(arg:string | number): string | number {
  if (typeof arg === 'number') {
    return Number.parseInt(arg.toString().split('').reverse().join(''))
  } else if(typeof arg === 'string') {
    return arg.split('').reverse().join('')
  }
}

console.log(reverse('123'))
console.log(reverse(123))

// 接口合并
interface Alarm {
  time: string
}
interface Alarm {
  roll: string
  // time: number  // 合并的属性类型一定要一致，否则报错
}

/* 
相当于
interface Alarm {
  time: string
  roll: string
} 
*/
class A implements Alarm{
  constructor(public time:string, public roll: string) {
    this.time = time
    this.roll = roll
  }
}