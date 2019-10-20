function interview(round) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.8) {
        reject(new Error(round))
      } else {
        resolve()
      }
    }, 200)
  })
}

const promise = new interview(1)
promise
  .then((res) => {
    return interview(2)
  })
  .then((res) => {
    return interview(3)
  })
  .then(() => {
    console.log('smile')
  })
  .catch((error) => {
    console.log('cry in ' + error.message)
  })
