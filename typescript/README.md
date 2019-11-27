# typescript

## 初始化 tsconfig.json  tsc --init

## 编译 .ts文件
> tsc src/app.ts --outFile dist/app.js
> tsc src/* --outDir dist
> tsc src/* --outDir dist --watch

## 原始数据类型

### 布尔值
- boolean 布尔值
- Boolean 对象

### 数值
- number

### 字符串
- string

### 空值
- void
- tips: 
1. 可以用`void`表示没有任何返回值的函数
2. 声明一个`void`类型的变量没有什么用，因为你只能将它赋值为`undefined`和`null`

```TypeScript
function alertName(): void {
    alert('My name is Tom');
}
```

### null 和 undefined
tips: 与`void`的区别是，***`undefined`和`null`是所有类型的子类型***。也就是说`undefined`类型的变量，可以赋值给`number`类型的变量，而`void`不能赋值给`number`类型的变量。


## 任意值

> let a: any = 'str' | 666 | false

tips: 未声明类型的变量，被默认设定为任意值类型

> let a; => let a: any;


## 数据推论

- 有赋值操作时，变量会进行类型推论
> let name = 'sihuanian'; => let name: string = 'sihuanian';


## 联合类型

联合类表示取值可以为多种类型中的一种，可选类型用`|`隔开
> let age: string | number;

tips: 
1. 当typescript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里的共有的属性或方法

```TypeScript
	function getLength(any: string | number): number {
		return any.length
	}
	// Property 'length' does not exist on type 'number'.


	function getString(something: string | number): string{
    	return something.toString();
	}
```
2. 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型

```TypeScript
	let age: number | string;
	age = 17 // age被推断成数值类型可以使用数值类型上的方法
	console.log(age.length) // Property 'length' does not exist on type 'number'
	age = '18' // age被推断成字符串类型可以使用字符串类型上的方法
	console.log(age.length) // 18
```

## 接口

```TypeScript
interface Person {
	name: string;
	age: number;
}
let sihuanian: Person = {
	name: 'sihuanian',
	age: 21
}
// 属性要与接口一致，不能多也不能少
```

### 可选属性

```TypeScript
interface Person {
	name: string;
	age?: number;
}

let sihuanian: Person = {
	name: 'sihuanina',
	age: 21 // 可选的
}
```

### 任意属性
***一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集***

```TypeScript
interface Person {
	name: string;
	age?: number;
	[propName: string]: any;
}

let s: Person = {
	name: 'sihuanian',
	age: 21,
	gender: 'm'
}
```
### 只读属性
```TypeScript
interface Person {
	name: string;
	readonly age: number;
}

let p: Person = {
	name: 'sihuanian',
	age: 21
}

// s.age 不能为只读属性赋值
```


## 数组的类型
> 类型 + []  let arr: number[] = [1, 2, 3]

数组的类型一旦定义之后，不能向其中添加非指定类型的值。

> 数组的泛型 let arr: Array<number> = [1, 2, 3]
> 接口， 类数组经常使用接口定义类型



## 函数
```ts
// 函数表达式
let add: (a: number, b: number) => number = function (a: number, b: number): number {
	return a + b
}
```
1. 函数的重载
> note: 函数重载优先匹配前面的函数定义，所以精确的定义应该放到前面
```ts
function reverse(x: number): number // 只声明
function reverse(x: string): number
function reverse(x: number | string): number | string { // 实现
  if (typeof x === 'number') {
    return Number.parseInt(x.toString().split('').reverse().join(''))
  } else {
    return x.split('').reverse().join('')
  }
}
```
2. 函数的可选参数
```ts
> note: 参数默认值之后不可以有必需的参数（使用参数默认值后失效）
function add (a: number, b: number, c?: number): number {
	if (c) {
		return a + b + c
	}
	return a + b
}
```
3. 函数的默认值
4. 函数的剩余参数
> 剩余参数只能在参数列表的最后面

## 断言
手动指定一个值的类型
> <类型>值  <number> a
> 值 as 类型  a as number
断言成一个联合类型中不存在的值是不允许的

## 声明文件
> note: 声明文件中不能有具体实现
1. 声明文件必须以 ***.d.ts*** 为后辍

## 类型别名
> type Name = string

## 字符串字面量
	字符串字面量  用来约束字符串只能在规定的值中取值
> type EventNames = 'click' | 'mousemove' | 'scroll'

## 枚举

> enum Direction {Up, Down, Left, Right}
> const enume Person {}
> declare enum Color {}


## 类

- public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
- private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
- protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

tips：
1. 使用`private`修饰的属性或方法子类也是不可以访问的
2. `protected`修饰的属性或方法子类是可以访问的
3. `private`修饰构造函数时，这个类是不可以被继承和实例化的
4. `protected`修饰构造函数时，这个类只可以被继承，不能被实例化
5. 访问修饰符可以使用在构造函数的参数中，等同于定义属性

- 只读关键字 `readonly`
	关键字只允许出现在属性声明和参数签名中
	关键字与访问修饰符同时存在时，`readonly`要写在修饰符之后

## 泛型
> function identity <T> (arg: T): T { return arg }
1. 泛型约束，可以让泛型extends 一个接口
```ts
interface LengthWise {
	length: number;
}
function returnLength <T extends LengthWise>(source: T): number {
	return source.length
}
```

## 声明合并
1. 函数合并
2. 接口合并
	合并的属性类型要一致
	方法与函数合并相同
3. 类合并
	与接口合并一致