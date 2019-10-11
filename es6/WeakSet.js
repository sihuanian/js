let ws = new WeakSet()
let obj = {name: 'sihuanian'}
ws.add([1])
ws.add([2])
ws.add(obj)
console.log(ws.has(obj))
obj = null
console.log(ws.has(obj))

// ws.add(Symbol('b'))