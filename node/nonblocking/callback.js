function interview(cb) {
  setTimeout(() => {
    if (Math.random() < 0.8) {
      cb(null, 'success')
    } else {
      // throw new Error('fail')
      cb(new Error('fail'))
    }
  }, 500)
}

// try catch 只能抓取到一个调用栈即一个事件循环内的错误
// try {
  interview((err, res) => {
    if (err) {
      console.log('cry')
    } else {
      console.log('smile')
    }
  })
// } 
// catch(e) {
//   console.log('fail', e)
// }

console.log('start')

// start
// smile