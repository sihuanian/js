class Human {
  // 先需要申明属性或在构造函数中的参数列表中加入访问修饰符
  // readonly 与访问修饰符同时存在要写在其后
  public readonly name: string
  constructor(name: string, private gender: string, protected age: number) {
    this.name = name
    this.gender = gender
    this.age = age
  }

  sayHello (): void {
    console.log('hello,'+ this.name)
  }
}

class Student extends Human {
  constructor(name: string, gender: string, age: number, public score: number) {
    super(name, gender, age)
    // console.log(this.name, this.gender, this.age)
    this.score = score
  }

  printScore (): void {
    console.log(this.name + '\'s score is ' + this.score)
  }
}

const p = new Human('sihuanian', 'F', 21)
p.sayHello()
// p.name = 'rose'
console.log('p.name', p.name) // p.name sihuanian

const kobe = new Student('kobe', 'F', 41, 98)
kobe.printScore()
console.log('kobe.name', kobe.name) // kobe.name kobe


// 抽象类不能被实例化，子类必须实现抽象类的抽象方法
abstract class Animal {
  constructor(public name: string) {
    this.name = name
  }
  public abstract printName(): void // 这里需要()
}

class Cat extends Animal {
  constructor (name: string) {
    super(name)
  }
  printName (): void {
    console.log('my name is ' + this.name)
  }
}

const jerry = new Cat('jerry')
jerry.printName()