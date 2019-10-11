const glob = require('glob')

// console.time('glob')
// let res = glob.sync(__dirname + '/**/*') // 阻塞的I/O
// console.timeEnd('glob')
// console.log(res)
let res = null
console.time('asyc glob')
// 非阻塞I/O
res = glob(__dirname + '/**/*', (err, data) => {
  res = data
  // console.log(res)
  console.log('got result')
})
console.timeEnd('asyc glob')

console.log(1 + 1)
