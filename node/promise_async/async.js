// (async function () {
//   await
// })()

// function interview(round) {
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.2) {
//         resolve(round)
//       } else {
//         reject(new Error(round))
//       }
//     }, 200);
//   })
// }


(function () {
  var result = async function () {
    var content = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 200);
    })
    console.log(content)
    return 4
  }()
  setTimeout(() => {
    console.log(result)
  }, 500)
})()