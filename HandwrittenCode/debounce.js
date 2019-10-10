function debounce (func, interval = 500, immediate = false) {
  let timer
  return function () {
    if (immediate) {
      func.apply(this, arguments)
      immediate = false
    }
    if (timer) {
      clearTimeout(timer)
    } 
    timer = setTimeout(() => {
      func.apply(this, arguments)
    }, interval) 
  }
}

window.debounce = debounce