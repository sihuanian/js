interface Person {
  name: string;
  age: number;
  gender?: string; // 可选的属性
  [pName: string]: string | number; // 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
  readonly id: number; // 只读属性
}

let s: Person = {
  id: 666,
  name: 'sihuanian',
  age: 21,
  gender: 'm',
  score: 999
}

// s.id = 007 不可以为只读属性赋值