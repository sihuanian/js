interface Person {
  name: string;
  age: number;
  gender?: string; // 可选的属性
  // [pName: string]: string | number; // 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
  readonly id: number; // 只读属性
  print(): void;
}

interface Hobbies {
  hName: string
  tell (): void
}

// let s: Person = {
//   id: 666,
//   name: 'sihuanian',
//   age: 21,
//   gender: 'm',
//   score: 999
// }

// s.id = 007 不可以为只读属性赋值

class Stu implements Person, Hobbies {
  public hName: string
  constructor (public id: number, public name: string, public age: number,
     public gender: string, public score: number, public title: string, hName: string ) {
    this.id = id
    this.name = name
    this.age = age
    this.gender = gender
    this.score = score
    this.title = title
    this.hName = hName
  }

  print(): void{
    console.log(this.name, this.id, this.age)
  }

  tell (): void {
    console.log(`my hobbies is ${this.hName}`)
  }
}

const stu = new Stu(2, 'westbook', 30, 'F', 95, 'pg', 'coding')
stu.print()
stu.tell()